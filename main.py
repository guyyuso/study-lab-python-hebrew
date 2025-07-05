#!/usr/bin/env python3
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


print("\nOnce you're done, run this file with: python main.py")
print("Check your output against the validation checklist in the README.md") 