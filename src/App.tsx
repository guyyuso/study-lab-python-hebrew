import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Code, BookOpen, CheckCircle, Home, Play } from 'lucide-react';

interface Lab {
  id: number;
  title: string;
  description: string;
  tutorial: string;
  exercises: string[];
  solutions: string[];
}

const labs: Lab[] = [
  {
    id: 1,
    title: "הדפסה ומשתנים",
    description: "למידת יסודות פייתון - הדפסה, משתנים וטיפוסי נתונים בסיסיים",
    tutorial: `
# מעבדה 1: הדפסה ומשתנים

## מה נלמד היום?
בשיעור הראשון שלנו נלמד את הבסיסים של פייתון:
- איך להדפיס טקסט על המסך
- איך ליצור משתנים ולשמור בהם מידע
- טיפוסי נתונים בסיסיים (מספרים, מחרוזות)

## הדפסה (Print)
הפקודה הראשונה שנלמד היא print() - היא מדפיסה טקסט על המסך.

\`\`\`python
print("שלום עולם!")
print("אני לומד פייתון")
\`\`\`

## משתנים (Variables)
משתנה זה כמו קופסה שבה אנחנו שומרים מידע. 
לכל משתנה יש שם, ובקופסה אנחנו יכולים לשים מספרים, מילים ועוד.

\`\`\`python
# משתנה עם מספר
age = 25
print(age)

# משתנה עם טקסט
name = "יוסי"
print(name)

# משתנה עם מספר עשרוני
height = 1.75
print(height)
\`\`\`

## טיפוסי נתונים בסיסיים
1. **מספרים שלמים (int)**: 5, 10, -3
2. **מספרים עשרוניים (float)**: 3.14, 2.5, -1.8
3. **מחרוזות (str)**: "שלום", "פייתון", "123"
4. **בוליאני (bool)**: True, False

## שילוב משתנים עם הדפסה
\`\`\`python
name = "שרה"
age = 30
print("שמי הוא", name, "ואני בן", age)
\`\`\`

## טיפים חשובים
- שמות משתנים באנגלית (name, age, height)
- לא מתחילים במספר
- נהוג להשתמש באותיות קטנות ו _ לחיבור מילים
`,
    exercises: [
      "צור משתנה בשם 'my_name' עם השם שלך והדפס אותו",
      "צור שני משתנים: 'first_num' עם הערך 10 ו-'second_num' עם הערך 20. הדפס את הסכום שלהם",
      "צור משתנה 'favorite_color' עם הצבע האהוב עליך, והדפס משפט: 'הצבע האהוב עליי הוא: [הצבע]'",
      "צור משתנה 'birth_year' עם שנת הלידה שלך, וחשב את הגיל שלך (2024 - birth_year)",
      "צור שלושה משתנים: שם, גיל ועיר מגורים, והדפס אותם במשפט אחד"
    ],
    solutions: [
      "my_name = 'יוסי'\nprint(my_name)",
      "first_num = 10\nsecond_num = 20\nprint(first_num + second_num)",
      "favorite_color = 'כחול'\nprint('הצבע האהוב עליי הוא:', favorite_color)",
      "birth_year = 1990\nage = 2024 - birth_year\nprint('הגיל שלי הוא:', age)",
      "name = 'שרה'\nage = 25\ncity = 'תל אביב'\nprint('שמי', name, 'אני בת', age, 'ואני גרה ב', city)"
    ]
  },
  {
    id: 2,
    title: "לולאות ותנאים",
    description: "לימוד לולאות (for, while) ותנאים (if, else) עם משחקי משתנים",
    tutorial: `
# מעבדה 2: לולאות ותנאים

## מה נלמד היום?
- תנאים (if, else, elif)
- לולאת for
- לולאת while
- שילוב לולאות עם תנאים

## תנאים (Conditionals)
תנאים מאפשרים לנו לבצע פעולות שונות בהתאם למצבים שונים.

\`\`\`python
age = 18
if age >= 18:
    print("אתה בגיר")
else:
    print("אתה קטין")
\`\`\`

### תנאים מורכבים
\`\`\`python
grade = 85
if grade >= 90:
    print("מעולה!")
elif grade >= 80:
    print("טוב מאוד")
elif grade >= 70:
    print("טוב")
else:
    print("צריך להשתפר")
\`\`\`

## לולאת For
לולאת for מאפשרת לנו לחזור על פעולות מספר פעמים.

\`\`\`python
# הדפסת מספרים מ-1 עד 5
for i in range(1, 6):
    print(i)

# הדפסת שמות
names = ["יוסי", "שרה", "דני"]
for name in names:
    print("שלום", name)
\`\`\`

## לולאת While
לולאת while רצה כל עוד תנאי מסוים נכון.

\`\`\`python
count = 1
while count <= 5:
    print("מספר:", count)
    count += 1
\`\`\`

## שילוב לולאות ותנאים
\`\`\`python
# הדפסת מספרים זוגיים מ-1 עד 10
for i in range(1, 11):
    if i % 2 == 0:
        print(i, "זוגי")
    else:
        print(i, "אי-זוגי")
\`\`\`

## משחק עם משתנים
\`\`\`python
# משחק ניחושים פשוט
secret_number = 7
guess = int(input("נחש מספר בין 1 ל-10: "))
if guess == secret_number:
    print("כל הכבוד! ניחשת נכון!")
else:
    print("לא נכון. המספר היה", secret_number)
\`\`\`
`,
    exercises: [
      "כתב תוכנית שבודקת אם מספר זוגי או אי-זוגי",
      "צור לולאה שמדפיסה את הספרות 1-10 ובצד כל מספר כתוב 'זוגי' או 'אי-זוגי'",
      "כתב תוכנית שמחשבת את סכום המספרים מ-1 עד 100",
      "צור לולאה שמדפיסה את לוח הכפל של 5 (5x1=5, 5x2=10, וכו')",
      "כתב תוכנית שמקבלת ציון ומדפיסה את הערכה המילולית (מעולה, טוב מאוד, וכו')"
    ],
    solutions: [
      "number = 8\nif number % 2 == 0:\n    print('זוגי')\nelse:\n    print('אי-זוגי')",
      "for i in range(1, 11):\n    if i % 2 == 0:\n        print(i, 'זוגי')\n    else:\n        print(i, 'אי-זוגי')",
      "sum_numbers = 0\nfor i in range(1, 101):\n    sum_numbers += i\nprint('הסכום הוא:', sum_numbers)",
      "for i in range(1, 11):\n    result = 5 * i\n    print(f'5 x {i} = {result}')",
      "grade = 85\nif grade >= 90:\n    print('מעולה')\nelif grade >= 80:\n    print('טוב מאוד')\nelif grade >= 70:\n    print('טוב')\nelse:\n    print('צריך להשתפר')"
    ]
  },
  {
    id: 3,
    title: "רשימות ופונקציות",
    description: "עבודה עם רשימות, מניפולציות נתונים ויצירת פונקציות ראשונות",
    tutorial: `
# מעבדה 3: רשימות ופונקציות

## מה נלמד היום?
- יצירת רשימות ועבודה איתן
- פונקציות מובנות לרשימות
- יצירת פונקציות משלנו
- החזרת ערכים מפונקציות

## רשימות (Lists)
רשימה היא אוסף מספרים, מחרוזות או אלמנטים אחרים.

\`\`\`python
# יצירת רשימות
numbers = [1, 2, 3, 4, 5]
names = ["יוסי", "שרה", "דני", "מיכל"]
mixed = [1, "שלום", 3.14, True]

# גישה לאלמנטים
print(names[0])  # הדפסת האלמנט הראשון
print(numbers[-1])  # הדפסת האלמנט האחרון
\`\`\`

## פעולות על רשימות
\`\`\`python
fruits = ["תפוח", "בננה", "תפוז"]

# הוספת אלמנט
fruits.append("אבטיח")
print(fruits)

# הסרת אלמנט
fruits.remove("בננה")
print(fruits)

# אורך הרשימה
print(len(fruits))

# מיון הרשימה
numbers = [3, 1, 4, 1, 5, 9]
numbers.sort()
print(numbers)
\`\`\`

## לולאות על רשימות
\`\`\`python
colors = ["אדום", "כחול", "ירוק"]
for color in colors:
    print("הצבע הוא:", color)

# עם אינדקס
for i, color in enumerate(colors):
    print(f"מיקום {i}: {color}")
\`\`\`

## פונקציות (Functions)
פונקציה היא קטע קוד שאנחנו יכולים להשתמש בו שוב ושוב.

\`\`\`python
def greet():
    print("שלום!")

# קריאה לפונקציה
greet()
\`\`\`

## פונקציות עם פרמטרים
\`\`\`python
def greet_person(name):
    print(f"שלום {name}!")

def add_numbers(a, b):
    return a + b

# שימוש בפונקציות
greet_person("יוסי")
result = add_numbers(5, 3)
print(result)
\`\`\`

## פונקציות עם רשימות
\`\`\`python
def sum_list(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

def find_max(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

# שימוש
my_numbers = [1, 5, 3, 9, 2]
print("סכום:", sum_list(my_numbers))
print("מקסימום:", find_max(my_numbers))
\`\`\`
`,
    exercises: [
      "צור רשימה של 5 מספרים וחשב את הממוצע שלהם",
      "כתב פונקציה שמקבלת רשימת מספרים ומחזירה רק את המספרים הזוגיים",
      "צור רשימה של שמות וכתב פונקציה שמדפיסה כל שם עם 'שלום' לפניו",
      "כתב פונקציה שמקבלת רשימת מספרים ומחזירה את המספר הגדול והקטן ביותר",
      "צור רשימה של ציונים וכתב פונקציה שמחשבת כמה ציונים מעל 80"
    ],
    solutions: [
      "numbers = [10, 20, 30, 40, 50]\naverage = sum(numbers) / len(numbers)\nprint('הממוצע:', average)",
      "def get_even_numbers(numbers):\n    even_nums = []\n    for num in numbers:\n        if num % 2 == 0:\n            even_nums.append(num)\n    return even_nums\n\ntest_nums = [1, 2, 3, 4, 5, 6]\nprint(get_even_numbers(test_nums))",
      "def greet_all(names):\n    for name in names:\n        print('שלום', name)\n\nnames_list = ['יוסי', 'שרה', 'דני']\ngreet_all(names_list)",
      "def find_min_max(numbers):\n    return min(numbers), max(numbers)\n\ntest_numbers = [5, 2, 8, 1, 9]\nmin_num, max_num = find_min_max(test_numbers)\nprint(f'מינימום: {min_num}, מקסימום: {max_num}')",
      "def count_high_grades(grades):\n    count = 0\n    for grade in grades:\n        if grade > 80:\n            count += 1\n    return count\n\ngrades = [85, 70, 90, 75, 95]\nprint('ציונים מעל 80:', count_high_grades(grades))"
    ]
  },
  {
    id: 4,
    title: "מחרוזות ועיבוד טקסט",
    description: "מניפולציות על טקסט, חיפוש והחלפה, עיבוד קלט משתמש",
    tutorial: `
# מעבדה 4: מחרוזות ועיבוד טקסט

## מה נלמד היום?
- פעולות מתקדמות על מחרוזות
- חיפוש והחלפה בטקסט
- עיבוד קלט משתמש
- פיצול וחיבור מחרוזות

## יסודות מחרוזות
\`\`\`python
text = "שלום עולם"
print(len(text))  # אורך המחרוזת
print(text[0])    # התו הראשון
print(text[-1])   # התו האחרון
print(text[0:5])  # חיתוך מחרוזת
\`\`\`

## פונקציות מובנות למחרוזות
\`\`\`python
sentence = "אני אוהב לתכנת בפייתון"

# שינוי גודל אותיות
print(sentence.upper())  # אותיות גדולות
print(sentence.lower())  # אותיות קטנות
print(sentence.title())  # כל מילה מתחילה באות גדולה

# חיפוש
print(sentence.find("פייתון"))  # מיקום המילה
print("פייתון" in sentence)     # האם המילה קיימת
print(sentence.count("א"))       # כמה פעמים האות מופיעה
\`\`\`

## פיצול וחיבור מחרוזות
\`\`\`python
# פיצול מחרוזת
sentence = "תפוח,בננה,תפוז,אבטיח"
fruits = sentence.split(",")
print(fruits)

# חיבור רשימה למחרוזת
joined = " - ".join(fruits)
print(joined)

# הסרת רווחים
text = "  שלום עולם  "
print(text.strip())  # מסיר רווחים מהתחלה והסוף
\`\`\`

## החלפת טקסט
\`\`\`python
text = "אני אוהב פיצה. פיצה זה טעים"
new_text = text.replace("פיצה", "המבורגר")
print(new_text)
\`\`\`

## עיבוד קלט משתמש
\`\`\`python
# קבלת קלט מהמשתמש
name = input("איך קוראים לך? ")
age = int(input("בן כמה אתה? "))
print(f"שלום {name}, אתה בן {age}")

# בדיקת קלט
password = input("הכנס סיסמה: ")
if len(password) < 8:
    print("סיסמה חייבת להיות לפחות 8 תווים")
else:
    print("סיסמה מתאימה")
\`\`\`

## עיבוד טקסט מתקדם
\`\`\`python
def count_words(text):
    words = text.split()
    return len(words)

def find_longest_word(text):
    words = text.split()
    longest = ""
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest

# דוגמה
text = "פייתון היא שפת תכנות מצוינת ללימוד"
print(f"מספר מילים: {count_words(text)}")
print(f"המילה הארוכה ביותר: {find_longest_word(text)}")
\`\`\`

## פורמט מחרוזות
\`\`\`python
name = "יוסי"
age = 25
city = "תל אביב"

# דרכים שונות לפורמט
print("שמי %s, אני בן %d ואני גר ב%s" % (name, age, city))
print("שמי {}, אני בן {} ואני גר ב{}".format(name, age, city))
print(f"שמי {name}, אני בן {age} ואני גר ב{city}")
\`\`\`
`,
    exercises: [
      "כתב פונקציה שמקבלת מחרוזת ומדפיסה אותה הפוך",
      "צור תוכנית שמקבלת משפט ומחזירה את המילה הארוכה ביותר",
      "כתב פונקציה שסופרת כמה אותיות בכל מילה במשפט",
      "צור תוכנית שמחליפה את כל הרווחים בטקסט בקווים תחתונים",
      "כתב פונקציה שבודקת אם מחרוזת היא פלינדרום (זהה קדימה ואחורה)"
    ],
    solutions: [
      "def reverse_string(text):\n    return text[::-1]\n\ntest_text = 'שלום עולם'\nprint(reverse_string(test_text))",
      "def longest_word(sentence):\n    words = sentence.split()\n    longest = ''\n    for word in words:\n        if len(word) > len(longest):\n            longest = word\n    return longest\n\ntest_sentence = 'פייתון היא שפה מצוינת'\nprint(longest_word(test_sentence))",
      "def count_letters_in_words(sentence):\n    words = sentence.split()\n    for word in words:\n        print(f'{word}: {len(word)} אותיות')\n\ntest_text = 'אני אוהב לתכנת'\ncount_letters_in_words(test_text)",
      "def replace_spaces(text):\n    return text.replace(' ', '_')\n\ntest_text = 'שלום עולם נפלא'\nprint(replace_spaces(test_text))",
      "def is_palindrome(text):\n    clean_text = text.replace(' ', '').lower()\n    return clean_text == clean_text[::-1]\n\ntest_words = ['אבא', 'אמא', 'שלום']\nfor word in test_words:\n    print(f'{word}: {is_palindrome(word)}')"
    ]
  },
  {
    id: 5,
    title: "מילונים וקבצים",
    description: "עבודה עם מילונים, קריאה וכתיבה של קבצים, ניהול נתונים",
    tutorial: `
# מעבדה 5: מילונים וקבצים

## מה נלמד היום?
- מילונים (Dictionaries) - מה זה ואיך משתמשים
- קריאה וכתיבה של קבצים
- עיבוד נתונים ממקורות חיצוניים
- שילוב מילונים עם רשימות

## מילונים (Dictionaries)
מילון הוא אוסף של זוגות מפתח-ערך. זה כמו מילון אמיתי - יש מילה (מפתח) והגדרה (ערך).

\`\`\`python
# יצירת מילון
student = {
    "name": "יוסי",
    "age": 20,
    "grade": 95,
    "city": "תל אביב"
}

# גישה לערכים
print(student["name"])
print(student["age"])

# הוספת ערך חדש
student["subject"] = "מתמטיקה"
print(student)
\`\`\`

## פעולות על מילונים
\`\`\`python
# בדיקה אם מפתח קיים
if "name" in student:
    print("השם נמצא במילון")

# קבלת כל המפתחות
print(student.keys())

# קבלת כל הערכים
print(student.values())

# קבלת כל הזוגות
print(student.items())

# מחיקת מפתח
del student["city"]
print(student)
\`\`\`

## לולאות על מילונים
\`\`\`python
# לולאה על מפתחות
for key in student:
    print(f"{key}: {student[key]}")

# לולאה על מפתחות וערכים
for key, value in student.items():
    print(f"{key}: {value}")
\`\`\`

## עבודה עם קבצים
\`\`\`python
# כתיבה לקובץ
with open("message.txt", "w", encoding="utf-8") as file:
    file.write("שלום עולם!\\n")
    file.write("זה השורה השנייה")

# קריאה מקובץ
with open("message.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)
\`\`\`

## קריאת קבצים שורה אחרי שורה
\`\`\`python
# כתיבת מספר שורות
lines = ["שורה ראשונה", "שורה שנייה", "שורה שלישית"]
with open("lines.txt", "w", encoding="utf-8") as file:
    for line in lines:
        file.write(line + "\\n")

# קריאת כל השורות
with open("lines.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())  # strip מסיר את \\n
\`\`\`

## שילוב מילונים ורשימות
\`\`\`python
# רשימה של מילונים
students = [
    {"name": "יוסי", "age": 20, "grade": 95},
    {"name": "שרה", "age": 19, "grade": 88},
    {"name": "דני", "age": 21, "grade": 92}
]

# מציאת הסטודנט עם הציון הגבוה ביותר
best_student = students[0]
for student in students:
    if student["grade"] > best_student["grade"]:
        best_student = student

print(f"הסטודנט הטוב ביותר: {best_student['name']} עם ציון {best_student['grade']}")
\`\`\`

## שמירת מילונים בקובץ
\`\`\`python
import json

# שמירת מילון בקובץ JSON
data = {
    "students": [
        {"name": "יוסי", "grade": 95},
        {"name": "שרה", "grade": 88}
    ]
}

with open("students.json", "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=2)

# קריאת מילון מקובץ JSON
with open("students.json", "r", encoding="utf-8") as file:
    loaded_data = json.load(file)
    print(loaded_data)
\`\`\`
`,
    exercises: [
      "צור מילון שמייצג ספר (שם, מחבר, מספר עמודים, שנת הוצאה) וכתב פונקציה שמדפיסה את כל הפרטים",
      "כתב תוכנית שמנהלת רשימת קניות - המשתמש יכול להוסיף מוצרים, למחוק ולהציג את הרשימה",
      "צור קובץ עם שמות וגילאים של 5 אנשים, קרא את הקובץ וחשב את הגיל הממוצע",
      "כתב תוכנית שסופרת כמה פעמים כל מילה מופיעה בטקסט",
      "צור מילון שמייצג חנות (מוצרים ומחירים) וכתב פונקציה שמחשבת סכום קניות"
    ],
    solutions: [
      "def create_book():\n    book = {\n        'title': 'הארי פוטר',\n        'author': 'ג.ק. רולינג',\n        'pages': 400,\n        'year': 1997\n    }\n    for key, value in book.items():\n        print(f'{key}: {value}')\n\ncreate_book()",
      "shopping_list = {}\n\ndef add_item(item, quantity):\n    shopping_list[item] = quantity\n\ndef remove_item(item):\n    if item in shopping_list:\n        del shopping_list[item]\n\ndef show_list():\n    for item, quantity in shopping_list.items():\n        print(f'{item}: {quantity}')\n\nadd_item('חלב', 2)\nadd_item('לחם', 1)\nshow_list()",
      "people = [\n    {'name': 'יוסי', 'age': 25},\n    {'name': 'שרה', 'age': 30},\n    {'name': 'דני', 'age': 22}\n]\n\ntotal_age = sum(person['age'] for person in people)\naverage_age = total_age / len(people)\nprint(f'הגיל הממוצע: {average_age}')",
      "def count_words(text):\n    words = text.split()\n    word_count = {}\n    for word in words:\n        word_count[word] = word_count.get(word, 0) + 1\n    return word_count\n\ntext = 'שלום עולם שלום כולם'\nprint(count_words(text))",
      "store = {\n    'חלב': 5.5,\n    'לחם': 8.0,\n    'גבינה': 25.0\n}\n\ndef calculate_total(cart):\n    total = 0\n    for item, quantity in cart.items():\n        total += store[item] * quantity\n    return total\n\ncart = {'חלב': 2, 'לחם': 1}\nprint(f'סך הכל: {calculate_total(cart)} ש\"ח')"
    ]
  },
  {
    id: 6,
    title: "טיפול בשגיאות ומודולים",
    description: "למידת try-except, יצירת מודולים, ארגון קוד וטיפול בחריגים",
    tutorial: `
# מעבדה 6: טיפול בשגיאות ומודולים

## מה נלמד היום?
- מה זה שגיאות ולמה הן קורות
- טיפול בשגיאות עם try-except
- יצירת מודולים משלנו
- ייבוא מודולים מובנים

## למה צריך לטפל בשגיאות?
כאשר משתמש מזין נתונים שגויים או משהו לא עובד כמו שצריך, התוכנית יכולה לקרוס.
אנחנו רוצים שהתוכנית תמשיך לעבוד גם כשיש בעיות.

\`\`\`python
# דוגמה לשגיאה
number = int(input("הכנס מספר: "))  # אם המשתמש יכניס טקסט - שגיאה!
print(number * 2)
\`\`\`

## try-except - טיפול בשגיאות
\`\`\`python
try:
    number = int(input("הכנס מספר: "))
    print(number * 2)
except ValueError:
    print("זה לא מספר תקין!")
\`\`\`

## טיפול במספר סוגי שגיאות
\`\`\`python
try:
    numbers = [1, 2, 3]
    index = int(input("הכנס מיקום (0-2): "))
    result = 10 / numbers[index]
    print(f"התוצאה: {result}")
except ValueError:
    print("זה לא מספר תקין!")
except IndexError:
    print("המיקום לא קיים ברשימה!")
except ZeroDivisionError:
    print("לא ניתן לחלק באפס!")
except:
    print("קרתה שגיאה לא צפויה!")
\`\`\`

## try-except עם else ו-finally
\`\`\`python
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("הקובץ לא נמצא!")
else:
    print("הקובץ נקרא בהצלחה")
    print(content)
finally:
    print("הפעולה הסתיימה")
    try:
        file.close()
    except:
        pass
\`\`\`

## מודולים - מה זה?
מודול זה קובץ פייתון שמכיל פונקציות שאנחנו יכולים להשתמש בהן.

### יצירת מודול משלנו
\`\`\`python
# קובץ: math_utils.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

def calculate_average(numbers):
    return sum(numbers) / len(numbers)

PI = 3.14159
\`\`\`

### שימוש במודול
\`\`\`python
# קובץ: main.py
import math_utils

result = math_utils.add(5, 3)
print(result)

# או ייבוא פונקציה ספציפית
from math_utils import calculate_average, PI

numbers = [1, 2, 3, 4, 5]
avg = calculate_average(numbers)
print(f"ממוצע: {avg}")
print(f"פי: {PI}")
\`\`\`

## מודולים מובנים
\`\`\`python
# מודול math
import math
print(math.sqrt(16))  # שורש ריבועי
print(math.pi)        # פי

# מודול random
import random
print(random.randint(1, 10))    # מספר אקראי בין 1 ל-10
print(random.choice(['א', 'ב', 'ג']))  # בחירה אקראית מרשימה

# מודול datetime
from datetime import datetime
now = datetime.now()
print(f"התאריך כעת: {now}")
\`\`\`

## דוגמה מעשית - מחשבון בטוח
\`\`\`python
# קובץ: calculator.py
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "שגיאה: לא ניתן לחלק באפס"

def get_number(prompt):
    while True:
        try:
            return float(input(prompt))
        except ValueError:
            print("אנא הכנס מספר תקין")

def calculator():
    print("מחשבון בטוח")
    num1 = get_number("הכנס מספר ראשון: ")
    num2 = get_number("הכנס מספר שני: ")
    
    print(f"חיבור: {num1 + num2}")
    print(f"חיסור: {num1 - num2}")
    print(f"כפל: {num1 * num2}")
    print(f"חילוק: {safe_divide(num1, num2)}")

if __name__ == "__main__":
    calculator()
\`\`\`

## ארגון פרויקט
\`\`\`
my_project/
├── main.py
├── utils/
│   ├── __init__.py
│   ├── math_utils.py
│   └── file_utils.py
└── data/
    └── config.txt
\`\`\`
`,
    exercises: [
      "כתב תוכנית שמקבלת מספר מהמשתמש ומדפיסה את השורש הריבועי שלו, עם טיפול בשגיאות",
      "צור מודול 'string_utils' עם פונקציות לעיבוד מחרוזות ותכתב תוכנית ראשית שמשתמשת בו",
      "כתב תוכנית שקוראת קובץ ומדפיסה את תוכנו, עם טיפול בשגיאות אם הקובץ לא קיים",
      "צור מחשבון שמטפל בכל השגיאות האפשריות ומאפשר למשתמש לנסות שוב",
      "כתב תוכנית שמשתמשת במודול random ליצירת משחק ניחושים"
    ],
    solutions: [
      "import math\n\ndef safe_sqrt():\n    try:\n        number = float(input('הכנס מספר: '))\n        if number < 0:\n            print('לא ניתן לחשב שורש של מספר שלילי')\n        else:\n            result = math.sqrt(number)\n            print(f'השורש הריבועי של {number} הוא {result}')\n    except ValueError:\n        print('אנא הכנס מספר תקין')\n\nsafe_sqrt()",
      "# string_utils.py\ndef reverse_string(text):\n    return text[::-1]\n\ndef count_vowels(text):\n    vowels = 'aeiouAEIOU'\n    return sum(1 for char in text if char in vowels)\n\n# main.py\nimport string_utils\n\ntext = 'Hello World'\nprint(string_utils.reverse_string(text))\nprint(string_utils.count_vowels(text))",
      "def read_file_safely(filename):\n    try:\n        with open(filename, 'r', encoding='utf-8') as file:\n            content = file.read()\n            print(content)\n    except FileNotFoundError:\n        print(f'הקובץ {filename} לא נמצא')\n    except Exception as e:\n        print(f'שגיאה בקריאת הקובץ: {e}')\n\nread_file_safely('test.txt')",
      "def calculator():\n    while True:\n        try:\n            num1 = float(input('הכנס מספר ראשון: '))\n            operation = input('הכנס פעולה (+, -, *, /): ')\n            num2 = float(input('הכנס מספר שני: '))\n            \n            if operation == '+':\n                result = num1 + num2\n            elif operation == '-':\n                result = num1 - num2\n            elif operation == '*':\n                result = num1 * num2\n            elif operation == '/':\n                if num2 == 0:\n                    print('לא ניתן לחלק באפס')\n                    continue\n                result = num1 / num2\n            else:\n                print('פעולה לא תקינה')\n                continue\n                \n            print(f'תוצאה: {result}')\n            break\n        except ValueError:\n            print('אנא הכנס מספרים תקינים')\n        except Exception as e:\n            print(f'שגיאה: {e}')\n\ncalculator()",
      "import random\n\ndef guessing_game():\n    secret_number = random.randint(1, 100)\n    attempts = 0\n    \n    print('נחש את המספר בין 1 ל-100!')\n    \n    while True:\n        try:\n            guess = int(input('הכנס את הניחוש שלך: '))\n            attempts += 1\n            \n            if guess == secret_number:\n                print(f'כל הכבוד! ניחשת נכון ב-{attempts} נסיונות')\n                break\n            elif guess < secret_number:\n                print('המספר גבוה יותר')\n            else:\n                print('המספר נמוך יותר')\n                \n        except ValueError:\n            print('אנא הכנס מספר תקין')\n\nguessing_game()"
    ]
  },
  {
    id: 7,
    title: "מחלקות ואובייקטים",
    description: "הכנות לתכנות מונחה עצמים, יצירת מחלקות, מתודות ותכונות",
    tutorial: `
# מעבדה 7: מחלקות ואובייקטים

## מה נלמד היום?
- מה זה תכנות מונחה עצמים (OOP)
- יצירת מחלקות (Classes)
- יצירת אובייקטים (Objects)
- מתודות ותכונות

## מה זה תכנות מונחה עצמים?
תכנות מונחה עצמים זה דרך לארגן קוד שבה אנחנו יוצרים "דברים" (אובייקטים) 
שיש להם תכונות ויכולות לבצע פעולות.

דוגמה: רכב יש לו תכונות (צבע, מהירות) ויכולות (נסיעה, בלימה).

## יצירת מחלקה ראשונה
\`\`\`python
class Car:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color
        self.speed = 0
    
    def accelerate(self):
        self.speed += 10
        print(f"הרכב מאיץ! מהירות כעת: {self.speed}")
    
    def brake(self):
        if self.speed > 0:
            self.speed -= 10
            print(f"הרכב בולם! מהירות כעת: {self.speed}")
    
    def info(self):
        print(f"רכב {self.brand} בצבע {self.color}, מהירות: {self.speed}")

# יצירת אובייקט
my_car = Car("טויוטה", "כחול")
my_car.info()
my_car.accelerate()
my_car.accelerate()
my_car.brake()
\`\`\`

## הסבר על המחלקה
- **__init__**: פונקציה שמופעלת כאשר יוצרים אובייקט חדש
- **self**: מתייחס לאובייקט הנוכחי
- **תכונות**: brand, color, speed
- **מתודות**: accelerate, brake, info

## דוגמה נוספת - מחלקת סטודנט
\`\`\`python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.grades = []
    
    def add_grade(self, grade):
        self.grades.append(grade)
        print(f"נוסף ציון {grade} לסטודנט {self.name}")
    
    def calculate_average(self):
        if len(self.grades) == 0:
            return 0
        return sum(self.grades) / len(self.grades)
    
    def get_info(self):
        avg = self.calculate_average()
        return f"סטודנט: {self.name}, גיל: {self.age}, ממוצע: {avg:.2f}"

# שימוש במחלקה
student1 = Student("יוסי", 20)
student1.add_grade(85)
student1.add_grade(90)
student1.add_grade(78)
print(student1.get_info())
\`\`\`

## מתודות מיוחדות
\`\`\`python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        return f"{self.title} מאת {self.author}"
    
    def __len__(self):
        return self.pages
    
    def __eq__(self, other):
        return self.title == other.title and self.author == other.author

# שימוש במתודות המיוחדות
book1 = Book("הארי פוטר", "ג.ק. רולינג", 400)
book2 = Book("שר הטבעות", "טולקין", 500)

print(book1)  # יפעיל __str__
print(len(book1))  # יפעיל __len__
print(book1 == book2)  # יפעיל __eq__
\`\`\`

## ירושה (Inheritance)
\`\`\`python
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def make_sound(self):
        print(f"{self.name} משמיע קול")
    
    def info(self):
        print(f"שם: {self.name}, מין: {self.species}")

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "כלב")
        self.breed = breed
    
    def make_sound(self):
        print(f"{self.name} נובח: הב הב!")
    
    def fetch(self):
        print(f"{self.name} מביא את הכדור")

class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, "חתול")
        self.color = color
    
    def make_sound(self):
        print(f"{self.name} מיילל: מיאו!")
    
    def climb(self):
        print(f"{self.name} מטפס על העץ")

# יצירת אובייקטים
dog = Dog("רקס", "לברדור")
cat = Cat("מיטצי", "שחור")

dog.info()
dog.make_sound()
dog.fetch()

cat.info()
cat.make_sound()
cat.climb()
\`\`\`

## מחלקה מתקדמת - בנק
\`\`\`python
class BankAccount:
    def __init__(self, account_number, owner_name, initial_balance=0):
        self.account_number = account_number
        self.owner_name = owner_name
        self.balance = initial_balance
        self.transactions = []
    
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.transactions.append(f"הפקדה: +{amount}")
            print(f"הופקד {amount} ש\"ח. יתרה: {self.balance}")
        else:
            print("סכום ההפקדה חייב להיות חיובי")
    
    def withdraw(self, amount):
        if amount > 0 and amount <= self.balance:
            self.balance -= amount
            self.transactions.append(f"משיכה: -{amount}")
            print(f"נמשך {amount} ש\"ח. יתרה: {self.balance}")
        else:
            print("סכום לא תקין או יתרה לא מספיקה")
    
    def get_balance(self):
        return self.balance
    
    def get_statement(self):
        print(f"חשבון: {self.account_number}")
        print(f"בעל החשבון: {self.owner_name}")
        print(f"יתרה נוכחית: {self.balance}")
        print("תנועות:")
        for transaction in self.transactions:
            print(f"  {transaction}")

# שימוש בחשבון הבנק
account = BankAccount("12345", "יוסי כהן", 1000)
account.deposit(500)
account.withdraw(200)
account.withdraw(2000)  # יתרה לא מספיקה
account.get_statement()
\`\`\`
`,
    exercises: [
      "צור מחלקה 'Rectangle' עם תכונות רוחב וגובה, ומתודות לחישוב שטח והיקף",
      "כתב מחלקה 'Person' עם שם וגיל, ומתודה שבודקת אם האדם בגיר",
      "צור מחלקה 'Calculator' עם מתודות לחישוב פעולות מתמטיות בסיסיות",
      "כתב מחלקה 'Library' שמנהלת רשימת ספרים (הוספה, הסרה, חיפוש)",
      "צור מחלקה 'Game' שמדמה משחק פשוט עם נקודות ורמות"
    ],
    solutions: [
      "class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):\n        return self.width * self.height\n    \n    def perimeter(self):\n        return 2 * (self.width + self.height)\n    \n    def info(self):\n        return f'מלבן {self.width}x{self.height}, שטח: {self.area()}, היקף: {self.perimeter()}'\n\nrect = Rectangle(5, 3)\nprint(rect.info())",
      "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def is_adult(self):\n        return self.age >= 18\n    \n    def info(self):\n        status = 'בגיר' if self.is_adult() else 'קטין'\n        return f'{self.name}, גיל {self.age} ({status})'\n\nperson = Person('יוסי', 20)\nprint(person.info())",
      "class Calculator:\n    def __init__(self):\n        self.result = 0\n    \n    def add(self, a, b):\n        return a + b\n    \n    def subtract(self, a, b):\n        return a - b\n    \n    def multiply(self, a, b):\n        return a * b\n    \n    def divide(self, a, b):\n        if b != 0:\n            return a / b\n        else:\n            return 'שגיאה: חלוקה באפס'\n\ncalc = Calculator()\nprint(calc.add(5, 3))\nprint(calc.divide(10, 2))",
      "class Library:\n    def __init__(self):\n        self.books = []\n    \n    def add_book(self, title, author):\n        book = {'title': title, 'author': author}\n        self.books.append(book)\n        print(f'ספר \"{title}\" נוסף לספרייה')\n    \n    def remove_book(self, title):\n        for book in self.books:\n            if book['title'] == title:\n                self.books.remove(book)\n                print(f'ספר \"{title}\" הוסר מהספרייה')\n                return\n        print(f'ספר \"{title}\" לא נמצא')\n    \n    def search_book(self, title):\n        for book in self.books:\n            if title.lower() in book['title'].lower():\n                return book\n        return None\n    \n    def list_books(self):\n        for book in self.books:\n            print(f'{book[\"title\"]} - {book[\"author\"]}')\n\nlibrary = Library()\nlibrary.add_book('הארי פוטר', 'ג.ק. רולינג')\nlibrary.list_books()",
      "class Game:\n    def __init__(self, player_name):\n        self.player_name = player_name\n        self.score = 0\n        self.level = 1\n    \n    def add_points(self, points):\n        self.score += points\n        print(f'{self.player_name} קיבל {points} נקודות!')\n        self.check_level_up()\n    \n    def check_level_up(self):\n        new_level = self.score // 100 + 1\n        if new_level > self.level:\n            self.level = new_level\n            print(f'כל הכבוד! עליתם לרמה {self.level}!')\n    \n    def game_info(self):\n        return f'שחקן: {self.player_name}, נקודות: {self.score}, רמה: {self.level}'\n\ngame = Game('יוסי')\ngame.add_points(50)\ngame.add_points(80)\nprint(game.game_info())"
    ]
  },
  {
    id: 8,
    title: "API ובקשות HTTP",
    description: "עבודה עם API חיצוני, בקשות HTTP, עיבוד JSON ויצירת אפליקציות מחוברות",
    tutorial: `
# מעבדה 8: API ובקשות HTTP

## מה נלמד היום?
- מה זה API ולמה זה חשוב
- איך לשלוח בקשות HTTP
- עיבוד נתונים בפורמט JSON
- יצירת אפליקציות שמתחברות לאינטרנט

## מה זה API?
API (Application Programming Interface) זה דרך לתוכניות לתקשר זו עם זו.
דומה לתפריט במסעדה - אתה יודע מה אתה יכול להזמין, אבל לא צריך לדעת איך מכינים את האוכל.

## התקנת הספרייה requests
\`\`\`bash
pip install requests
\`\`\`

## בקשה HTTP ראשונה
\`\`\`python
import requests

# בקשה פשוטה
response = requests.get('https://api.github.com')
print(response.status_code)  # 200 = הצלחה
print(response.text[:100])   # 100 התווים הראשונים
\`\`\`

## עבודה עם JSON
\`\`\`python
import requests
import json

# קבלת נתונים על משתמש GitHub
username = "octocat"
url = f"https://api.github.com/users/{username}"

response = requests.get(url)

if response.status_code == 200:
    user_data = response.json()  # המרה ל-dictionary
    print(f"שם: {user_data['name']}")
    print(f"מיקום: {user_data['location']}")
    print(f"מספר repositories: {user_data['public_repos']}")
else:
    print(f"שגיאה: {response.status_code}")
\`\`\`

## מידע על מזג האוויר
\`\`\`python
import requests

def get_weather(city):
    # API חינמי למזג אוויר
    url = f"https://api.openweathermap.org/data/2.5/weather"
    params = {
        'q': city,
        'appid': 'YOUR_API_KEY',  # צריך להירשם לקבלת מפתח
        'units': 'metric',
        'lang': 'he'
    }
    
    try:
        response = requests.get(url, params=params)
        data = response.json()
        
        if response.status_code == 200:
            temp = data['main']['temp']
            description = data['weather'][0]['description']
            return f"מזג האוויר ב{city}: {temp}°C, {description}"
        else:
            return f"שגיאה: {data['message']}"
    except requests.RequestException:
        return "שגיאה בחיבור לאינטרנט"

# שימוש
print(get_weather("Tel Aviv"))
\`\`\`

## עבודה עם מספר בקשות
\`\`\`python
import requests
import time

def get_random_joke():
    url = "https://official-joke-api.appspot.com/random_joke"
    try:
        response = requests.get(url)
        if response.status_code == 200:
            joke = response.json()
            return f"{joke['setup']} - {joke['punchline']}"
        else:
            return "לא הצלחנו לקבל בדיחה"
    except:
        return "שגיאה בחיבור"

# קבלת 5 בדיחות
for i in range(5):
    print(f"בדיחה {i+1}: {get_random_joke()}")
    time.sleep(1)  # המתנה של שנייה בין בקשות
\`\`\`

## שליחת נתונים (POST)
\`\`\`python
import requests

def send_data_example():
    url = "https://httpbin.org/post"
    data = {
        "name": "יוסי",
        "age": 25,
        "city": "תל אביב"
    }
    
    response = requests.post(url, json=data)
    
    if response.status_code == 200:
        result = response.json()
        print("הנתונים נשלחו בהצלחה")
        print(result['json'])  # הנתונים שנשלחו
    else:
        print("שגיאה בשליחת הנתונים")

send_data_example()
\`\`\`

## אפליקציה מעשית - בודק מחירי מטבעות
\`\`\`python
import requests

class CurrencyConverter:
    def __init__(self):
        self.base_url = "https://api.exchangerate-api.com/v4/latest/"
    
    def get_exchange_rate(self, from_currency, to_currency):
        try:
            url = f"{self.base_url}{from_currency}"
            response = requests.get(url)
            
            if response.status_code == 200:
                data = response.json()
                rates = data['rates']
                
                if to_currency in rates:
                    return rates[to_currency]
                else:
                    return None
            else:
                return None
        except:
            return None
    
    def convert(self, amount, from_currency, to_currency):
        rate = self.get_exchange_rate(from_currency, to_currency)
        if rate:
            converted_amount = amount * rate
            return f"{amount} {from_currency} = {converted_amount:.2f} {to_currency}"
        else:
            return "שגיאה בהמרת המטבע"

# שימוש
converter = CurrencyConverter()
print(converter.convert(100, "USD", "EUR"))
print(converter.convert(1000, "USD", "ILS"))
\`\`\`

## טיפול בשגיאות ב-API
\`\`\`python
import requests
from requests.exceptions import RequestException, Timeout, ConnectionError

def safe_api_call(url, timeout=5):
    try:
        response = requests.get(url, timeout=timeout)
        response.raise_for_status()  # יזרוק שגיאה אם הסטטוס לא 200
        return response.json()
    except Timeout:
        return {"error": "הבקשה נכשלה - timeout"}
    except ConnectionError:
        return {"error": "שגיאה בחיבור לאינטרנט"}
    except requests.HTTPError as e:
        return {"error": f"שגיאת HTTP: {e}"}
    except ValueError:
        return {"error": "שגיאה בעיבוד JSON"}
    except RequestException as e:
        return {"error": f"שגיאה כללית: {e}"}

# שימוש
result = safe_api_call("https://api.github.com/users/octocat")
if "error" in result:
    print(f"שגיאה: {result['error']}")
else:
    print(f"שם המשתמש: {result['name']}")
\`\`\`

## פרויקט מעשי - חיפוש ספרים
\`\`\`python
import requests

class BookSearcher:
    def __init__(self):
        self.base_url = "https://openlibrary.org/search.json"
    
    def search_books(self, query, limit=5):
        params = {
            'q': query,
            'limit': limit
        }
        
        try:
            response = requests.get(self.base_url, params=params)
            if response.status_code == 200:
                data = response.json()
                books = []
                
                for book in data.get('docs', []):
                    book_info = {
                        'title': book.get('title', 'לא ידוע'),
                        'author': book.get('author_name', ['לא ידוע'])[0] if book.get('author_name') else 'לא ידוע',
                        'year': book.get('first_publish_year', 'לא ידוע'),
                        'pages': book.get('number_of_pages_median', 'לא ידוע')
                    }
                    books.append(book_info)
                
                return books
            else:
                return []
        except:
            return []
    
    def display_books(self, books):
        if not books:
            print("לא נמצאו ספרים")
            return
        
        print(f"נמצאו {len(books)} ספרים:")
        for i, book in enumerate(books, 1):
            print(f"{i}. {book['title']}")
            print(f"   מחבר: {book['author']}")
            print(f"   שנה: {book['year']}")
            print(f"   עמודים: {book['pages']}")
            print()

# שימוש
searcher = BookSearcher()
query = input("חפש ספר: ")
books = searcher.search_books(query)
searcher.display_books(books)
\`\`\`
`,
    exercises: [
      "כתב תוכנית שמשתמשת ב-API של GitHub לקבלת מידע על repository ספציפי",
      "צור אפליקציה שמחפשת מידע על סרטים באמצעות API חיצוני",
      "כתב תוכנית שמקבלת ציטוטים אקראיים מ-API ושומרת אותם בקובץ",
      "צור מחלקה שמנהלת TODO list עם שליחת הנתונים לשרת חיצוני",
      "כתב אפליקציה שמחפשת חדשות לפי נושא באמצעות News API"
    ],
    solutions: [
      "import requests\n\ndef get_repo_info(owner, repo):\n    url = f'https://api.github.com/repos/{owner}/{repo}'\n    response = requests.get(url)\n    \n    if response.status_code == 200:\n        data = response.json()\n        print(f'שם: {data[\"name\"]}')\n        print(f'תיאור: {data[\"description\"]}')\n        print(f'כוכבים: {data[\"stargazers_count\"]}')\n        print(f'שפה: {data[\"language\"]}')\n    else:\n        print('Repository לא נמצא')\n\nget_repo_info('microsoft', 'vscode')",
      "import requests\n\nclass MovieSearcher:\n    def __init__(self):\n        self.base_url = 'http://www.omdbapi.com/'\n        self.api_key = 'YOUR_API_KEY'  # צריך מפתח API\n    \n    def search_movie(self, title):\n        params = {\n            'apikey': self.api_key,\n            't': title\n        }\n        \n        response = requests.get(self.base_url, params=params)\n        if response.status_code == 200:\n            data = response.json()\n            if data.get('Response') == 'True':\n                return {\n                    'title': data.get('Title'),\n                    'year': data.get('Year'),\n                    'director': data.get('Director'),\n                    'plot': data.get('Plot')\n                }\n        return None\n\nsearcher = MovieSearcher()\nmovie = searcher.search_movie('The Matrix')\nif movie:\n    print(f'סרט: {movie[\"title\"]} ({movie[\"year\"]})')",
      "import requests\nimport json\n\ndef get_random_quotes(count=5):\n    quotes = []\n    for _ in range(count):\n        response = requests.get('https://api.quotable.io/random')\n        if response.status_code == 200:\n            data = response.json()\n            quotes.append({\n                'content': data['content'],\n                'author': data['author']\n            })\n    return quotes\n\ndef save_quotes_to_file(quotes, filename='quotes.json'):\n    with open(filename, 'w', encoding='utf-8') as f:\n        json.dump(quotes, f, ensure_ascii=False, indent=2)\n\nquotes = get_random_quotes()\nsave_quotes_to_file(quotes)\nprint(f'נשמרו {len(quotes)} ציטוטים')",
      "import requests\n\nclass TodoAPI:\n    def __init__(self):\n        self.base_url = 'https://jsonplaceholder.typicode.com/todos'\n    \n    def get_todos(self):\n        response = requests.get(self.base_url)\n        if response.status_code == 200:\n            return response.json()[:10]  # רק 10 הראשונים\n        return []\n    \n    def add_todo(self, title):\n        data = {\n            'title': title,\n            'completed': False,\n            'userId': 1\n        }\n        response = requests.post(self.base_url, json=data)\n        if response.status_code == 201:\n            return response.json()\n        return None\n    \n    def display_todos(self, todos):\n        for todo in todos:\n            status = '✓' if todo['completed'] else '✗'\n            print(f'{status} {todo[\"title\"]}')\n\ntodo_api = TodoAPI()\ntodos = todo_api.get_todos()\ntodo_api.display_todos(todos)",
      "import requests\n\nclass NewsSearcher:\n    def __init__(self):\n        self.base_url = 'https://newsapi.org/v2/everything'\n        self.api_key = 'YOUR_API_KEY'  # צריך מפתח API\n    \n    def search_news(self, query, language='en'):\n        params = {\n            'q': query,\n            'apiKey': self.api_key,\n            'language': language,\n            'pageSize': 5\n        }\n        \n        response = requests.get(self.base_url, params=params)\n        if response.status_code == 200:\n            data = response.json()\n            return data.get('articles', [])\n        return []\n    \n    def display_news(self, articles):\n        for i, article in enumerate(articles, 1):\n            print(f'{i}. {article[\"title\"]}')\n            print(f'   מקור: {article[\"source\"][\"name\"]}')\n            print(f'   תאריך: {article[\"publishedAt\"][:10]}')\n            print(f'   {article[\"description\"]}')\n            print()\n\nnews = NewsSearcher()\narticles = news.search_news('python programming')\nnews.display_news(articles)"
    ]
  },
  {
    id: 9,
    title: "מסדי נתונים ו-SQL",
    description: "חיבור למסד נתונים, כתיבת שאילתות SQL, ניהול נתונים מתקדם",
    tutorial: `
# מעבדה 9: מסדי נתונים ו-SQL

## מה נלמד היום?
- מה זה מסד נתונים ולמה זה חשוב
- עבודה עם SQLite בפייתון
- כתיבת שאילתות SQL בסיסיות
- ניהול נתונים מתקדם

## מה זה מסד נתונים?
מסד נתונים זה מקום לאחסן מידע בצורה מסודרת.
דומה לארון תיקיות ענק שבו אנחנו יכולים לשמור, לחפש ולעדכן מידע בקלות.

## התחלה עם SQLite
SQLite זה מסד נתונים קל שמובנה בפייתון.

\`\`\`python
import sqlite3

# יצירת חיבור למסד נתונים
conn = sqlite3.connect('my_database.db')
cursor = conn.cursor()

# יצירת טבלה
cursor.execute('''
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER,
        grade REAL
    )
''')

# שמירת השינויים
conn.commit()
conn.close()
\`\`\`

## הוספת נתונים (INSERT)
\`\`\`python
import sqlite3

def add_student(name, age, grade):
    conn = sqlite3.connect('my_database.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        INSERT INTO students (name, age, grade)
        VALUES (?, ?, ?)
    ''', (name, age, grade))
    
    conn.commit()
    conn.close()
    print(f"הסטודנט {name} נוסף בהצלחה")

# הוספת סטודנטים
add_student("יוסי כהן", 20, 85.5)
add_student("שרה לוי", 19, 92.0)
add_student("דני אברהם", 21, 78.5)
\`\`\`

## קריאת נתונים (SELECT)
\`\`\`python
import sqlite3

def get_all_students():
    conn = sqlite3.connect('my_database.db')
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM students')
    students = cursor.fetchall()
    
    conn.close()
    return students

def display_students():
    students = get_all_students()
    print("רשימת הסטודנטים:")
    for student in students:
        print(f"ID: {student[0]}, שם: {student[1]}, גיל: {student[2]}, ציון: {student[3]}")

display_students()
\`\`\`

## עדכון נתונים (UPDATE)
\`\`\`python
def update_student_grade(student_id, new_grade):
    conn = sqlite3.connect('my_database.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        UPDATE students 
        SET grade = ?
        WHERE id = ?
    ''', (new_grade, student_id))
    
    if cursor.rowcount > 0:
        print(f"הציון עודכן בהצלחה")
    else:
        print("סטודנט לא נמצא")
    
    conn.commit()
    conn.close()

# עדכון ציון
update_student_grade(1, 90.0)
\`\`\`

## מחיקת נתונים (DELETE)
\`\`\`python
def delete_student(student_id):
    conn = sqlite3.connect('my_database.db')
    cursor = conn.cursor()
    
    cursor.execute('DELETE FROM students WHERE id = ?', (student_id,))
    
    if cursor.rowcount > 0:
        print("הסטודנט נמחק בהצלחה")
    else:
        print("סטודנט לא נמצא")
    
    conn.commit()
    conn.close()

# מחיקת סטודנט
delete_student(3)
\`\`\`

## שאילתות מתקדמות
\`\`\`python
def search_students_by_grade(min_grade):
    conn = sqlite3.connect('my_database.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        SELECT * FROM students 
        WHERE grade >= ?
        ORDER BY grade DESC
    ''', (min_grade,))
    
    students = cursor.fetchall()
    conn.close()
    return students

def get_average_grade():
    conn = sqlite3.connect('my_database.db')
    cursor = conn.cursor()
    
    cursor.execute('SELECT AVG(grade) FROM students')
    average = cursor.fetchone()[0]
    
    conn.close()
    return average

# שימוש
good_students = search_students_by_grade(85)
print("סטודנטים עם ציון מעל 85:")
for student in good_students:
    print(f"{student[1]}: {student[3]}")

avg = get_average_grade()
print(f"הממוצע הכללי: {avg:.2f}")
\`\`\`

## מחלקה לניהול מסד נתונים
\`\`\`python
import sqlite3

class StudentDatabase:
    def __init__(self, db_name='students.db'):
        self.db_name = db_name
        self.init_database()
    
    def init_database(self):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS students (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                age INTEGER,
                grade REAL,
                subject TEXT
            )
        ''')
        
        conn.commit()
        conn.close()
    
    def add_student(self, name, age, grade, subject):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        
        cursor.execute('''
            INSERT INTO students (name, age, grade, subject)
            VALUES (?, ?, ?, ?)
        ''', (name, age, grade, subject))
        
        conn.commit()
        conn.close()
        return cursor.lastrowid
    
    def get_student_by_id(self, student_id):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        
        cursor.execute('SELECT * FROM students WHERE id = ?', (student_id,))
        student = cursor.fetchone()
        
        conn.close()
        return student
    
    def get_students_by_subject(self, subject):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        
        cursor.execute('SELECT * FROM students WHERE subject = ?', (subject,))
        students = cursor.fetchall()
        
        conn.close()
        return students
    
    def update_student(self, student_id, **kwargs):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        
        set_clause = ', '.join([f"{key} = ?" for key in kwargs.keys()])
        values = list(kwargs.values()) + [student_id]
        
        cursor.execute(f'UPDATE students SET {set_clause} WHERE id = ?', values)
        
        conn.commit()
        conn.close()
        return cursor.rowcount > 0
    
    def delete_student(self, student_id):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        
        cursor.execute('DELETE FROM students WHERE id = ?', (student_id,))
        
        conn.commit()
        conn.close()
        return cursor.rowcount > 0
    
    def get_statistics(self):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT 
                COUNT(*) as total_students,
                AVG(grade) as average_grade,
                MAX(grade) as highest_grade,
                MIN(grade) as lowest_grade
            FROM students
        ''')
        
        stats = cursor.fetchone()
        conn.close()
        
        return {
            'total_students': stats[0],
            'average_grade': stats[1],
            'highest_grade': stats[2],
            'lowest_grade': stats[3]
        }

# שימוש במחלקה
db = StudentDatabase()

# הוספת סטודנטים
db.add_student("יוסי", 20, 85, "מתמטיקה")
db.add_student("שרה", 19, 92, "פיזיקה")
db.add_student("דני", 21, 78, "מתמטיקה")

# קבלת סטטיסטיקות
stats = db.get_statistics()
print(f"סך הכל סטודנטים: {stats['total_students']}")
print(f"ממוצע ציונים: {stats['average_grade']:.2f}")
\`\`\`

## עבודה עם מספר טבלאות
\`\`\`python
import sqlite3

def create_school_database():
    conn = sqlite3.connect('school.db')
    cursor = conn.cursor()
    
    # טבלת מורים
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS teachers (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            subject TEXT
        )
    ''')
    
    # טבלת כיתות
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY,
            student_id INTEGER,
            teacher_id INTEGER,
            grade REAL,
            FOREIGN KEY (student_id) REFERENCES students(id),
            FOREIGN KEY (teacher_id) REFERENCES teachers(id)
        )
    ''')
    
    conn.commit()
    conn.close()

def get_student_with_teachers():
    conn = sqlite3.connect('school.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        SELECT s.name, t.name, c.grade
        FROM students s
        JOIN classes c ON s.id = c.student_id
        JOIN teachers t ON c.teacher_id = t.id
    ''')
    
    results = cursor.fetchall()
    conn.close()
    return results

create_school_database()
\`\`\`
`,
    exercises: [
      "צור מסד נתונים לחנות עם טבלאות מוצרים ולקוחות",
      "כתב מחלקה לניהול ספרייה עם ספרים, מחברים ומשתמשים",
      "צור מערכת לניהול משימות עם סטטוס ותאריכים",
      "כתב תוכנית לניהול הוצאות אישיות עם קטגוריות",
      "צור מסד נתונים לחברת תחבורה עם רכבים ונהגים"
    ],
    solutions: [
      "import sqlite3\n\nclass StoreDatabase:\n    def __init__(self):\n        self.conn = sqlite3.connect('store.db')\n        self.create_tables()\n    \n    def create_tables(self):\n        cursor = self.conn.cursor()\n        \n        cursor.execute('''\n            CREATE TABLE IF NOT EXISTS products (\n                id INTEGER PRIMARY KEY,\n                name TEXT NOT NULL,\n                price REAL,\n                stock INTEGER\n            )\n        ''')\n        \n        cursor.execute('''\n            CREATE TABLE IF NOT EXISTS customers (\n                id INTEGER PRIMARY KEY,\n                name TEXT NOT NULL,\n                email TEXT\n            )\n        ''')\n        \n        self.conn.commit()\n    \n    def add_product(self, name, price, stock):\n        cursor = self.conn.cursor()\n        cursor.execute('INSERT INTO products (name, price, stock) VALUES (?, ?, ?)',\n                      (name, price, stock))\n        self.conn.commit()\n        return cursor.lastrowid\n\nstore = StoreDatabase()\nstore.add_product('מחשב נייד', 3500.0, 10)",
      "import sqlite3\n\nclass LibraryDatabase:\n    def __init__(self):\n        self.conn = sqlite3.connect('library.db')\n        self.create_tables()\n    \n    def create_tables(self):\n        cursor = self.conn.cursor()\n        \n        cursor.execute('''\n            CREATE TABLE IF NOT EXISTS books (\n                id INTEGER PRIMARY KEY,\n                title TEXT NOT NULL,\n                author TEXT,\n                isbn TEXT,\n                available BOOLEAN DEFAULT 1\n            )\n        ''')\n        \n        cursor.execute('''\n            CREATE TABLE IF NOT EXISTS borrowers (\n                id INTEGER PRIMARY KEY,\n                name TEXT NOT NULL,\n                book_id INTEGER,\n                borrow_date DATE,\n                FOREIGN KEY (book_id) REFERENCES books(id)\n            )\n        ''')\n        \n        self.conn.commit()\n    \n    def add_book(self, title, author, isbn):\n        cursor = self.conn.cursor()\n        cursor.execute('INSERT INTO books (title, author, isbn) VALUES (?, ?, ?)',\n                      (title, author, isbn))\n        self.conn.commit()\n\nlibrary = LibraryDatabase()\nlibrary.add_book('הארי פוטר', 'ג.ק. רולינג', '123456789')",
      "import sqlite3\nfrom datetime import datetime\n\nclass TaskManager:\n    def __init__(self):\n        self.conn = sqlite3.connect('tasks.db')\n        self.create_table()\n    \n    def create_table(self):\n        cursor = self.conn.cursor()\n        cursor.execute('''\n            CREATE TABLE IF NOT EXISTS tasks (\n                id INTEGER PRIMARY KEY,\n                title TEXT NOT NULL,\n                description TEXT,\n                status TEXT DEFAULT 'pending',\n                created_date TEXT,\n                due_date TEXT\n            )\n        ''')\n        self.conn.commit()\n    \n    def add_task(self, title, description='', due_date=None):\n        cursor = self.conn.cursor()\n        created_date = datetime.now().isoformat()\n        cursor.execute('''\n            INSERT INTO tasks (title, description, status, created_date, due_date)\n            VALUES (?, ?, ?, ?, ?)\n        ''', (title, description, 'pending', created_date, due_date))\n        self.conn.commit()\n        return cursor.lastrowid\n\ntasks = TaskManager()\ntasks.add_task('לסיים פרויקט', 'פרויקט פייתון', '2024-12-31')",
      "import sqlite3\n\nclass ExpenseTracker:\n    def __init__(self):\n        self.conn = sqlite3.connect('expenses.db')\n        self.create_tables()\n    \n    def create_tables(self):\n        cursor = self.conn.cursor()\n        \n        cursor.execute('''\n            CREATE TABLE IF NOT EXISTS categories (\n                id INTEGER PRIMARY KEY,\n                name TEXT NOT NULL\n            )\n        ''')\n        \n        cursor.execute('''\n            CREATE TABLE IF NOT EXISTS expenses (\n                id INTEGER PRIMARY KEY,\n                description TEXT NOT NULL,\n                amount REAL,\n                category_id INTEGER,\n                date TEXT,\n                FOREIGN KEY (category_id) REFERENCES categories(id)\n            )\n        ''')\n        \n        self.conn.commit()\n    \n    def add_expense(self, description, amount, category_id, date):\n        cursor = self.conn.cursor()\n        cursor.execute('''\n            INSERT INTO expenses (description, amount, category_id, date)\n            VALUES (?, ?, ?, ?)\n        ''', (description, amount, category_id, date))\n        self.conn.commit()\n\nexpenses = ExpenseTracker()\nexpenses.add_expense('קניות', 150.0, 1, '2024-01-15')",
      "import sqlite3\n\nclass TransportDatabase:\n    def __init__(self):\n        self.conn = sqlite3.connect('transport.db')\n        self.create_tables()\n    \n    def create_tables(self):\n        cursor = self.conn.cursor()\n        \n        cursor.execute('''\n            CREATE TABLE IF NOT EXISTS drivers (\n                id INTEGER PRIMARY KEY,\n                name TEXT NOT NULL,\n                license_number TEXT,\n                phone TEXT\n            )\n        ''')\n        \n        cursor.execute('''\n            CREATE TABLE IF NOT EXISTS vehicles (\n                id INTEGER PRIMARY KEY,\n                license_plate TEXT NOT NULL,\n                model TEXT,\n                year INTEGER,\n                driver_id INTEGER,\n                FOREIGN KEY (driver_id) REFERENCES drivers(id)\n            )\n        ''')\n        \n        self.conn.commit()\n    \n    def assign_vehicle(self, vehicle_id, driver_id):\n        cursor = self.conn.cursor()\n        cursor.execute('UPDATE vehicles SET driver_id = ? WHERE id = ?',\n                      (driver_id, vehicle_id))\n        self.conn.commit()\n        return cursor.rowcount > 0\n\ntransport = TransportDatabase()"
    ]
  },
  {
    id: 10,
    title: "פרויקט מעשי - מערכת ניהול משימות",
    description: "פרויקט מקיף המשלב את כל הנושאים שנלמדו",
    tutorial: `
# פרויקט מעשי - מערכת ניהול משימות

## תיאור הפרויקט
נבנה מערכת ניהול משימות מתקדמת המשלבת:
- מסד נתונים לאחסון נתונים
- ממשק משתמש בטרמינל
- ניהול משתמשים
- ייצוא דוחות
- הזמנות ותזכורות

## מבנה הפרויקט
\`\`\`
task_manager/
├── main.py              # הקובץ הראשי
├── database.py          # ניהול מסד נתונים
├── user_manager.py      # ניהול משתמשים
├── task_manager.py      # לוגיקה של משימות
├── report_generator.py  # יצירת דוחות
└── utils.py            # פונקציות עזר
\`\`\`

## database.py - ניהול מסד הנתונים
\`\`\`python
import sqlite3
from datetime import datetime

class Database:
    def __init__(self, db_name='task_manager.db'):
        self.db_name = db_name
        self.init_database()
    
    def init_database(self):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        
        # טבלת משתמשים
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                email TEXT,
                created_at TEXT
            )
        ''')
        
        # טבלת קטגוריות
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS categories (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                color TEXT,
                user_id INTEGER,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        ''')
        
        # טבלת משימות
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT,
                status TEXT DEFAULT 'pending',
                priority INTEGER DEFAULT 1,
                category_id INTEGER,
                user_id INTEGER,
                created_at TEXT,
                due_date TEXT,
                completed_at TEXT,
                FOREIGN KEY (category_id) REFERENCES categories(id),
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        ''')
        
        conn.commit()
        conn.close()
    
    def execute_query(self, query, params=None):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        
        if params:
            cursor.execute(query, params)
        else:
            cursor.execute(query)
        
        result = cursor.fetchall()
        conn.commit()
        conn.close()
        return result
    
    def execute_insert(self, query, params):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        cursor.execute(query, params)
        last_id = cursor.lastrowid
        conn.commit()
        conn.close()
        return last_id
\`\`\`

## user_manager.py - ניהול משתמשים
\`\`\`python
import hashlib
from datetime import datetime
from database import Database

class UserManager:
    def __init__(self):
        self.db = Database()
        self.current_user = None
    
    def hash_password(self, password):
        return hashlib.sha256(password.encode()).hexdigest()
    
    def register_user(self, username, password, email=''):
        hashed_password = self.hash_password(password)
        created_at = datetime.now().isoformat()
        
        try:
            user_id = self.db.execute_insert('''
                INSERT INTO users (username, password, email, created_at)
                VALUES (?, ?, ?, ?)
            ''', (username, hashed_password, email, created_at))
            
            return user_id
        except sqlite3.IntegrityError:
            return None
    
    def login(self, username, password):
        hashed_password = self.hash_password(password)
        
        result = self.db.execute_query('''
            SELECT id, username, email FROM users
            WHERE username = ? AND password = ?
        ''', (username, hashed_password))
        
        if result:
            self.current_user = {
                'id': result[0][0],
                'username': result[0][1],
                'email': result[0][2]
            }
            return True
        return False
    
    def logout(self):
        self.current_user = None
    
    def get_current_user(self):
        return self.current_user
\`\`\`

## task_manager.py - לוגיקה של משימות
\`\`\`python
from datetime import datetime, timedelta
from database import Database

class TaskManager:
    def __init__(self, user_manager):
        self.db = Database()
        self.user_manager = user_manager
    
    def add_task(self, title, description='', priority=1, category_id=None, due_date=None):
        if not self.user_manager.current_user:
            return None
        
        user_id = self.user_manager.current_user['id']
        created_at = datetime.now().isoformat()
        
        task_id = self.db.execute_insert('''
            INSERT INTO tasks (title, description, priority, category_id, user_id, created_at, due_date)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (title, description, priority, category_id, user_id, created_at, due_date))
        
        return task_id
    
    def get_tasks(self, status=None, category_id=None):
        if not self.user_manager.current_user:
            return []
        
        user_id = self.user_manager.current_user['id']
        query = '''
            SELECT t.id, t.title, t.description, t.status, t.priority, 
                   t.due_date, c.name as category_name
            FROM tasks t
            LEFT JOIN categories c ON t.category_id = c.id
            WHERE t.user_id = ?
        '''
        params = [user_id]
        
        if status:
            query += ' AND t.status = ?'
            params.append(status)
        
        if category_id:
            query += ' AND t.category_id = ?'
            params.append(category_id)
        
        query += ' ORDER BY t.priority DESC, t.due_date ASC'
        
        return self.db.execute_query(query, params)
    
    def update_task_status(self, task_id, status):
        completed_at = datetime.now().isoformat() if status == 'completed' else None
        
        self.db.execute_query('''
            UPDATE tasks 
            SET status = ?, completed_at = ?
            WHERE id = ? AND user_id = ?
        ''', (status, completed_at, task_id, self.user_manager.current_user['id']))
    
    def delete_task(self, task_id):
        self.db.execute_query('''
            DELETE FROM tasks 
            WHERE id = ? AND user_id = ?
        ''', (task_id, self.user_manager.current_user['id']))
    
    def get_overdue_tasks(self):
        if not self.user_manager.current_user:
            return []
        
        user_id = self.user_manager.current_user['id']
        today = datetime.now().date().isoformat()
        
        return self.db.execute_query('''
            SELECT id, title, due_date FROM tasks
            WHERE user_id = ? AND status != 'completed' AND due_date < ?
        ''', (user_id, today))
    
    def add_category(self, name, color='#000000'):
        if not self.user_manager.current_user:
            return None
        
        user_id = self.user_manager.current_user['id']
        
        return self.db.execute_insert('''
            INSERT INTO categories (name, color, user_id)
            VALUES (?, ?, ?)
        ''', (name, color, user_id))
    
    def get_categories(self):
        if not self.user_manager.current_user:
            return []
        
        user_id = self.user_manager.current_user['id']
        
        return self.db.execute_query('''
            SELECT id, name, color FROM categories
            WHERE user_id = ?
        ''', (user_id,))
\`\`\`

## report_generator.py - יצירת דוחות
\`\`\`python
import json
from datetime import datetime, timedelta
from database import Database

class ReportGenerator:
    def __init__(self, user_manager):
        self.db = Database()
        self.user_manager = user_manager
    
    def generate_summary_report(self):
        if not self.user_manager.current_user:
            return None
        
        user_id = self.user_manager.current_user['id']
        
        # סטטיסטיקות כלליות
        total_tasks = self.db.execute_query('''
            SELECT COUNT(*) FROM tasks WHERE user_id = ?
        ''', (user_id,))[0][0]
        
        completed_tasks = self.db.execute_query('''
            SELECT COUNT(*) FROM tasks WHERE user_id = ? AND status = 'completed'
        ''', (user_id,))[0][0]
        
        pending_tasks = self.db.execute_query('''
            SELECT COUNT(*) FROM tasks WHERE user_id = ? AND status = 'pending'
        ''', (user_id,))[0][0]
        
        overdue_tasks = self.db.execute_query('''
            SELECT COUNT(*) FROM tasks 
            WHERE user_id = ? AND status != 'completed' AND due_date < ?
        ''', (user_id, datetime.now().date().isoformat()))[0][0]
        
        # משימות לפי קטגוריה
        category_stats = self.db.execute_query('''
            SELECT c.name, COUNT(t.id) as task_count
            FROM categories c
            LEFT JOIN tasks t ON c.id = t.category_id
            WHERE c.user_id = ?
            GROUP BY c.id, c.name
        ''', (user_id,))
        
        report = {
            'generated_at': datetime.now().isoformat(),
            'user': self.user_manager.current_user['username'],
            'total_tasks': total_tasks,
            'completed_tasks': completed_tasks,
            'pending_tasks': pending_tasks,
            'overdue_tasks': overdue_tasks,
            'completion_rate': (completed_tasks / total_tasks * 100) if total_tasks > 0 else 0,
            'category_stats': category_stats
        }
        
        return report
    
    def export_report_to_json(self, filename=None):
        report = self.generate_summary_report()
        if not report:
            return False
        
        if not filename:
            filename = f"report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(report, f, ensure_ascii=False, indent=2)
            return filename
        except Exception as e:
            print(f"שגיאה בשמירת הדוח: {e}")
            return False
\`\`\`

## utils.py - פונקציות עזר
\`\`\`python
from datetime import datetime

def format_date(date_str):
    if not date_str:
        return "לא הוגדר"
    
    try:
        date_obj = datetime.fromisoformat(date_str)
        return date_obj.strftime('%d/%m/%Y')
    except:
        return date_str

def format_priority(priority):
    priority_map = {
        1: "נמוכה",
        2: "בינונית", 
        3: "גבוהה",
        4: "דחופה"
    }
    return priority_map.get(priority, "לא ידוע")

def format_status(status):
    status_map = {
        'pending': "בטיפול",
        'in_progress': "בביצוע",
        'completed': "הושלם",
        'cancelled': "בוטל"
    }
    return status_map.get(status, status)

def validate_date(date_str):
    try:
        datetime.fromisoformat(date_str)
        return True
    except:
        return False

def get_date_input(prompt):
    while True:
        date_str = input(prompt + " (פורמט: YYYY-MM-DD או Enter לדילוג): ").strip()
        if not date_str:
            return None
        if validate_date(date_str):
            return date_str
        print("פורמט תאריך לא תקין. השתמש ב-YYYY-MM-DD")
\`\`\`

## התוצאה הסופית
המערכת מאפשרת:
1. **ניהול משתמשים** - הרשמה והתחברות
2. **ניהול משימות** - הוספה, עדכון, מחיקה
3. **קטגוריות** - ארגון משימות לפי קטגוריות
4. **דוחות** - יצירת דוחות מפורטים
5. **ממשק משתמש** - ניווט נוח בטרמינל

הפרויקט מדגים שימוש מתקדם בכל הנושאים שנלמדו:
- מחלקות ואובייקטים
- מסדי נתונים ו-SQL
- טיפול בקבצים
- טיפול בשגיאות
- ניהול תאריכים
- ארגון קוד במודולים
`,
    exercises: [
      "השלם את הקובץ main.py עם ממשק משתמש מלא",
      "הוסף פונקציונליות של תזכורות עם תאריכי יעד",
      "צור מערכת גיבוי ושחזור של הנתונים",
      "הוסף אפשרות לשתף משימות בין משתמשים",
      "צור ממשק גרפי למערכת עם tkinter"
    ],
    solutions: [
      "# main.py\nfrom user_manager import UserManager\nfrom task_manager import TaskManager\nfrom report_generator import ReportGenerator\nfrom utils import *\n\nclass TaskManagerApp:\n    def __init__(self):\n        self.user_manager = UserManager()\n        self.task_manager = TaskManager(self.user_manager)\n        self.report_generator = ReportGenerator(self.user_manager)\n    \n    def run(self):\n        print('ברוכים הבאים למערכת ניהול המשימות!')\n        \n        while True:\n            if not self.user_manager.current_user:\n                self.show_login_menu()\n            else:\n                self.show_main_menu()\n    \n    def show_login_menu(self):\n        print('\\n1. התחברות')\n        print('2. הרשמה')\n        print('3. יציאה')\n        \n        choice = input('בחר אפשרות: ')\n        \n        if choice == '1':\n            self.login()\n        elif choice == '2':\n            self.register()\n        elif choice == '3':\n            exit()\n    \n    def show_main_menu(self):\n        user = self.user_manager.current_user\n        print(f'\\nשלום {user[\"username\"]}!')\n        print('1. הצגת משימות')\n        print('2. הוספת משימה')\n        print('3. עדכון משימה')\n        print('4. מחיקת משימה')\n        print('5. דוח סיכום')\n        print('6. התנתקות')\n        \n        choice = input('בחר אפשרות: ')\n        \n        if choice == '1':\n            self.show_tasks()\n        elif choice == '2':\n            self.add_task()\n        elif choice == '6':\n            self.user_manager.logout()\n\nif __name__ == '__main__':\n    app = TaskManagerApp()\n    app.run()",
      "# reminder_system.py\nfrom datetime import datetime, timedelta\nimport threading\nimport time\n\nclass ReminderSystem:\n    def __init__(self, task_manager):\n        self.task_manager = task_manager\n        self.running = False\n    \n    def start(self):\n        self.running = True\n        reminder_thread = threading.Thread(target=self.check_reminders)\n        reminder_thread.daemon = True\n        reminder_thread.start()\n    \n    def check_reminders(self):\n        while self.running:\n            overdue_tasks = self.task_manager.get_overdue_tasks()\n            if overdue_tasks:\n                print(f'\\n⚠️  יש לך {len(overdue_tasks)} משימות שפג תוקפן!')\n                for task in overdue_tasks:\n                    print(f'- {task[1]} (תאריך יעד: {task[2]})')\n            time.sleep(3600)  # בדיקה כל שעה\n    \n    def stop(self):\n        self.running = False",
      "# backup_system.py\nimport shutil\nimport os\nfrom datetime import datetime\n\nclass BackupSystem:\n    def __init__(self, db_path='task_manager.db'):\n        self.db_path = db_path\n        self.backup_dir = 'backups'\n        \n        if not os.path.exists(self.backup_dir):\n            os.makedirs(self.backup_dir)\n    \n    def create_backup(self):\n        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')\n        backup_filename = f'backup_{timestamp}.db'\n        backup_path = os.path.join(self.backup_dir, backup_filename)\n        \n        try:\n            shutil.copy2(self.db_path, backup_path)\n            print(f'גיבוי נוצר בהצלחה: {backup_filename}')\n            return backup_path\n        except Exception as e:\n            print(f'שגיאה ביצירת גיבוי: {e}')\n            return None\n    \n    def restore_backup(self, backup_filename):\n        backup_path = os.path.join(self.backup_dir, backup_filename)\n        \n        if os.path.exists(backup_path):\n            try:\n                shutil.copy2(backup_path, self.db_path)\n                print('הגיבוי שוחזר בהצלחה')\n                return True\n            except Exception as e:\n                print(f'שגיאה בשחזור גיבוי: {e}')\n                return False\n        else:\n            print('קובץ הגיבוי לא נמצא')\n            return False",
      "# sharing_system.py\nfrom database import Database\n\nclass SharingSystem:\n    def __init__(self, user_manager):\n        self.db = Database()\n        self.user_manager = user_manager\n        self.init_sharing_tables()\n    \n    def init_sharing_tables(self):\n        self.db.execute_query('''\n            CREATE TABLE IF NOT EXISTS shared_tasks (\n                id INTEGER PRIMARY KEY,\n                task_id INTEGER,\n                owner_id INTEGER,\n                shared_with_id INTEGER,\n                permission TEXT DEFAULT 'read',\n                shared_at TEXT,\n                FOREIGN KEY (task_id) REFERENCES tasks(id),\n                FOREIGN KEY (owner_id) REFERENCES users(id),\n                FOREIGN KEY (shared_with_id) REFERENCES users(id)\n            )\n        ''')\n    \n    def share_task(self, task_id, username, permission='read'):\n        # מצא את המשתמש\n        user_result = self.db.execute_query(\n            'SELECT id FROM users WHERE username = ?', (username,)\n        )\n        \n        if not user_result:\n            return False\n        \n        shared_with_id = user_result[0][0]\n        owner_id = self.user_manager.current_user['id']\n        \n        # שתף את המשימה\n        self.db.execute_query('''\n            INSERT INTO shared_tasks (task_id, owner_id, shared_with_id, permission, shared_at)\n            VALUES (?, ?, ?, ?, ?)\n        ''', (task_id, owner_id, shared_with_id, permission, datetime.now().isoformat()))\n        \n        return True",
      "# gui_interface.py\nimport tkinter as tk\nfrom tkinter import ttk, messagebox\nfrom task_manager import TaskManager\nfrom user_manager import UserManager\n\nclass TaskManagerGUI:\n    def __init__(self):\n        self.root = tk.Tk()\n        self.root.title('מערכת ניהול משימות')\n        self.root.geometry('800x600')\n        \n        self.user_manager = UserManager()\n        self.task_manager = TaskManager(self.user_manager)\n        \n        self.create_widgets()\n    \n    def create_widgets(self):\n        # כותרת\n        title_label = tk.Label(self.root, text='מערכת ניהול משימות', \n                              font=('Arial', 16, 'bold'))\n        title_label.pack(pady=10)\n        \n        # רשימת משימות\n        self.task_listbox = tk.Listbox(self.root, height=15)\n        self.task_listbox.pack(fill=tk.BOTH, expand=True, padx=10, pady=10)\n        \n        # כפתורים\n        button_frame = tk.Frame(self.root)\n        button_frame.pack(pady=10)\n        \n        add_button = tk.Button(button_frame, text='הוסף משימה', \n                              command=self.add_task_dialog)\n        add_button.pack(side=tk.LEFT, padx=5)\n        \n        complete_button = tk.Button(button_frame, text='סמן כהושלם', \n                                   command=self.complete_task)\n        complete_button.pack(side=tk.LEFT, padx=5)\n        \n        delete_button = tk.Button(button_frame, text='מחק משימה', \n                                 command=self.delete_task)\n        delete_button.pack(side=tk.LEFT, padx=5)\n        \n        self.refresh_tasks()\n    \n    def refresh_tasks(self):\n        self.task_listbox.delete(0, tk.END)\n        tasks = self.task_manager.get_tasks()\n        for task in tasks:\n            self.task_listbox.insert(tk.END, f'{task[1]} - {task[3]}')\n    \n    def run(self):\n        self.root.mainloop()\n\nif __name__ == '__main__':\n    gui = TaskManagerGUI()\n    gui.run()"
    ]
  }
];

function App() {
  const [currentLab, setCurrentLab] = useState(0);
  const [currentSection, setCurrentSection] = useState('overview');

  const renderContent = () => {
    if (currentSection === 'overview') {
      return (
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              10 מעבדות פייתון - מאפס עד מקצועי
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              מערכת לימוד מקיפה המלמדת פייתון מהיסודות ועד לפרויקטים מתקדמים. 
              כל מעבדה כוללת הדרכה מפורטת, תרגילים מעשיים ופתרונות מלאים.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labs.map((lab, index) => (
              <div
                key={lab.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border-r-4 border-blue-500"
                onClick={() => {
                  setCurrentLab(index);
                  setCurrentSection('tutorial');
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    מעבדה {lab.id}: {lab.title}
                  </h3>
                  <Play className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {lab.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    const lab = labs[currentLab];

    if (currentSection === 'tutorial') {
      return (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-600 ml-3" />
              <h2 className="text-2xl font-bold text-gray-800">
                הדרכה - מעבדה {lab.id}: {lab.title}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {lab.tutorial}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentSection === 'exercises') {
      return (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-green-600 ml-3" />
              <h2 className="text-2xl font-bold text-gray-800">
                תרגילים - מעבדה {lab.id}: {lab.title}
              </h2>
            </div>
            <div className="space-y-6">
              {lab.exercises.map((exercise, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    תרגיל {index + 1}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {exercise}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (currentSection === 'solutions') {
      return (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-orange-600 ml-3" />
              <h2 className="text-2xl font-bold text-gray-800">
                פתרונות - מעבדה {lab.id}: {lab.title}
              </h2>
            </div>
            <div className="space-y-6">
              {lab.solutions.map((solution, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    פתרון תרגיל {index + 1}
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                      {solution}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentSection('overview')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Home className="w-6 h-6" />
                <span className="font-semibold">מעבדות פייתון</span>
              </button>
            </div>
            
            {currentSection !== 'overview' && (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  מעבדה {labs[currentLab].id}: {labs[currentLab].title}
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Navigation */}
      {currentSection !== 'overview' && (
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {['tutorial', 'exercises', 'solutions'].map((section) => (
                <button
                  key={section}
                  onClick={() => setCurrentSection(section)}
                  className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                    currentSection === section
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {section === 'tutorial' && 'הדרכה'}
                  {section === 'exercises' && 'תרגילים'}
                  {section === 'solutions' && 'פתרונות'}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Lab Navigation */}
      {currentSection !== 'overview' && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center space-x-4">
            <button
              onClick={() => {
                if (currentLab > 0) {
                  setCurrentLab(currentLab - 1);
                }
              }}
              disabled={currentLab === 0}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <span className="text-sm font-medium text-gray-700">
              {currentLab + 1} / {labs.length}
            </span>
            
            <button
              onClick={() => {
                if (currentLab < labs.length - 1) {
                  setCurrentLab(currentLab + 1);
                }
              }}
              disabled={currentLab === labs.length - 1}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;