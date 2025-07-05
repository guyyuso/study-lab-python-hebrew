import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Code, Terminal, Database, Globe, Wrench, TestTube, Package, Cpu, 
  ArrowRight, ArrowLeft, FileText, CheckCircle, Lightbulb, Award, Star,
  Target, Clock, Trophy, HelpCircle, Eye, EyeOff, Zap, Gift
} from 'lucide-react';

interface Lab {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  difficulty: 'מתחיל' | 'בינוני' | 'מתקדם';
  estimatedTime: string;
  topics: string[];
  folder: string;
  maxPoints: number;
}

interface LabFile {
  name: string;
  content: string;
  type: 'python' | 'markdown' | 'text' | 'json' | 'yaml';
}

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
  points: number;
  hint: string;
  detailedHint: string;
}

interface ProgressData {
  [labId: number]: {
    completedTodos: number[];
    totalPoints: number;
    started: boolean;
    completed: boolean;
  };
}

const labs: Lab[] = [
  {
    id: 1,
    title: "משתנים וסוגי נתונים",
    description: "למד יסודות פייתון כולל משתנים, מחרוזות, מספרים, רשימות ומילונים",
    icon: <Code className="w-6 h-6" />,
    difficulty: 'מתחיל',
    estimatedTime: '15-20 דקות',
    topics: ['משתנים', 'סוגי נתונים', 'פעולות בסיסיות'],
    folder: 'root',
    maxPoints: 100
  },
  {
    id: 2,
    title: "לולאות ולוגיקה מותנית",
    description: "שלוט בזרימת התוכנית עם הוראות if, לולאות for ולולאות while",
    icon: <Terminal className="w-6 h-6" />,
    difficulty: 'מתחיל',
    estimatedTime: '20-25 דקות',
    topics: ['הוראות if', 'לולאות for', 'לולאות while', 'לולאות מקוננות'],
    folder: 'labs/lab2',
    maxPoints: 120
  },
  {
    id: 3,
    title: "פונקציות ומודולים",
    description: "צור קוד לשימוש חוזר עם פונקציות וארגן קוד למודולים",
    icon: <Package className="w-6 h-6" />,
    difficulty: 'מתחיל',
    estimatedTime: '15-20 דקות',
    topics: ['פונקציות', 'מודולים', 'ייבוא', 'ארגון קוד'],
    folder: 'labs/lab3',
    maxPoints: 110
  },
  {
    id: 4,
    title: "טיפול בקבצים",
    description: "קרא וכתוב קבצים, חיוני לעיבוד נתונים ואוטומציה",
    icon: <FileText className="w-6 h-6" />,
    difficulty: 'מתחיל',
    estimatedTime: '15-20 דקות',
    topics: ['קריאת קבצים', 'כתיבת קבצים', 'קבצי CSV', 'טיפול בשגיאות'],
    folder: 'labs/lab4',
    maxPoints: 130
  },
  {
    id: 5,
    title: "טיפול בשגיאות ולוגים",
    description: "בנה יישומים יציבים עם טיפול בשגיאות ולוגים תקינים",
    icon: <Wrench className="w-6 h-6" />,
    difficulty: 'בינוני',
    estimatedTime: '20-30 דקות',
    topics: ['Try-Except', 'שגיאות מותאמות', 'לוגים', 'דיבוג'],
    folder: 'labs/lab5',
    maxPoints: 150
  },
  {
    id: 6,
    title: "תכנות מונחה עצמים",
    description: "למד מושגי OOP עם מחלקות, הורשה ופולימורפיזם",
    icon: <Cpu className="w-6 h-6" />,
    difficulty: 'בינוני',
    estimatedTime: '25-35 דקות',
    topics: ['מחלקות', 'אובייקטים', 'הורשה', 'פולימורפיזם'],
    folder: 'labs/lab6',
    maxPoints: 180
  },
  {
    id: 7,
    title: "בדיקות יחידה",
    description: "כתוב קוד אמין עם אסטרטגיות בדיקות יחידה מקיפות",
    icon: <TestTube className="w-6 h-6" />,
    difficulty: 'בינוני',
    estimatedTime: '25-30 דקות',
    topics: ['unittest', 'מקרי בדיקה', 'הצהרות', 'כיסוי בדיקות'],
    folder: 'labs/lab7',
    maxPoints: 160
  },
  {
    id: 8,
    title: "עבודה עם פורמטי נתונים",
    description: "עבד עם פורמטי נתונים JSON, YAML ו-XML הנפוצים ב-DevOps",
    icon: <Database className="w-6 h-6" />,
    difficulty: 'בינוני',
    estimatedTime: '20-25 דקות',
    topics: ['JSON', 'YAML', 'XML', 'אימות נתונים'],
    folder: 'labs/lab8',
    maxPoints: 150
  },
  {
    id: 9,
    title: "אינטראקציה עם API ו-REST",
    description: "אינטראקציה עם RESTful APIs לאוטומציה מודרנית של DevOps",
    icon: <Globe className="w-6 h-6" />,
    difficulty: 'מתקדם',
    estimatedTime: '30-40 דקות',
    topics: ['בקשות HTTP', 'REST APIs', 'אימות', 'טיפול בשגיאות'],
    folder: 'labs/lab9',
    maxPoints: 200
  },
  {
    id: 10,
    title: "פיתוח CLI",
    description: "בנה כלי שורת פקודה מקצועיים לאוטומציה של DevOps",
    icon: <Terminal className="w-6 h-6" />,
    difficulty: 'מתקדם',
    estimatedTime: '35-45 דקות',
    topics: ['argparse', 'CLI design', 'subcommands', 'automation'],
    folder: 'labs/lab10',
    maxPoints: 220
  }
];

// Get actual lab content from the project files
const getLabContent = (labId: number): LabFile[] => {
  const lab1MainPy = `#!/usr/bin/env python3
"""
LAB01 - Python Basics: Variables and Data Types

Instructions:
1. Follow the comments below to create variables and print them
2. Run the script to see your results
3. Try experimenting with different values
"""

# TODO: 1. Create variables of different types
# Create a string variable called 'name'
# Example: name = "Your Name"
name = "your name"

age = 30

height = 6.4    
is_hungry = True 
skills = ["Python", "Javacript", "SQL"]
skillsnum = 3
profile = {
    "name": name,
    "age": age,
    "skills": skills}


print("Name:", name)
print("Age:", age)
print("height:",height)
print("Is Hungry:", is_hungry)
print("Skills:", skills)   
print("Profile:", profile)
print("Age in 5 years:", age + 5)
print("number of skills",skillsnum)
print("First skill:", skills[0])

skills.append("Linux")
print("updaered skills:", skills)
print("new in uppercase:", name.upper())
print("new in lowercase:", name.lower())
print(".append() method:", skills)

# Try adding a new skill to your list with .append()

# Try adding a new key-value pair to your dictionary


print("\\nOnce you're done, run this file with: python main.py")
print("Check your output against the validation checklist in the README.md")`;

  const lab2MainPy = `#!/usr/bin/env python3
"""
LAB02 - Python Basics: Loops and Conditional Logic

Instructions:
1. Complete each of the exercises below
2. Add your own code where indicated by the TODO comments
3. Run the script to test your implementations
"""

# TODO: 1. Conditional Statements
# Create a variable 'age' and write conditional logic to print 
# different messages based on the age value
# - If age is 18 or older: "You are an adult."
# - If age is between 13-17: "You are a teenager."
# - Otherwise: "You are a child."



# TODO: 2. Loop Over a List
# Create a list called 'skills' with at least 3 technology skills
# Use a for loop to iterate over the list and print each skill
# Example output: "Learning: Python"



# TODO: 3. Use a While Loop
# Create a counter variable
# Write a while loop that prints the counter value until it reaches 3
# Don't forget to increment the counter inside the loop!



# TODO: 4. Bonus: Loop with Conditional Logic
# Create a list of 'users' including at least "admin", "guest", and one other username
# Loop through the users and print a different greeting message for "admin" vs other users



# TODO: 5. Extra Challenge: Nested Loops
# Create a small 2D structure (e.g., a 3x3 grid using a list of lists)
# Use nested loops to iterate through each element and print its position and value



print("\\nGreat job! You've successfully worked with loops and conditionals.")
print("Run this script with: python main.py")
print("Check your implementation against the validation checklist in the README.md")`;

  const lab3MainPy = `#!/usr/bin/env python3
"""
LAB03 - Functions and Modules in Python

Instructions:
1. Complete both this file and helper.py
2. Import and use the functions from helper.py in this file
3. Run the script to test your implementations
"""

# TODO: Import functions from helper.py
# Add your import statement here to bring in the functions you'll create


# TODO: Call the greet() function
# Call the greet() function with your name or "DevOps Learner"


# TODO: Call the add() function
# Call the add() function with two numbers and print the result
# Example: print("Sum:", add(5, 3))


# TODO: Bonus - Call the max_of_three() function
# Call the max_of_three() function with three different numbers
# Print the result


# TODO: Extra Challenge - Create and call a new function
# First, add a new function to helper.py (e.g., multiply, calculate_area, etc.)
# Then import and use it here


print("\\nGreat job! You've successfully worked with functions and modules.")
print("Run this script with: python main.py")
print("Check your implementation against the validation checklist in the README.md")`;

  const lab3HelperPy = `#!/usr/bin/env python3
"""
Helper Module for LAB03

This module contains utility functions that will be imported and used in main.py.
"""

# TODO: Define a function called greet
# This function should:
# - Accept a parameter called 'name'
# - Return a greeting string like "Hello, {name}!"
# Example: def greet(name):
#              return f"Hello, {name}!"


# TODO: Define a function called add
# This function should:
# - Accept two parameters, 'x' and 'y'
# - Return the sum of x and y


# TODO: Bonus - Define a function called max_of_three
# This function should:
# - Accept three parameters: 'a', 'b', and 'c'
# - Return the maximum value of the three
# Hint: You can use the built-in max() function


# TODO: Extra Challenge - Create your own function
# Define a new function that does something useful (e.g., calculate area, multiply numbers, etc.)
# Make sure to include docstrings explaining what the function does!


if __name__ == "__main__":
    # This code only runs when helper.py is executed directly (not when imported)
    print("This is the helper module containing utility functions.")
    print("Import these functions in main.py to use them!")
    
    # You can also add test calls here to verify your functions work correctly
    # Examples:
    # print(greet("Test User"))
    # print(add(10, 20))`;

  const lab4MainPy = `#!/usr/bin/env python3
"""
LAB04 - File Handling in Python

Instructions:
1. Complete the code blocks below to practice file operations
2. Run the script to test your implementations
3. Check the created files to verify your operations worked correctly
"""

# TODO: 1. Read from a file
# Use a 'with' block to open 'input.txt' in read mode
# Read the content and print it with a header


# TODO: 2. Write to a new file
# Use a 'with' block to open 'output.txt' in write mode ('w')
# Write a message to the file
# Note: This will create a new file or overwrite an existing one


# TODO: 3. Append to a file
# Use a 'with' block to open 'output.txt' in append mode ('a')
# Add another line of text to the file


# TODO: 4. Handle file errors
# Use a try-except block to handle FileNotFoundError
# Try to open a file that doesn't exist
# Print an appropriate error message when the file isn't found


# TODO: 5. Bonus: Read file line by line
# Open 'input.txt' and read it line by line
# Print each line with its line number
# Example output: "Line 1: This is the first line."


# TODO: 6. Extra Challenge: Work with CSV data
# If you finish early, try creating and reading a simple CSV file
# Hint: You can use the csv module, or work with it as a regular text file
#       with comma-separated values


print("\\nGreat job! You've successfully practiced file handling operations.")
print("Check the output.txt file to see the results of your write operations.")
print("Run this script with: python main.py")`;

  const lab4InputTxt = `Welcome to the File Handling Lab!
This file contains multiple lines of text that you can read using Python.

In DevOps automation, reading files is essential for:
- Processing log files
- Reading configuration data
- Analyzing system outputs
- Parsing command results

You can read this entire file at once with file.read(),
or line by line with a for loop.

Try both approaches to see which works better for different scenarios!`;

  const lab5MainPy = `#!/usr/bin/env python3
"""
LAB05 - Error Handling and Logging in Python

Instructions:
1. Complete the code blocks below to implement error handling and logging
2. Run the script to see how exceptions are managed
3. Check the app.log file to view your log entries
"""

# TODO: 1. Import the logging module
# Import the necessary module for logging


# TODO: 2. Configure basic logging
# Set up logging to write to "app.log" with a level of INFO and appropriate format
# Format should include timestamp, log level, and message


# TODO: 3. Write some initial log messages
# Log an INFO message that the program is starting


# TODO: 4. Handle division by zero exception
# Create a try-except-finally block that:
# - Asks the user for a number (use input())
# - Divides 100 by that number
# - Handles both ZeroDivisionError and ValueError with appropriate messages
# - Logs any errors that occur
# - Uses a finally block to indicate execution is complete


# TODO: 5. Handle file operations with exceptions
# Create a try-except block that:
# - Attempts to open and read a file called "config.json"
# - Catches FileNotFoundError and logs the error
# - Logs a success message if the file opens correctly


# TODO: 6. Create and raise a custom exception
# Define a custom exception class called "InvalidValueError"
# Create a function that checks a value and raises this exception if the value is invalid
# Call this function in a try-except block and handle the custom exception


# TODO: 7. Bonus: Different logging levels
# Log messages with different severity levels:
# - DEBUG (detailed information for debugging)
# - INFO (confirmation that things are working)
# - WARNING (something unexpected, but the program still works)
# - ERROR (a more serious problem, some functionality is unavailable)
# - CRITICAL (a very serious error, the program might stop running)


print("\\nGreat job! You've successfully practiced error handling and logging.")
print("Check the app.log file to see your logged messages.")
print("Run this script with: python main.py")`;

  const lab6MainPy = `#!/usr/bin/env python3
"""
LAB06 - Object-Oriented Programming (OOP) in Python

This lab introduces you to object-oriented programming concepts in Python.
You'll create classes to model servers in a DevOps environment, implement
inheritance for specialized server types, and learn how OOP can make your
automation code more modular and maintainable.

Instructions:
1. Complete the code blocks below according to the TODOs
2. Run the script to see how objects interact
3. Extend the implementation with your own ideas
"""

# TODO: 1. Create a Server class
# Define a class called 'Server' with:
# - An __init__ method that takes 'name' and 'ip' parameters and stores them as attributes
# - A 'ping' method that prints a message showing the server is being pinged
#
# Example structure:
# class Server:
#     def __init__(self, name, ip):
#         # Your code here
#
#     def ping(self):
#         # Your code here


# TODO: 2. Instantiate a Server object
# Create an instance of your Server class with a name and IP address
# Call the ping method on your server instance
# Example:
# web_server = Server("web01", "192.168.1.10")
# web_server.ping()


# TODO: 3. Create a DatabaseServer class that inherits from Server
# Define a class that extends Server with:
# - An __init__ method that takes 'name', 'ip', and 'engine' parameters
# - A call to the parent class's __init__ method using super()
# - An 'engine' attribute to store the database engine type
# - A 'backup' method that prints a message about backing up the database
#
# Example structure:
# class DatabaseServer(Server):
#     def __init__(self, name, ip, engine):
#         # Your code here
#
#     def backup(self):
#         # Your code here


# TODO: 4. Instantiate a DatabaseServer object
# Create an instance of your DatabaseServer class with appropriate parameters
# Call both the ping method (inherited from Server) and the backup method
# Example:
# db_server = DatabaseServer("db01", "192.168.1.11", "PostgreSQL")
# db_server.ping()
# db_server.backup()


# TODO: 5. Add more advanced OOP concepts (Bonus)
# Try implementing some of these advanced concepts:
# - Add a class variable to Server (shared across all instances)
# - Create a static method for IP validation
# - Implement property getters and setters for a 'status' attribute
# - Override the ping method in DatabaseServer to customize its behavior
#
# Example structure for property:
# @property
# def status(self):
#     return self._status
#
# @status.setter
# def status(self, new_status):
#     # Add validation logic here


# TODO: 6. Extra Challenge: Create another derived class
# Create a WebServer class that also inherits from Server with:
# - Additional attributes like 'web_server_type' (e.g., "Nginx", "Apache")
# - Methods specific to web servers (deploy, restart, etc.)
# - Demonstrate polymorphism by creating a list of different server types
#   and calling common methods on them
#
# Example polymorphism:
# servers = [web_server, db_server, web_server2]
# for server in servers:
#     server.ping()  # Each server type will use its own implementation


# Display success message
print("\\nGreat job! You've successfully worked with OOP concepts in Python.")
print("You've created classes, instantiated objects, and implemented inheritance.")
print("These skills will help you build modular DevOps automation tools.")`;

  const lab7MainPy = `#!/usr/bin/env python3
"""
LAB08 - Unit Testing Basics in Python

This module contains functions that will be tested with the unittest framework.
These functions demonstrate common operations that might be used in DevOps automation
scripts, and will help you learn how to properly test your code.
"""

# TODO: Implement the add function
# The function should:
# - Take two parameters (a and b)
# - Return their sum
# - Include a proper docstring with Args and Returns sections
#
# Example:
# def add(a, b):
#     """
#     Add two numbers and return the result.
#     
#     Args:
#         a: First number
#         b: Second number
#         
#     Returns:
#         The sum of a and b
#     """
#     return a + b


# TODO: Implement the is_even function
# The function should:
# - Take a single parameter (number)
# - Return True if the number is even, False otherwise
# - Include a proper docstring
#
# Example:
# def is_even(number):
#     """
#     Check if a number is even.
#     
#     Args:
#         number: The number to check
#         
#     Returns:
#         True if the number is even, False otherwise
#     """
#     return number % 2 == 0


# TODO: Implement the get_largest function
# The function should:
# - Take a list of numbers as a parameter
# - Return the largest number in the list
# - Raise ValueError if the list is empty
# - Include a proper docstring with Args, Returns, and Raises sections
#
# Example:
# def get_largest(numbers):
#     """
#     Get the largest number from a list.
#     
#     Args:
#         numbers: A list of numbers
#         
#     Returns:
#         The largest number in the list
#         
#     Raises:
#         ValueError: If the list is empty
#     """
#     if not numbers:
#         raise ValueError("Cannot find largest in an empty list")
#     return max(numbers)


# TODO: Implement the reverse_string function
# The function should:
# - Take a string parameter
# - Return the reversed string
# - Include a proper docstring
#
# Example:
# def reverse_string(s):
#     """
#     Reverse a string.
#     
#     Args:
#         s: The string to reverse
#         
#     Returns:
#         The reversed string
#     """
#     return s[::-1]


# This section allows you to manually test your functions
if __name__ == "__main__":
    # This code runs only if the script is executed directly
    # You can use this section to manually test your functions
    print("Testing functions manually:")
    
    # Uncomment these lines after implementing your functions:
    # print(f"add(2, 3) = {add(2, 3)}")
    # print(f"is_even(4) = {is_even(4)}")
    # print(f"get_largest([1, 5, 3]) = {get_largest([1, 5, 3])}")
    # print(f"reverse_string('hello') = {reverse_string('hello')}")
    
    print("Remember that manual testing is no substitute for automated tests!")
    print("Make sure to implement the tests in test_main.py as well.")`;

  const lab7TestMainPy = `#!/usr/bin/env python3
"""
LAB08 - Unit Testing Basics in Python

This module contains unit tests for the functions in main.py.
It demonstrates how to structure test cases, use assertions,
and test different aspects of your code.
"""

import unittest
# TODO: Import the functions you'll be testing from main.py
# Example:
# from main import add, is_even, get_largest, reverse_string


class TestMain(unittest.TestCase):
    """Test case for the functions in main.py."""
    
    # TODO: Write a test method for the add function
    # The method should:
    # - Be named test_add
    # - Test multiple scenarios (positive numbers, negative numbers, zeros)
    # - Use assertEqual to verify that the function returns the expected sum
    # 
    # Example:
    # def test_add(self):
    #     """Test the add function with various inputs."""
    #     # Test positive numbers
    #     self.assertEqual(add(2, 3), 5)
    #     # Test negative numbers
    #     self.assertEqual(add(-1, -2), -3)
    #     # Test mixed numbers
    #     self.assertEqual(add(-5, 10), 5)
    #     # Test zeros
    #     self.assertEqual(add(0, 0), 0)
    
    
    # TODO: Write a test method for the is_even function
    # The method should:
    # - Be named test_is_even
    # - Test both even and odd numbers
    # - Use assertTrue for even numbers and assertFalse for odd numbers
    # - Include edge cases like zero and negative numbers
    # 
    # Example:
    # def test_is_even(self):
    #     """Test the is_even function."""
    #     # Test with even numbers
    #     self.assertTrue(is_even(2))
    #     self.assertTrue(is_even(0))
    #     self.assertTrue(is_even(-4))
    #     # Test with odd numbers
    #     self.assertFalse(is_even(1))
    #     self.assertFalse(is_even(-3))
    
    
    # TODO: Write a test method for the get_largest function
    # The method should:
    # - Be named test_get_largest
    # - Test with various list inputs
    # - Use assertEqual to verify the function returns the largest number
    # - Include tests for negative numbers, duplicates, and single-element lists
    # 
    # Example:
    # def test_get_largest(self):
    #     """Test the get_largest function."""
    #     # Test with positive numbers
    #     self.assertEqual(get_largest([1, 5, 3]), 5)
    #     # Test with negative numbers
    #     self.assertEqual(get_largest([-1, -5, -3]), -1)
    #     # Test with mixed numbers
    #     self.assertEqual(get_largest([-10, 5, 0]), 5)
    #     # Test with a single element
    #     self.assertEqual(get_largest([7]), 7)
    
    
    # TODO: Write a test method for the get_largest function with empty list
    # The method should:
    # - Be named test_get_largest_empty_list
    # - Use assertRaises to verify that an empty list raises ValueError
    # 
    # Example:
    # def test_get_largest_empty_list(self):
    #     """Test that get_largest raises ValueError with an empty list."""
    #     with self.assertRaises(ValueError):
    #         get_largest([])
    
    
    # TODO: Write a test method for the reverse_string function
    # The method should:
    # - Be named test_reverse_string
    # - Test with various string inputs
    # - Use assertEqual to verify the function returns the reversed string
    # - Include tests for empty strings, single characters, and palindromes
    # 
    # Example:
    # def test_reverse_string(self):
    #     """Test the reverse_string function."""
    #     # Test with a regular word
    #     self.assertEqual(reverse_string("hello"), "olleh")
    #     # Test with an empty string
    #     self.assertEqual(reverse_string(""), "")
    #     # Test with a palindrome
    #     self.assertEqual(reverse_string("radar"), "radar")
    #     # Test with a sentence
    #     self.assertEqual(reverse_string("Hello World"), "dlroW olleH")
    
    
    # BONUS: Explore other assertion methods
    # Try using different assertion methods like:
    # - assertIn: Check if an item is in a container
    # - assertIsNone: Check if something is None
    # - assertAlmostEqual: Compare floats with tolerance
    # - assertGreater: Check if a value is greater than another
    # 
    # Example:
    # def test_bonus_assertions(self):
    #     """Demonstrate various assertion methods."""
    #     # assertIn example
    #     self.assertIn(5, [1, 3, 5, 7])
    #     # assertIsNone example
    #     self.assertIsNone(None)
    #     # assertAlmostEqual example (useful for floating point)
    #     self.assertAlmostEqual(0.1 + 0.2, 0.3, places=10)
    #     # assertGreater example
    #     self.assertGreater(10, 5)


if __name__ == '__main__':
    unittest.main(verbosity=2)  # Run tests with detailed output`;

  const lab8MainPy = `#!/usr/bin/env python3
"""
LAB09 - Working with Data Formats in Python

This module demonstrates how to work with common data formats 
(JSON, YAML, XML) used in DevOps and infrastructure automation.
"""

# TODO: Import required libraries for working with different data formats
# import json
# import yaml
# try:
#     import xmltodict
# except ImportError:
#     print("Please install xmltodict: pip install xmltodict")
#     exit(1)


def process_json_data(json_file):
    """
    Process a JSON file and extract key information.
    
    Args:
        json_file (str): Path to the JSON file
        
    Returns:
        dict: Extracted information from the JSON file
    """
    # TODO: Implement JSON processing
    # 1. Open and read the JSON file
    # 2. Parse the JSON data into a Python dictionary
    # 3. Extract and return relevant information
    #    - Application name and version
    #    - Database connection details
    #    - List of services with their hosts and ports
    
    print(f"Processing JSON file: {json_file}")
    return {}


def process_yaml_data(yaml_file):
    """
    Process a YAML file containing infrastructure definition.
    
    Args:
        yaml_file (str): Path to the YAML file
        
    Returns:
        dict: Processed information from the YAML file
    """
    # TODO: Implement YAML processing
    # 1. Open and read the YAML file
    # 2. Parse the YAML data into a Python dictionary
    # 3. Extract and return relevant information
    #    - Infrastructure region and environment
    #    - VPC and subnet information
    #    - Server details (names, types, security groups)
    
    print(f"Processing YAML file: {yaml_file}")
    return {}


def process_xml_data(xml_file):
    """
    Process an XML file containing service definitions.
    
    Args:
        xml_file (str): Path to the XML file
        
    Returns:
        dict: Processed information from the XML file
    """
    # TODO: Implement XML processing
    # 1. Open and read the XML file
    # 2. Parse the XML data using xmltodict
    # 3. Extract and return relevant information
    #    - List of services with their IDs and names
    #    - Service endpoints
    #    - Service dependencies
    
    print(f"Processing XML file: {xml_file}")
    return {}


def convert_formats(data, source_format, target_format):
    """
    Convert data between different formats.
    
    Args:
        data (dict): Data to convert
        source_format (str): Source format ('json', 'yaml', or 'xml')
        target_format (str): Target format ('json', 'yaml', or 'xml')
        
    Returns:
        str: Data in the target format
    """
    # TODO: Implement format conversion
    # 1. Check that source and target formats are valid
    # 2. Convert the data to the target format
    # 3. Return the converted data as a string
    
    print(f"Converting from {source_format} to {target_format}")
    return ""


def validate_data(data, schema=None):
    """
    Validate data against a schema or basic rules.
    
    Args:
        data (dict): Data to validate
        schema (dict, optional): Schema to validate against
        
    Returns:
        bool: True if valid, False otherwise
    """
    # TODO: Implement data validation
    # 1. If a schema is provided, validate against it
    # 2. Otherwise, perform basic validation:
    #    - Check required fields are present
    #    - Verify data types
    #    - Ensure values are within expected ranges
    
    print("Validating data...")
    return True


def main():
    """Main function to demonstrate data format operations."""
    print("LAB09 - Working with Data Formats")
    print("=================================\\n")
    
    # File paths
    json_file = "sample_data/config.json"
    yaml_file = "sample_data/servers.yaml"
    xml_file = "sample_data/services.xml"
    
    # TODO: Process each data format
    # 1. Call the process_json_data function
    # 2. Call the process_yaml_data function
    # 3. Call the process_xml_data function
    
    # TODO: Demonstrate format conversion
    # 1. Convert JSON data to YAML
    # 2. Convert YAML data to JSON
    # 3. Convert XML data to JSON
    
    # TODO: Validate the data
    # 1. Perform basic validation on the processed data
    
    # TODO: (Bonus) Save converted data to files
    # 1. Write converted data to new files
    
    print("\\nData processing complete!")


if __name__ == "__main__":
    main()`;

  const lab8ConfigJson = `{
    "application": "DevOps Automation Tool",
    "version": "1.0.0",
    "environment": "development",
    "database": {
        "host": "db.example.com",
        "port": 5432,
        "name": "devops_db",
        "user": "db_user",
        "ssl": true
    },
    "services": [
        {
            "name": "web-service",
            "host": "web.example.com",
            "port": 8080,
            "health_check": "/health"
        },
        {
            "name": "api-service",
            "host": "api.example.com",
            "port": 8081,
            "health_check": "/api/health"
        }
    ],
    "logging": {
        "level": "INFO",
        "format": "%(asctime)s - %(name)s - %(levelname)s - %(message)s",
        "output": [
            "console",
            "file"
        ],
        "file_path": "/var/log/app.log"
    }
}`;

  const lab8ServersYaml = `---
# DevOps Infrastructure Configuration
infrastructure:
  region: eu-west-1
  environment: staging
  vpc:
    id: vpc-12345
    cidr: 10.0.0.0/16
    subnets:
      - name: public-subnet-1
        cidr: 10.0.1.0/24
        az: eu-west-1a
        public: true
      - name: public-subnet-2
        cidr: 10.0.2.0/24
        az: eu-west-1b
        public: true
      - name: private-subnet-1
        cidr: 10.0.3.0/24
        az: eu-west-1a
        public: false
      - name: private-subnet-2
        cidr: 10.0.4.0/24
        az: eu-west-1b
        public: false

servers:
  - name: web-server-1
    type: t3.medium
    ami: ami-0a1234567890
    subnet: public-subnet-1
    security_groups:
      - web-sg
    tags:
      Role: WebServer
      Environment: Staging
    user_data: |
      #!/bin/bash
      apt-get update
      apt-get install -y nginx
      systemctl enable nginx
      systemctl start nginx

  - name: app-server-1
    type: t3.large
    ami: ami-0b1234567890
    subnet: private-subnet-1
    security_groups:
      - app-sg
    tags:
      Role: AppServer
      Environment: Staging
    volumes:
      - device: /dev/sdf
        size: 100
        type: gp3

  - name: db-server-1
    type: t3.xlarge
    ami: ami-0c1234567890
    subnet: private-subnet-2
    security_groups:
      - db-sg
    tags:
      Role: DBServer
      Environment: Staging
    volumes:
      - device: /dev/sdf
        size: 500
        type: io2
        iops: 5000

security_groups:
  - name: web-sg
    description: Web Server Security Group
    rules:
      - protocol: tcp
        port: 80
        source: 0.0.0.0/0
      - protocol: tcp
        port: 443
        source: 0.0.0.0/0
      - protocol: tcp
        port: 22
        source: 10.0.0.0/16

  - name: app-sg
    description: Application Server Security Group
    rules:
      - protocol: tcp
        port: 8080
        source: 10.0.1.0/24
      - protocol: tcp
        port: 8080
        source: 10.0.2.0/24
      - protocol: tcp
        port: 22
        source: 10.0.0.0/16

  - name: db-sg
    description: Database Server Security Group
    rules:
      - protocol: tcp
        port: 5432
        source: 10.0.3.0/24
      - protocol: tcp
        port: 5432
        source: 10.0.4.0/24
      - protocol: tcp
        port: 22
        source: 10.0.0.0/16`;

  const lab9MainPy = `#!/usr/bin/env python3
"""
LAB10 - API Interaction and REST

This module demonstrates how to interact with RESTful APIs
using Python, which is essential for DevOps automation.
"""

# TODO: Import required libraries
# import requests
# import json
# import os
# from urllib.parse import urljoin


def load_config(config_file="config.json"):
    """
    Load API configuration from a JSON file.
    
    Args:
        config_file (str): Path to the configuration file
        
    Returns:
        dict: Configuration settings
    """
    # TODO: Implement configuration loading
    # 1. Open the config file and load JSON data
    # 2. Return the configuration dictionary
    # 3. Handle potential errors (file not found, invalid JSON)
    
    print(f"Loading configuration from {config_file}")
    return {}


def create_api_client(base_url, headers=None, timeout=30):
    """
    Create an API client with the given configuration.
    
    Args:
        base_url (str): Base URL for the API
        headers (dict, optional): Default headers to include in requests
        timeout (int, optional): Request timeout in seconds
        
    Returns:
        dict: API client object with methods for interacting with the API
    """
    # TODO: Create a client object with methods for different API operations
    # This can be a class or a dictionary of functions
    
    print(f"Creating API client for {base_url}")
    return {
        "base_url": base_url,
        "headers": headers or {},
        "timeout": timeout,
    }


def get_data(client, endpoint, params=None):
    """
    Perform a GET request to retrieve data from an API.
    
    Args:
        client (dict): API client object
        endpoint (str): API endpoint to call
        params (dict, optional): Query parameters
        
    Returns:
        dict: Response data
    """
    # TODO: Implement GET request function
    # 1. Construct the full URL from base_url and endpoint
    # 2. Make the GET request with appropriate parameters
    # 3. Handle the response (check status, parse JSON)
    # 4. Implement error handling
    
    print(f"GET request to {endpoint}")
    return {}


def post_data(client, endpoint, data, json_data=True):
    """
    Perform a POST request to send data to an API.
    
    Args:
        client (dict): API client object
        endpoint (str): API endpoint to call
        data (dict): Data to send
        json_data (bool): Whether to send as JSON
        
    Returns:
        dict: Response data
    """
    # TODO: Implement POST request function
    # 1. Construct the full URL from base_url and endpoint
    # 2. Make the POST request with the provided data
    # 3. Handle the response (check status, parse JSON)
    # 4. Implement error handling
    
    print(f"POST request to {endpoint}")
    return {}


def handle_api_error(response):
    """
    Handle API errors based on status codes.
    
    Args:
        response: Response object from requests
        
    Returns:
        None
        
    Raises:
        Exception: If the response indicates an error
    """
    # TODO: Implement error handling for different status codes
    # 1. Check if status code indicates an error (4xx or 5xx)
    # 2. Extract error details from the response
    # 3. Raise appropriate exceptions with informative messages
    
    print("Handling API response")
    pass


def main():
    """Main function to demonstrate API interaction."""
    print("LAB10 - API Interaction and REST")
    print("================================\\n")
    
    try:
        # TODO: Load configuration
        config = load_config()
        
        # TODO: Create API client
        client = create_api_client(
            base_url=config.get("api_base_url", "https://jsonplaceholder.typicode.com"),
            headers=config.get("headers", {}),
        )
        
        # TODO: Perform GET request to retrieve data
        # Example: Get users from the API
        print("\\n1. Getting users from API:")
        print("-------------------------")
        users = get_data(client, "/users")
        # Display some user information
        
        # TODO: Perform GET request with parameters
        # Example: Get posts for a specific user
        print("\\n2. Getting posts for a specific user:")
        print("-----------------------------------")
        user_id = 1  # Example user ID
        posts = get_data(client, "/posts", params={"userId": user_id})
        # Display some post information
        
        # TODO: Perform POST request to create data
        # Example: Create a new post
        print("\\n3. Creating a new post:")
        print("---------------------")
        new_post = {
            "title": "New Post",
            "body": "This is a new post created via the API",
            "userId": user_id
        }
        created_post = post_data(client, "/posts", new_post)
        # Display the created post information
        
        # TODO: (Bonus) Implement other HTTP methods (PUT, DELETE)
        
        print("\\nAPI interaction completed successfully!")
        
    except Exception as e:
        print(f"\\nError: {str(e)}")


if __name__ == "__main__":
    main()`;

  const lab9ConfigJson = `{
    "api_base_url": "https://jsonplaceholder.typicode.com",
    "timeout": 30,
    "headers": {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    "auth": {
        "type": "none",
        "api_key": "",
        "username": "",
        "password": ""
    },
    "endpoints": {
        "users": "/users",
        "posts": "/posts",
        "comments": "/comments",
        "todos": "/todos"
    },
    "retry": {
        "max_retries": 3,
        "backoff_factor": 0.5
    }
}`;

  const lab10MainPy = `#!/usr/bin/env python3
"""
LAB11 - CLI Tool Development

This module serves as the entry point for the CLI tool.
It demonstrates how to build professional command-line
applications using Python's argparse module.
"""

# TODO: Import required libraries
# import argparse
# import sys
# from cli_tool.cli import run_cli


def main():
    """Main function to set up and run the CLI tool."""
    # TODO: Implement main function
    # 1. Set up any environment variables or global configuration
    # 2. Call the CLI runner
    # 3. Handle any top-level exceptions
    # 4. Exit with the appropriate exit code
    
    print("LAB11 - CLI Tool Development")
    print("============================\\n")
    
    try:
        # Placeholder for the actual CLI runner call
        print("CLI tool skeleton is ready for implementation")
        print("Follow the TODOs in the code to complete the lab")
        
        # This will be replaced with: exit_code = run_cli()
        exit_code = 0
        return exit_code
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return 1


if __name__ == "__main__":
    # This is the entry point when the script is run directly
    # It calls main() and uses the return value as the exit code
    import sys
    sys.exit(main())`;

  // Get README content from actual lab files
  const lab1ReadmeMd = `# LAB01 - Python Basics: Variables and Data Types

Welcome to your first Python lab! In this beginner-friendly exercise, you'll explore how to define variables and work with basic data types in Python. This is the foundation for all Python programming and DevOps automation you'll build in the future.

---

## 🎯 Objectives

By the end of this lab, you will:
- Understand what variables are and how to use them in Python
- Learn the most common Python data types: \`int\`, \`float\`, \`str\`, \`bool\`, \`list\`, and \`dict\`
- Write and run your first Python script
- Practice using the \`print()\` function for displaying information
- Explore basic operations with different data types
- Learn how to access elements in lists and dictionaries

---

## 📚 Python Basics Concepts

- **Variables**: Named storage locations in memory
- **Data Types**: Strings, Integers, Floats, Booleans, Lists, Dictionaries
- **Common Operations**: Arithmetic, String methods, List operations

---

## ✍️ Your Task

Complete all the TODOs to learn about Python variables and data types:

1. Create variables of different types
2. Print the variables using the \`print()\` function
3. Perform basic operations
4. Explore string and list methods

Run your script with:
\`\`\`bash
python main.py
\`\`\``;

  // Create structured lab content mapping
  const labContentMapping: { [key: number]: LabFile[] } = {
    1: [
      { name: 'main.py', content: lab1MainPy, type: 'python' },
      { name: 'README.md', content: lab1ReadmeMd, type: 'markdown' },
      { name: 'solutions.py', content: `# מעבדה 1 - פתרונות מלאים\n\n# פתרון מלא זמין בקובץ solutions.md`, type: 'python' }
    ],
    2: [
      { name: 'main.py', content: lab2MainPy, type: 'python' },
      { name: 'README.md', content: `# מעבדה 2 - לולאות ולוגיקה מותנית\n\nלמד לשלוט בזרימת התוכנית עם הוראות if, לולאות for ולולאות while`, type: 'markdown' },
      { name: 'solutions.py', content: `# מעבדה 2 - פתרונות מלאים\n\n# הפתרונות הם בקובץ solutions.md הנפרד`, type: 'python' }
    ],
    3: [
      { name: 'main.py', content: lab3MainPy, type: 'python' },
      { name: 'helper.py', content: lab3HelperPy, type: 'python' },
      { name: 'README.md', content: `# מעבדה 3 - פונקציות ומודולים\n\nצור קוד לשימוש חוזר עם פונקציות וארגן קוד למודולים`, type: 'markdown' },
      { name: 'solutions.py', content: `# מעבדה 3 - פתרונות מלאים\n\n# ראה את הפתרונות המלאים בקובץ solutions.md`, type: 'python' }
    ],
    4: [
      { name: 'main.py', content: lab4MainPy, type: 'python' },
      { name: 'input.txt', content: lab4InputTxt, type: 'text' },
      { name: 'README.md', content: `# מעבדה 4 - טיפול בקבצים\n\nקרא וכתוב קבצים, חיוני לעיבוד נתונים ואוטומציה`, type: 'markdown' },
      { name: 'solutions.py', content: `# מעבדה 4 - פתרונות מלאים\n\n# הפתרונות נמצאים בקובץ solutions.md`, type: 'python' }
    ],
    5: [
      { name: 'main.py', content: lab5MainPy, type: 'python' },
      { name: 'README.md', content: `# מעבדה 5 - טיפול בשגיאות ולוגים\n\nבנה יישומים יציבים עם טיפול בשגיאות ולוגים תקינים`, type: 'markdown' },
      { name: 'solutions.py', content: `# מעבדה 5 - פתרונות מלאים\n\n# הפתרונות המלאים זמינים בקובץ solutions.md`, type: 'python' }
    ],
    6: [
      { name: 'main.py', content: lab6MainPy, type: 'python' },
      { name: '__init__.py', content: `"""MyProject Package"""\n\n__version__ = '0.1.0'`, type: 'python' },
      { name: 'core.py', content: `# TODO: פונקציות עזר למחלקות`, type: 'python' },
      { name: 'README.md', content: `# מעבדה 6 - תכנות מונחה עצמים\n\nלמד מושגי OOP עם מחלקות, הורשה ופולימורפיזם`, type: 'markdown' },
      { name: 'solutions.py', content: `# מעבדה 6 - פתרונות מלאים\n\n# הפתרונות המלאים בקובץ solutions.md`, type: 'python' }
    ],
    7: [
      { name: 'main.py', content: lab7MainPy, type: 'python' },
      { name: 'test_main.py', content: lab7TestMainPy, type: 'python' },
      { name: 'README.md', content: `# מעבדה 7 - בדיקות יחידה\n\nכתוב קוד אמין עם אסטרטגיות בדיקות יחידה מקיפות`, type: 'markdown' },
      { name: 'solutions.py', content: `# מעבדה 7 - פתרונות מלאים\n\n# ראה פתרונות מלאים בקובץ solutions.md`, type: 'python' }
    ],
    8: [
      { name: 'main.py', content: lab8MainPy, type: 'python' },
      { name: 'config.json', content: lab8ConfigJson, type: 'json' },
      { name: 'servers.yaml', content: lab8ServersYaml, type: 'yaml' },
      { name: 'README.md', content: `# מעבדה 8 - עבודה עם פורמטי נתונים\n\nעבד עם פורמטי נתונים JSON, YAML ו-XML הנפוצים ב-DevOps`, type: 'markdown' },
      { name: 'requirements.txt', content: `pyyaml>=6.0\nxmltodict>=0.13.0\njsonschema>=4.17.0`, type: 'text' },
      { name: 'solutions.py', content: `# מעבדה 8 - פתרונות מלאים\n\n# הפתרונות המלאים זמינים בקובץ solutions.md`, type: 'python' }
    ],
    9: [
      { name: 'main.py', content: lab9MainPy, type: 'python' },
      { name: 'config.json', content: lab9ConfigJson, type: 'json' },
      { name: 'README.md', content: `# מעבדה 9 - אינטראקציה עם API ו-REST\n\nאינטראקציה עם RESTful APIs לאוטומציה מודרנית של DevOps`, type: 'markdown' },
      { name: 'requirements.txt', content: `requests>=2.28.0`, type: 'text' },
      { name: 'solutions.py', content: `# מעבדה 9 - פתרונות מלאים\n\n# ראה את הפתרונות המלאים בקובץ solutions.md`, type: 'python' }
    ],
    10: [
      { name: 'main.py', content: lab10MainPy, type: 'python' },
      { name: 'README.md', content: `# מעבדה 10 - פיתוח CLI\n\nבנה כלי שורת פקודה מקצועיים לאוטומציה של DevOps`, type: 'markdown' },
      { name: 'requirements.txt', content: `colorama>=0.4.4\npsutil>=5.9.0`, type: 'text' },
      { name: 'solutions.py', content: `# מעבדה 10 - פתרונות מלאים\n\n# הפתרונות המלאים נמצאים בקובץ solutions.md`, type: 'python' }
    ]
  };

  return labContentMapping[labId] || [];
};

// Extract TODO items from actual Python files
const getTodoItems = (labId: number): TodoItem[] => {
  const labFiles = getLabContent(labId);
  const mainFile = labFiles.find(file => file.name === 'main.py');
  
  if (!mainFile) return [];

  const todos: TodoItem[] = [];
  const lines = mainFile.content.split('\n');
  let todoId = 1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('# TODO:')) {
      // Extract TODO text
      let todoText = line.replace(/^.*# TODO:\s*/, '').trim();
      
      // Look for additional context in following comment lines
      let j = i + 1;
      while (j < lines.length && lines[j].startsWith('#') && !lines[j].includes('# TODO:')) {
        todoText += ' ' + lines[j].replace(/^#\s*/, '').trim();
        j++;
      }

      // Create a TODO item with appropriate points and hints
      const points = todoId <= 2 ? 15 : todoId <= 4 ? 20 : 25;
      
      todos.push({
        id: todoId,
        text: todoText,
        completed: false,
        points: points,
        hint: getHintForTodo(labId, todoId),
        detailedHint: getDetailedHintForTodo(labId, todoId)
      });
      
      todoId++;
    }
  }

  return todos;
};

const getHintForTodo = (labId: number, todoId: number): string => {
  const hints: { [key: string]: string[] } = {
    '1': [
      'השתמש ב-name = \"השם שלך\"',
      'age = מספר (בלי מירכאות)',
      'השתמש בנקודה לעשרוני: height = 1.75',
      'השתמש ב-True או False (עם אות גדולה)',
      'skills = [\"כישור1\", \"כישור2\", \"כישור3\"]',
      'print(\"תווית:\", משתנה)'
    ],
    '2': [
      'if age >= 18: ... elif age >= 13: ... else: ...',
      'for skill in skills:',
      'counter = 0\nwhile counter < 3:',
      'if user == \"admin\":',
      'for row in grid:\n    for item in row:'
    ],
    '3': [
      'from helper import function_name',
      'result = greet(\"שם\")',
      'result = add(5, 3)',
      'result = max_of_three(1, 2, 3)',
      'צור פונקציה חדשה ב-helper.py ואז ייבא אותה'
    ]
  };
  
  const labHints = hints[labId.toString()] || [];
  return labHints[todoId - 1] || 'פעל לפי ההוראות בקובץ';
};

const getDetailedHintForTodo = (labId: number, todoId: number): string => {
  const detailedHints: { [key: string]: string[] } = {
    '1': [
      'דוגמה: name = \"אליס\"\nמחרוזת היא טקסט שמוקף במירכאות כפולות או יחידות.',
      'דוגמה: age = 25\nמספר שלם הוא מספר ללא נקודה עשרונית.',
      'דוגמה: height = 1.75\nמספר עשרוני (float) מכיל נקודה עשרונית.',
      'דוגמה: is_hungry = True\nבוליאני יכול להיות רק True או False.',
      'דוגמה: skills = [\"Python\", \"JavaScript\", \"SQL\"]\nרשימה מוקפת בסוגריים מרובעים.',
      'דוגמה: print(\"שם:\", name)\nהשתמש ב-print() עם פסיק בין התווית למשתנה.'
    ],
    '2': [
      'בדוק אם הגיל 18+, 13-17, או פחות מ-13 והדפס הודעה מתאימה.',
      'for skill in skills:\n    print(\"לומד:\", skill)',
      'אל תשכח להוסיף counter += 1 בסוף הלולאה!',
      'עבור על רשימת משתמשים ובדוק אם המשתמש הוא admin.',
      'השתמש ב-enumerate() כדי לקבל גם את האינדקס.'
    ],
    '3': [
      'מייבא פונקציות מקובץ helper.py:\nfrom helper import greet, add',
      'קרא לפונקציה:\nresult = greet(\"אליס\")\nprint(result)',
      'קרא לפונקציה עם שני מספרים:\nresult = add(10, 5)\nprint(\"סכום:\", result)',
      'קרא לפונקציה עם שלושה מספרים:\nresult = max_of_three(1, 5, 3)\nprint(\"הגדול ביותר:\", result)',
      'צור פונקציה חדשה ב-helper.py, ייבא אותה ב-main.py, וקרא לה.'
    ]
  };
  
  const labHints = detailedHints[labId.toString()] || [];
  return labHints[todoId - 1] || 'עקוב אחר ההוראות המפורטות בתוך הקוד';
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'מתחיל':
      return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    case 'בינוני':
      return 'bg-amber-100 text-amber-800 border-amber-300';
    case 'מתקדם':
      return 'bg-rose-100 text-rose-800 border-rose-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

const ProgressBar: React.FC<{ current: number; total: number; className?: string }> = ({ current, total, className = "" }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;
  
  return (
    <div className={`w-full bg-gray-200 rounded-full h-3 ${className}`}>
      <div 
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

const TodoCard: React.FC<{ 
  todo: TodoItem; 
  onToggle: () => void; 
  onShowHint: () => void;
  showDetailedHint: boolean;
}> = ({ todo, onToggle, onShowHint, showDetailedHint }) => {
  return (
    <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
      todo.completed 
        ? 'bg-emerald-50 border-emerald-300 shadow-md' 
        : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start space-x-3 flex-1">
          <button
            onClick={onToggle}
            className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
              todo.completed
                ? 'bg-emerald-500 border-emerald-500 text-white'
                : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
            }`}
          >
            {todo.completed && <CheckCircle className="w-5 h-5" />}
          </button>
          <div className="flex-1">
            <p className={`text-sm leading-relaxed ${
              todo.completed ? 'text-emerald-700 line-through' : 'text-gray-800'
            }`}>
              {todo.text}
            </p>
            {showDetailedHint && (
              <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-800">רמז מפורט:</span>
                </div>
                <pre className="text-xs text-yellow-700 whitespace-pre-wrap font-mono">
                  {todo.detailedHint}
                </pre>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onShowHint}
            className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
            title="הצג רמז"
          >
            <Lightbulb className="w-4 h-4" />
          </button>
          <div className={`px-2 py-1 rounded-lg text-xs font-bold ${
            todo.completed ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
          }`}>
            {todo.points} נק'
          </div>
        </div>
      </div>
      
      {!showDetailedHint && (
        <div className="text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
          💡 רמז: {todo.hint}
        </div>
      )}
    </div>
  );
};

const LabCard: React.FC<{ 
  lab: Lab; 
  onSelect: (lab: Lab) => void;
  progress: any;
}> = ({ lab, onSelect, progress }) => {
  const labProgress = progress[lab.id] || { completedTodos: [], totalPoints: 0, started: false, completed: false };
  const totalTodos = getTodoItems(lab.id).length;
  const completedTodos = labProgress.completedTodos.length;
  const progressPercentage = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;
  
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 overflow-hidden cursor-pointer transform hover:scale-[1.02] group"
         onClick={() => onSelect(lab)}>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white shadow-lg">
              {lab.icon}
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm font-bold text-blue-600">מעבדה {lab.id}</span>
                {labProgress.completed && (
                  <div className="p-1 bg-emerald-100 rounded-full">
                    <Trophy className="w-4 h-4 text-emerald-600" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {lab.title}
              </h3>
            </div>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-bold border-2 shadow-sm ${getDifficultyColor(lab.difficulty)}`}>
            {lab.difficulty}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed text-lg">{lab.description}</p>
        
        {/* Progress */}
        {labProgress.started && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">התקדמות</span>
              <span className="text-sm font-bold text-blue-600">
                {completedTodos}/{totalTodos} משימות
              </span>
            </div>
            <ProgressBar current={completedTodos} total={totalTodos} />
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-500">{Math.round(progressPercentage)}% הושלם</span>
              <span className="text-xs font-medium text-purple-600">
                {labProgress.totalPoints}/{lab.maxPoints} נקודות
              </span>
            </div>
          </div>
        )}
        
        {/* Info */}
        <div className="flex items-center justify-between mb-6 bg-gray-50 rounded-xl p-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="font-medium">{lab.estimatedTime}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Target className="w-4 h-4 text-purple-500" />
              <span className="font-medium">{lab.maxPoints} נק'</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-blue-600 font-bold text-lg group-hover:text-purple-600 transition-colors">
            <span>{labProgress.completed ? 'סיימת!' : labProgress.started ? 'המשך' : 'התחל'}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
        
        {/* Topics */}
        <div className="flex flex-wrap gap-2">
          {lab.topics.map((topic, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-lg text-sm font-medium border border-blue-200"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const LabViewer: React.FC<{ lab: Lab; onBack: () => void }> = ({ lab, onBack }) => {
  const [selectedFile, setSelectedFile] = useState<string>('main.py');
  const [showSolutions, setShowSolutions] = useState<boolean>(false);
  const [progress, setProgress] = useState<ProgressData>(() => {
    const saved = localStorage.getItem('labProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [activeHints, setActiveHints] = useState<{ [key: number]: boolean }>({});
  
  const labFiles = getLabContent(lab.id);
  const currentFile = labFiles.find(file => file.name === selectedFile);
  const todoItems = getTodoItems(lab.id);
  const labProgress = progress[lab.id] || { completedTodos: [], totalPoints: 0, started: false, completed: false };

  useEffect(() => {
    localStorage.setItem('labProgress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    // Mark lab as started when viewed
    if (!labProgress.started) {
      setProgress(prev => ({
        ...prev,
        [lab.id]: { ...labProgress, started: true }
      }));
    }
  }, [lab.id]);

  const toggleTodo = (todoId: number) => {
    const todo = todoItems.find(t => t.id === todoId);
    if (!todo) return;

    const isCompleted = labProgress.completedTodos.includes(todoId);
    const newCompletedTodos = isCompleted 
      ? labProgress.completedTodos.filter(id => id !== todoId)
      : [...labProgress.completedTodos, todoId];
    
    const newTotalPoints = newCompletedTodos.reduce((sum, id) => {
      const todoItem = todoItems.find(t => t.id === id);
      return sum + (todoItem?.points || 0);
    }, 0);

    const allCompleted = newCompletedTodos.length === todoItems.length;

    setProgress(prev => ({
      ...prev,
      [lab.id]: {
        ...labProgress,
        completedTodos: newCompletedTodos,
        totalPoints: newTotalPoints,
        completed: allCompleted
      }
    }));

    // Show celebration message
    if (!isCompleted && allCompleted) {
      setTimeout(() => {
        alert('🎉 מזל טוב! סיימת את המעבדה! זכית ב-' + lab.maxPoints + ' נקודות!');
      }, 500);
    }
  };

  const toggleHint = (todoId: number) => {
    setActiveHints(prev => ({
      ...prev,
      [todoId]: !prev[todoId]
    }));
  };

  const completedTodos = labProgress.completedTodos.length;
  const totalTodos = todoItems.length;
  const progressPercentage = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>חזור לרשימת המעבדות</span>
            </button>
            <div className="flex items-center space-x-4">
              <span className={`px-4 py-2 rounded-full text-sm font-bold border-2 ${getDifficultyColor(lab.difficulty)}`}>
                {lab.difficulty}
              </span>
              {labProgress.completed && (
                <div className="flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-xl border border-emerald-300">
                  <Trophy className="w-5 h-5" />
                  <span className="font-bold">הושלם!</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-6 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white shadow-lg">
              {lab.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">מעבדה {lab.id}: {lab.title}</h1>
              <p className="text-gray-600 text-lg">{lab.description}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-gray-700">התקדמות במעבדה</span>
              <span className="text-lg font-bold text-blue-600">
                {completedTodos}/{totalTodos} משימות
              </span>
            </div>
            <ProgressBar current={completedTodos} total={totalTodos} className="h-4" />
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-gray-600">{Math.round(progressPercentage)}% הושלם</span>
              <span className="text-sm font-bold text-purple-600">
                {labProgress.totalPoints}/{lab.maxPoints} נקודות
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* TODO List Sidebar */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-6 h-6 text-blue-600 mr-3" />
                רשימת משימות
              </h3>
              {todoItems.length > 0 ? (
                <div className="space-y-4">
                  {todoItems.map((todo) => (
                    <TodoCard
                      key={todo.id}
                      todo={{
                        ...todo,
                        completed: labProgress.completedTodos.includes(todo.id)
                      }}
                      onToggle={() => toggleTodo(todo.id)}
                      onShowHint={() => toggleHint(todo.id)}
                      showDetailedHint={activeHints[todo.id] || false}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">בחר קובץ Python כדי לראות משימות</p>
              )}
            </div>

            {/* Lab Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 text-purple-600 mr-2" />
                פרטי המעבדה
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700 font-medium">זמן משוער:</span>
                  <span className="font-bold text-blue-600">{lab.estimatedTime}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-700 font-medium">נקודות מקסימום:</span>
                  <span className="font-bold text-purple-600">{lab.maxPoints}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                  <span className="text-gray-700 font-medium">רמת קושי:</span>
                  <span className="font-bold text-emerald-600">{lab.difficulty}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <span className="text-gray-700 font-medium block mb-3">נושאים:</span>
                <div className="flex flex-wrap gap-2">
                  {lab.topics.map((topic, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-lg text-sm font-medium border border-blue-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* File Content */}
          <div className="xl:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* File Tabs */}
              <div className="border-b border-gray-200 bg-gray-50">
                <div className="flex">
                  {labFiles.map((file) => (
                    <button
                      key={file.name}
                      onClick={() => setSelectedFile(file.name)}
                      className={`px-8 py-4 text-sm font-bold border-b-3 transition-all ${
                        selectedFile === file.name
                          ? 'border-blue-500 text-blue-600 bg-white shadow-sm'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5" />
                        <span>{file.name}</span>
                        {file.name === 'solutions.py' && (
                          <Star className="w-4 h-4 text-yellow-500" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Solutions Toggle */}
              {selectedFile === 'solutions.py' && (
                <div className="p-6 bg-yellow-50 border-b border-yellow-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Gift className="w-6 h-6 text-yellow-600" />
                      <div>
                        <h4 className="text-lg font-bold text-yellow-800">קובץ הפתרונות</h4>
                        <p className="text-sm text-yellow-700">
                          השתמש בו רק אחרי שניסית לפתור בעצמך! 
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowSolutions(!showSolutions)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-bold transition-all ${
                        showSolutions 
                          ? 'bg-yellow-600 text-white hover:bg-yellow-700' 
                          : 'bg-white text-yellow-600 hover:bg-yellow-100 border-2 border-yellow-300'
                      }`}
                    >
                      {showSolutions ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      <span>{showSolutions ? 'הסתר פתרונות' : 'הצג פתרונות'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* File Content */}
              <div className="p-8">
                {currentFile && (showSolutions || selectedFile !== 'solutions.py') && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">{currentFile.name}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-lg font-medium">
                        {currentFile.type === 'python' ? 'Python' : 
                         currentFile.type === 'markdown' ? 'Markdown' : 
                         currentFile.type === 'json' ? 'JSON' :
                         currentFile.type === 'yaml' ? 'YAML' : 'Text'}
                      </span>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto shadow-inner">
                      <pre className="text-green-400 text-sm leading-relaxed whitespace-pre-wrap font-mono">
                        {currentFile.content}
                      </pre>
                    </div>
                  </div>
                )}
                
                {selectedFile === 'solutions.py' && !showSolutions && (
                  <div className="text-center py-16">
                    <div className="max-w-md mx-auto">
                      <div className="p-6 bg-yellow-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        <HelpCircle className="w-12 h-12 text-yellow-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        נסה לפתור קודם בעצמך!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        הפתרונות מוסתרים כדי לעזור לך ללמוד. 
                        נסה לפתור את המשימות לפני שתציץ בפתרונות.
                      </p>
                      <button
                        onClick={() => setShowSolutions(true)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center space-x-2 mx-auto"
                      >
                        <Eye className="w-5 h-5" />
                        <span>בכל זאת הצג פתרונות</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);
  const [progress, setProgress] = useState<ProgressData>(() => {
    const saved = localStorage.getItem('labProgress');
    return saved ? JSON.parse(saved) : {};
  });

  const totalPoints = Object.values(progress).reduce((sum, lab) => sum + lab.totalPoints, 0);
  const completedLabs = Object.values(progress).filter(lab => lab.completed).length;

  if (selectedLab) {
    return <LabViewer lab={selectedLab} onBack={() => setSelectedLab(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl text-white ml-4 shadow-lg">
              <Code className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">
              מערכת 10 מעבדות פייתון
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            למד פייתון עם 10 מעבדות מעשיות המיועדות להנדסת DevOps ואוטומציה. 
            כל מעבדה בנויה על הקודמת ומספקת ניסיון מעשי עם כלים וטכניקות מתקדמות.
          </p>
          
          {/* User Progress */}
          {(totalPoints > 0 || completedLabs > 0) && (
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{totalPoints}</div>
                  <div className="text-gray-600 font-medium">נקודות צברת</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">{completedLabs}</div>
                  <div className="text-gray-600 font-medium">מעבדות הושלמו</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">{Math.round((completedLabs / 10) * 100)}%</div>
                  <div className="text-gray-600 font-medium">התקדמות כללית</div>
                </div>
              </div>
            </div>
          )}
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-lg inline-block shadow-lg">
            👆 לחץ על מעבדה כדי להתחיל ולראות את המשימות
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100">
            <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
            <div className="text-gray-600 font-medium">מעבדות מעשיות</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100">
            <div className="p-3 bg-emerald-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">4-6</div>
            <div className="text-gray-600 font-medium">שעות למידה</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100">
            <div className="p-3 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">40+</div>
            <div className="text-gray-600 font-medium">נושאי פייתון</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100">
            <div className="p-3 bg-yellow-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="text-3xl font-bold text-yellow-600 mb-2">1540</div>
            <div className="text-gray-600 font-medium">נקודות כולל</div>
          </div>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {labs.map((lab) => (
            <LabCard key={lab.id} lab={lab} onSelect={setSelectedLab} progress={progress} />
          ))}
        </div>

        {/* Footer */}
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">✨ מוכן להתחיל המסע?</h2>
            <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">
              התחל עם המעבדה הראשונה ובנה את הידע שלך צעד אחר צעד. 
              כל מעבדה כוללת הסברים מפורטים, רמזים מתקדמים, ומערכת נקודות מוטיבציונלית.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
              <Lightbulb className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-blue-800">רמזים הדרגתיים</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-xl">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              <span className="font-medium text-emerald-800">מעקב התקדמות</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl">
              <Trophy className="w-6 h-6 text-purple-600" />
              <span className="font-medium text-purple-800">מערכת נקודות</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-xl">
              <Star className="w-6 h-6 text-yellow-600" />
              <span className="font-medium text-yellow-800">פתרונות מלאים</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;