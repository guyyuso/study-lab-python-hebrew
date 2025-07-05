import React, { useState } from 'react';
import { BookOpen, Code, Play, HelpCircle, ChevronRight, ChevronDown, CheckCircle, Clock, Star, FileText, Shield, Package, TestTube, Database, Globe, Terminal } from 'lucide-react';

interface Lab {
  id: number;
  title: string;
  description: string;
  objectives: string[];
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  tasks: Task[];
  icon: React.ReactNode;
  color: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  code?: string;
  hint: string;
  solution?: string;
  points?: number;
}

const labs: Lab[] = [
  {
    id: 1,
    title: "יסודות Python: משתנים וסוגי נתונים",
    description: "הכרת יסודות Python ועבודה עם משתנים וסוגי נתונים בסיסיים",
    objectives: [
      "הבנת מושג המשתנים ב-Python",
      "למידת סוגי הנתונים הבסיסיים: int, float, str, bool, list, dict",
      "כתיבה והרצה של סקריפט Python ראשון",
      "שימוש בפונקציית print() להצגת מידע",
      "ביצוע פעולות בסיסיות על סוגי נתונים שונים"
    ],
    duration: "45 דקות",
    difficulty: "beginner",
    icon: <Code className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    tasks: [
      {
        id: "task1",
        title: "יצירת משתנים מסוגים שונים",
        description: "צור משתנים מסוגי נתונים שונים: מחרוזת (name), מספר שלם (age), מספר עשרוני (height), בוליאני (is_hungry), רשימה (skills), ומילון (profile)",
        points: 10,
        code: `# TODO: צור משתנה name עם השם שלך
# TODO: צור משתנה age עם הגיל שלך  
# TODO: צור משתנה height עם הגובה שלך
# TODO: צור משתנה is_hungry (True/False)
# TODO: צור רשימת skills עם לפחות 3 כישורים
# TODO: צור מילון profile שמכיל name, age, ו-skills`,
        hint: `💡 טיפ: ב-Python יוצרים משתנים פשוט על ידי השמה:
name = "השם שלך"
age = 25
height = 1.75
is_hungry = True
skills = ["Python", "JavaScript", "SQL"]
profile = {"name": name, "age": age, "skills": skills}`,
        solution: `name = "דוד כהן"
age = 30
height = 1.80
is_hungry = True
skills = ["Python", "JavaScript", "SQL", "Linux"]
profile = {
    "name": name,
    "age": age,
    "skills": skills
}`
      },
      {
        id: "task2", 
        title: "הדפסת המשתנים",
        description: "הדפס את כל המשתנים שיצרת עם תוויות תיאוריות",
        points: 5,
        code: `# TODO: הדפס את כל המשתנים עם תוויות מתאימות
# דוגמה: print("שם:", name)`,
        hint: `💡 השתמש בפונקציית print() עם תוויות:
print("שם:", name)
print("גיל:", age)
print("גובה:", height)
print("רעב:", is_hungry)
print("כישורים:", skills)
print("פרופיל:", profile)`,
        solution: `print("שם:", name)
print("גיל:", age) 
print("גובה:", height)
print("רעב:", is_hungry)
print("כישורים:", skills)
print("פרופיל:", profile)`
      },
      {
        id: "task3",
        title: "פעולות על המשתנים",
        description: "בצע פעולות בסיסיות: חשב את הגיל בעוד 5 שנים, ספור את מספר הכישורים, וגש לכישור הראשון ברשימה",
        points: 10,
        code: `# TODO: חשב ותדפיס את הגיל בעוד 5 שנים
# TODO: ספור ותדפיס את מספר הכישורים (השתמש ב-len())
# TODO: גש לכישור הראשון ברשימה והדפס אותו`,
        hint: `💡 פעולות בסיסיות:
- חיבור: age + 5
- אורך רשימה: len(skills)
- גישה לאלמנט ברשימה: skills[0] (אינדקס ראשון הוא 0)`,
        solution: `print("גיל בעוד 5 שנים:", age + 5)
print("מספר כישורים:", len(skills))
print("כישור ראשון:", skills[0])`
      }
    ]
  },
  {
    id: 2,
    title: "לולאות ותנאים ב-Python",
    description: "למידת מבני בקרה בסיסיים: תנאים ולולאות לטיפול בנתונים",
    objectives: [
      "שליטה בהצהרות if, elif, else לקבלת החלטות",
      "יצירה ושימוש בלולאות for לעבור על אוספים",
      "מימוש לולאות while לביצוע חוזר מבוסס תנאי",
      "שילוב לולאות עם לוגיקה תנאית",
      "עבודה עם לולאות מקוננות למבני נתונים דו-ממדיים"
    ],
    duration: "60 דקות",
    difficulty: "beginner",
    prerequisites: ["מעבדה 1 - יסודות Python"],
    icon: <Play className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-600",
    tasks: [
      {
        id: "task1",
        title: "הצהרות תנאי",
        description: "צור משתנה age וכתוב מבנה תנאי שמדפיס הודעות שונות לפי הגיל",
        points: 15,
        code: `# TODO: צור משתנה age
# TODO: כתוב תנאי שמדפיס:
# - אם הגיל 18 ומעלה: "אתה בוגר"
# - אם הגיל בין 13-17: "אתה נער" 
# - אחרת: "אתה ילד"`,
        hint: `💡 שימוש בתנאים:
age = 25
if age >= 18:
    print("אתה בוגר")
elif age >= 13:
    print("אתה נער")
else:
    print("אתה ילד")`,
        solution: `age = 25
if age >= 18:
    print("אתה בוגר")
elif age >= 13:
    print("אתה נער") 
else:
    print("אתה ילד")`
      },
      {
        id: "task2",
        title: "לולאת for על רשימה",
        description: "צור רשימת כישורים טכנולוגיים והשתמש בלולאת for לעבור עליה ולהדפיס כל כישור",
        points: 10,
        code: `# TODO: צור רשימת skills עם לפחות 3 כישורים טכנולוגיים
# TODO: השתמש בלולאת for לעבור על הרשימה
# TODO: הדפס כל כישור עם הודעה "לומד: [כישור]"`,
        hint: `💡 לולאת for בסיסית:
skills = ["Python", "JavaScript", "Docker"]
for skill in skills:
    print("לומד:", skill)`,
        solution: `skills = ["Python", "JavaScript", "Docker", "Linux"]
for skill in skills:
    print("לומד:", skill)`
      }
    ]
  },
  {
    id: 3,
    title: "פונקציות ומודולים ב-Python",
    description: "למידת יצירת פונקציות לשימוש חוזר וארגון קוד במודולים",
    objectives: [
      "יצירת פונקציות מותאמות אישית עם פרמטרים וערכי החזרה",
      "הבנת היקף משתנים ושיתוף קוד בין קבצים",
      "הוספת תיעוד נכון לפונקציות באמצעות docstrings",
      "פיצול קוד למספר קבצים לארגון טוב יותר",
      "ייבוא פונקציות ממודולים מותאמים אישית"
    ],
    duration: "75 דקות", 
    difficulty: "beginner",
    prerequisites: ["מעבדה 2 - לולאות ותנאים"],
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-purple-500 to-pink-600",
    tasks: [
      {
        id: "task1",
        title: "יצירת פונקציית ברכה",
        description: "צור פונקציה שמקבלת שם ומחזירה הודעת ברכה",
        points: 15,
        code: `# TODO: צור פונקציה בשם greet שמקבלת פרמטר name
# TODO: הפונקציה תחזיר מחרוזת ברכה כמו "שלום, [שם]!"
# TODO: הוסף docstring שמסביר מה הפונקציה עושה
# TODO: קרא לפונקציה והדפס את התוצאה`,
        hint: `💡 הגדרת פונקציה עם docstring:
def greet(name):
    """
    יוצרת הודעת ברכה עם השם הנתון.
    
    Args:
        name (str): השם לברכה
        
    Returns:
        str: הודעת ברכה
    """
    return f"שלום, {name}!"`,
        solution: `def greet(name):
    """
    יוצרת הודעת ברכה עם השם הנתון.
    
    Args:
        name (str): השם לברכה
        
    Returns:
        str: הודעת ברכה
    """
    return f"שלום, {name}!"

# שימוש בפונקציה
result = greet("דוד כהן")
print(result)`
      }
    ]
  },
  {
    id: 4,
    title: "עבודה עם קבצים ב-Python",
    description: "קריאה, כתיבה ועיבוד קבצים - כישור בסיסי לכל מתכנת",
    objectives: [
      "פתיחה, קריאה ועיבוד קבצי טקסט בטכניקות שונות",
      "יצירת קבצים חדשים וכתיבת נתונים אליהם",
      "הוספת תוכן לקבצים קיימים",
      "שימוש בבלוקי with לניהול בטוח של משאבי קבצים",
      "טיפול בשגיאות נפוצות בקבצים עם try-except",
      "עיבוד קבצים שורה אחר שורה לשימוש יעיל בזיכרון"
    ],
    duration: "60 דקות",
    difficulty: "beginner", 
    prerequisites: ["מעבדה 3 - פונקציות ומודולים"],
    icon: <FileText className="w-8 h-8" />,
    color: "from-orange-500 to-red-600",
    tasks: [
      {
        id: "task1",
        title: "קריאת קובץ טקסט",
        description: "קרא קובץ קיים והדפס את התוכן שלו עם כותרת תיאורית",
        points: 10,
        code: `# TODO: השתמש בבלוק with לפתוח קובץ בשם 'input.txt' במצב קריאה
# TODO: קרא את כל התוכן של הקובץ
# TODO: הדפס את התוכן עם כותרת תיאורית`,
        hint: `💡 קריאת קובץ עם with:
with open("input.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print("תוכן הקובץ:")
    print(content)`,
        solution: `print("=== קריאת קובץ input.txt ===")
try:
    with open("input.txt", "r", encoding="utf-8") as file:
        content = file.read()
        print("תוכן הקובץ:")
        print(content)
except FileNotFoundError:
    print("שגיאה: הקובץ input.txt לא נמצא")`
      },
      {
        id: "task2",
        title: "כתיבת קובץ חדש",
        description: "צור קובץ חדש וכתוב אליו מספר שורות טקסט",
        points: 10,
        code: `# TODO: השתמש בבלוק with לפתוח קובץ 'output.txt' במצב כתיבה ('w')
# TODO: כתוב מספר שורות של טקסט לקובץ
# TODO: זכור שזה יוצר קובץ חדש או מחליף קובץ קיים`,
        hint: `💡 כתיבה לקובץ:
with open("output.txt", "w", encoding="utf-8") as file:
    file.write("זוהי השורה הראשונה\\n")
    file.write("זוהי השורה השנייה\\n")
    file.write("זוהי השורה השלישית\\n")`,
        solution: `print("=== כתיבה לקובץ output.txt ===")
with open("output.txt", "w", encoding="utf-8") as file:
    file.write("ברוכים הבאים למעבדת Python!\\n")
    file.write("קובץ זה נוצר באמצעות סקריפט Python.\\n")
    file.write("למידת עבודה עם קבצים היא כישור חשוב.\\n")
print("הקובץ נוצר בהצלחה!")`
      },
      {
        id: "task3",
        title: "הוספה לקובץ קיים",
        description: "הוסף תוכן לקובץ קיים מבלי למחוק את התוכן הנוכחי",
        points: 10,
        code: `# TODO: השתמש בבלוק with לפתוח 'output.txt' במצב הוספה ('a')
# TODO: הוסף שורות נוספות לקובץ
# TODO: ודא שהתוכן הקודם נשמר`,
        hint: `💡 הוספה לקובץ:
with open("output.txt", "a", encoding="utf-8") as file:
    file.write("\\nשורה נוספת שנוספה בהוספה\\n")
    file.write("גם שורה זו נוספה\\n")`,
        solution: `print("=== הוספה לקובץ output.txt ===")
with open("output.txt", "a", encoding="utf-8") as file:
    file.write("\\n--- תוכן נוסף ---\\n")
    file.write("שורה זו נוספה במצב הוספה\\n")
    file.write("התוכן הקודם נשמר\\n")
print("תוכן נוסף נוסף לקובץ!")`
      },
      {
        id: "task4",
        title: "טיפול בשגיאות קבצים",
        description: "מימוש טיפול בשגיאות עבור פעולות קבצים",
        points: 15,
        code: `# TODO: השתמש בבלוק try-except לטפל ב-FileNotFoundError
# TODO: נסה לפתוח קובץ שלא קיים
# TODO: הדפס הודעת שגיאה ידידותית למשתמש`,
        hint: `💡 טיפול בשגיאות קבצים:
try:
    with open("missing_file.txt", "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("שגיאה: הקובץ לא נמצא")
except PermissionError:
    print("שגיאה: אין הרשאה לגשת לקובץ")`,
        solution: `print("=== טיפול בשגיאות קבצים ===")
try:
    with open("missing_file.txt", "r", encoding="utf-8") as file:
        content = file.read()
        print("תוכן הקובץ:", content)
except FileNotFoundError:
    print("❌ שגיאה: הקובץ 'missing_file.txt' לא נמצא")
    print("💡 טיפ: ודא שהקובץ קיים בתיקייה הנוכחית")
except PermissionError:
    print("❌ שגיאה: אין הרשאה לגשת לקובץ")
except Exception as e:
    print(f"❌ שגיאה לא צפויה: {str(e)}")`
      }
    ]
  },
  {
    id: 5,
    title: "טיפול בשגיאות ולוגים ב-Python",
    description: "יצירת קוד עמיד ואמין עם טיפול בשגיאות ומערכת לוגים",
    objectives: [
      "שליטה במנגנון החריגים של Python עם try, except, else, finally",
      "יצירה והעלאה של חריגים מותאמים אישית למקרים ספציפיים",
      "הגדרה ושימוש במודול logging המובנה של Python",
      "הבנה ויישום רמות לוגים שונות (DEBUG, INFO, WARNING, ERROR, CRITICAL)",
      "מימוש רישום לוגים לקובץ עם פורמט מובנה",
      "למידת שיטות עבודה טובות לניהול שגיאות בקוד ייצור"
    ],
    duration: "90 דקות",
    difficulty: "intermediate",
    prerequisites: ["מעבדה 4 - עבודה עם קבצים"],
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-rose-600",
    tasks: [
      {
        id: "task1",
        title: "הגדרת מערכת לוגים בסיסית",
        description: "הגדר מערכת לוגים שכותבת לקובץ עם פורמט ורמה מתאימה",
        points: 15,
        code: `# TODO: ייבא את מודול logging
# TODO: הגדר לוגים לכתיבה לקובץ "app.log" עם רמת INFO
# TODO: הגדר פורמט שכולל זמן, רמת לוג והודעה
# TODO: כתוב הודעת INFO שהתוכנית התחילה`,
        hint: `💡 הגדרת לוגים בסיסית:
import logging

logging.basicConfig(
    filename="app.log",
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

logging.info("התוכנית התחילה")`,
        solution: `import logging

# הגדרת מערכת לוגים
logging.basicConfig(
    filename="app.log",
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    encoding='utf-8'
)

# כתיבת הודעת התחלה
logging.info("התוכנית התחילה")
print("✅ מערכת הלוגים הוגדרה - בדוק את הקובץ app.log")`
      },
      {
        id: "task2",
        title: "טיפול בחריגי חלוקה",
        description: "צור בלוק try-except-finally שמטפל בחלוקה באפס ובקלט לא תקין",
        points: 20,
        code: `# TODO: בקש מהמשתמש להזין מספר עם input()
# TODO: נסה לחלק 100 במספר שהוזן
# TODO: טפל ב-ZeroDivisionError וב-ValueError
# TODO: רשום שגיאות ללוג
# TODO: השתמש בבלוק finally להדפיס סיום הפעולה`,
        hint: `💡 טיפול בחריגי חלוקה:
try:
    num = int(input("הזן מספר: "))
    result = 100 / num
    print(f"התוצאה: {result}")
    logging.info(f"חלוקה הצליחה: 100 / {num} = {result}")
except ZeroDivisionError:
    print("❌ שגיאה: לא ניתן לחלק באפס")
    logging.error("ניסיון חלוקה באפס")
except ValueError:
    print("❌ שגיאה: יש להזין מספר תקין")
    logging.error("הוזן קלט לא תקין")
finally:
    print("פעולת החלוקה הושלמה")`,
        solution: `print("=== טיפול בחריגי חלוקה ===")
try:
    user_input = input("הזן מספר לחלוקת 100 בו: ")
    num = int(user_input)
    result = 100 / num
    print(f"✅ התוצאה: 100 ÷ {num} = {result}")
    logging.info(f"חלוקה הצליחה: 100 / {num} = {result}")
except ZeroDivisionError:
    error_msg = "❌ שגיאה: לא ניתן לחלק באפס"
    print(error_msg)
    logging.error("ניסיון חלוקה באפס")
except ValueError as e:
    error_msg = "❌ שגיאה: יש להזין מספר שלם תקין"
    print(error_msg)
    logging.error(f"הוזן קלט לא תקין: {user_input}")
finally:
    print("🔚 פעולת החלוקה הושלמה")
    logging.info("פעולת החלוקה הסתיימה")`
      },
      {
        id: "task3",
        title: "יצירת חריג מותאם אישית",
        description: "צור חריג מותאם אישית לאימות ערכים ותשתמש בו",
        points: 25,
        code: `# TODO: צור מחלקת חריג בשם InvalidAgeError שיורשת מ-Exception
# TODO: צור פונקציה validate_age שבודקת שהגיל תקין (18-120)
# TODO: הפונקציה תעלה את החריג המותאם אם הגיל לא תקין
# TODO: השתמש בפונקציה עם try-except ורשום ללוג`,
        hint: `💡 חריג מותאם אישית:
class InvalidAgeError(Exception):
    \"\"\"חריג מותאם לגילאים לא תקינים\"\"\"
    pass

def validate_age(age):
    if not isinstance(age, int):
        raise TypeError("הגיל חייב להיות מספר שלם")
    if age < 18 or age > 120:
        raise InvalidAgeError(f"גיל לא תקין: {age}. הגיל חייב להיות בין 18 ל-120")
    return True

try:
    validate_age(25)
    print("הגיל תקין")
except InvalidAgeError as e:
    print(f"שגיאת אימות: {e}")`,
        solution: `print("=== חריג מותאם אישית ===")

class InvalidAgeError(Exception):
    \"\"\"חריג מותאם לטיפול בגילאים לא תקינים\"\"\"
    pass

def validate_age(age):
    \"\"\"
    מאמת שהגיל תקין למבוגרים עובדים.
    
    Args:
        age (int): הגיל לאימות
        
    Returns:
        bool: True אם הגיל תקין
        
    Raises:
        TypeError: אם הגיל לא מספר שלם
        InvalidAgeError: אם הגיל מחוץ לטווח התקין
    \"\"\"
    if not isinstance(age, int):
        raise TypeError("הגיל חייב להיות מספר שלם")
    if age < 18:
        raise InvalidAgeError(f"גיל {age} נמוך מדי. הגיל המינימלי הוא 18")
    if age > 120:
        raise InvalidAgeError(f"גיל {age} גבוה מדי. הגיל המקסימלי הוא 120")
    return True

# בדיקות שונות
test_ages = [25, 15, 130, "עשרים", 45]

for test_age in test_ages:
    try:
        print(f"\\nבודק גיל: {test_age}")
        validate_age(test_age)
        print(f"✅ גיל {test_age} תקין")
        logging.info(f"אימות גיל הצליח: {test_age}")
    except InvalidAgeError as e:
        print(f"❌ שגיאת גיל: {e}")
        logging.error(f"גיל לא תקין: {test_age} - {e}")
    except TypeError as e:
        print(f"❌ שגיאת סוג: {e}")
        logging.error(f"סוג נתונים שגוי עבור גיל: {test_age} - {e}")`
      }
    ]
  },
  {
    id: 6,
    title: "תכנות מונחה עצמים (OOP) ב-Python",
    description: "למידת עקרונות התכנות המונחה עצמים ליצירת קוד מודולרי ורב-פעמי",
    objectives: [
      "הבנת עקרונות הליבה של תכנות מונחה עצמים",
      "יצירת מחלקות מותאמות אישית עם תכונות ומתודות",
      "יצירת אובייקטים ושימוש בפונקציונליות שלהם",
      "מימוש ירושה להרחבת פונקציונליות",
      "יישום עקרונות הכמסה עם properties ותכונות מוגנות",
      "שימוש בפולימורפיזם לכתיבת קוד גמיש"
    ],
    duration: "100 דקות",
    difficulty: "intermediate",
    prerequisites: ["מעבדה 5 - טיפול בשגיאות ולוגים"],
    icon: <Package className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    tasks: [
      {
        id: "task1",
        title: "יצירת מחלקת Server בסיסית",
        description: "צור מחלקה שמייצגת שרת עם תכונות ומתודות בסיסיות",
        points: 20,
        code: `# TODO: צור מחלקה בשם Server
# TODO: הוסף מתודת __init__ שמקבלת name ו-ip ושומרת אותם כתכונות
# TODO: הוסף מתודת ping שמדפיסה הודעה על פינג לשרת
# TODO: צור אובייקט של השרת וקרא למתודת ping`,
        hint: `💡 מחלקה בסיסית:
class Server:
    def __init__(self, name, ip):
        self.name = name
        self.ip = ip
    
    def ping(self):
        print(f"מבצע ping לשרת {self.name} בכתובת {self.ip}")

# שימוש
web_server = Server("web01", "192.168.1.10")
web_server.ping()`,
        solution: `print("=== מחלקת Server בסיסית ===")

class Server:
    \"\"\"מחלקה המייצגת שרת במערכת\"\"\"
    
    def __init__(self, name, ip):
        \"\"\"
        יוצר אובייקט שרת חדש.
        
        Args:
            name (str): שם השרת
            ip (str): כתובת IP של השרת
        \"\"\"
        self.name = name
        self.ip = ip
        self.status = "offline"  # סטטוס ברירת מחדל
    
    def ping(self):
        \"\"\"מבצע פינג לשרת ומדפיס הודעה\"\"\"
        print(f"🔍 מבצע ping לשרת {self.name} בכתובת {self.ip}...")
        print(f"✅ השרת {self.name} זמין")
        return True
    
    def start(self):
        \"\"\"מפעיל את השרת\"\"\"
        self.status = "online"
        print(f"🚀 השרת {self.name} הופעל בהצלחה")
    
    def stop(self):
        \"\"\"עוצר את השרת\"\"\"
        self.status = "offline"
        print(f"🛑 השרת {self.name} נעצר")

# יצירת אובייקטי שרת
web_server = Server("web01", "192.168.1.10")
db_server = Server("db01", "192.168.1.11")

# שימוש במתודות
web_server.ping()
web_server.start()
print(f"סטטוס השרת: {web_server.status}")

db_server.ping()
db_server.start()`
      },
      {
        id: "task2",
        title: "מחלקת DatabaseServer עם ירושה",
        description: "צור מחלקה שיורשת מ-Server עם פונקציונליות מיוחדת למסדי נתונים",
        points: 25,
        code: `# TODO: צור מחלקת DatabaseServer שיורשת מ-Server
# TODO: הוסף פרמטר engine ב-__init__ וקרא ל-super()
# TODO: הוסף מתודת backup שמדפיסה הודעה על גיבוי המסד
# TODO: צור אובייקט DatabaseServer ובדוק את הירושה`,
        hint: `💡 ירושה ב-Python:
class DatabaseServer(Server):
    def __init__(self, name, ip, engine):
        super().__init__(name, ip)  # קריאה לקונסטרקטור של המחלקה האב
        self.engine = engine
    
    def backup(self):
        print(f"מבצע גיבוי למסד הנתונים {self.engine} בשרת {self.name}")

# שימוש
db_server = DatabaseServer("db01", "192.168.1.11", "PostgreSQL")
db_server.ping()  # מתודה שירושה מ-Server
db_server.backup()  # מתודה ייחודית`,
        solution: `print("\\n=== מחלקת DatabaseServer עם ירושה ===")

class DatabaseServer(Server):
    \"\"\"מחלקה המייצגת שרת מסד נתונים, יורשת מ-Server\"\"\"
    
    def __init__(self, name, ip, engine):
        \"\"\"
        יוצר אובייקט שרת מסד נתונים חדש.
        
        Args:
            name (str): שם השרת
            ip (str): כתובת IP של השרת
            engine (str): סוג מסד הנתונים (MySQL, PostgreSQL, etc.)
        \"\"\"
        super().__init__(name, ip)  # קריאה לקונסטרקטור של המחלקה האב
        self.engine = engine
        self.last_backup = None
    
    def backup(self):
        \"\"\"מבצע גיבוי למסד הנתונים\"\"\"
        from datetime import datetime
        self.last_backup = datetime.now()
        print(f"💾 מבצע גיבוי למסד הנתונים {self.engine} בשרת {self.name}")
        print(f"✅ הגיבוי הושלם בזמן: {self.last_backup.strftime('%H:%M:%S')}")
    
    def ping(self):
        \"\"\"מתודה מעוצבת מחדש לשרתי מסד נתונים\"\"\"
        print(f"🔍 בודק חיבור לשרת מסד הנתונים {self.name} ({self.engine}) בכתובת {self.ip}...")
        print(f"✅ שרת מסד הנתונים {self.name} זמין ופעיל")
        return True

# יצירת שרת מסד נתונים
db_server = DatabaseServer("db01", "192.168.1.11", "PostgreSQL")

# בדיקת ירושה - מתודות מהמחלקה האב
db_server.start()  # מתודה מ-Server
print(f"סטטוס השרת: {db_server.status}")

# מתודות ייחודיות למסד נתונים
db_server.ping()   # מתודה מעוצבת מחדש
db_server.backup() # מתודה ייחודית

# הצגת מידע על השרת
print(f"\\n📊 פרטי השרת:")
print(f"שם: {db_server.name}")
print(f"IP: {db_server.ip}")
print(f"מנוע מסד נתונים: {db_server.engine}")
print(f"סטטוס: {db_server.status}")`
      },
      {
        id: "task3",
        title: "Properties ותכונות מתקדמות",
        description: "הוסף properties למחלקת Server לבקרת גישה לתכונות",
        points: 30,
        code: `# TODO: הוסף property status עם getter ו-setter
# TODO: ה-setter יאמת שהסטטוס הוא "online", "offline" או "maintenance"
# TODO: הוסף משתנה מחלקה total_servers שסופר את מספר השרתים
# TODO: הוסף static method לאימות כתובת IP`,
        hint: `💡 Properties ומתודות סטטיות:
class Server:
    total_servers = 0  # משתנה מחלקה
    
    def __init__(self, name, ip):
        self.name = name
        self.ip = ip
        self._status = "offline"  # תכונה מוגנת
        Server.total_servers += 1
    
    @property
    def status(self):
        return self._status
    
    @status.setter  
    def status(self, value):
        if value in ["online", "offline", "maintenance"]:
            self._status = value
        else:
            raise ValueError("סטטוס לא תקין")
    
    @staticmethod
    def validate_ip(ip):
        parts = ip.split('.')
        return len(parts) == 4 and all(0 <= int(p) <= 255 for p in parts)`,
        solution: `print("\\n=== Properties ותכונות מתקדמות ===")

class AdvancedServer:
    \"\"\"מחלקת שרת מתקדמת עם properties ומתודות סטטיות\"\"\"
    
    # משתנה מחלקה לספירת שרתים
    total_servers = 0
    
    def __init__(self, name, ip):
        \"\"\"יוצר שרת חדש עם אימות כתובת IP\"\"\"
        if not self.validate_ip(ip):
            raise ValueError(f"כתובת IP לא תקינה: {ip}")
        
        self.name = name
        self.ip = ip
        self._status = "offline"  # תכונה מוגנת
        AdvancedServer.total_servers += 1
        print(f"✅ נוצר שרת {name} - סה\\"כ שרתים: {AdvancedServer.total_servers}")
    
    @property
    def status(self):
        \"\"\"Getter עבור סטטוס השרת\"\"\"
        return self._status
    
    @status.setter
    def status(self, new_status):
        \"\"\"Setter עם אימות עבור סטטוס השרת\"\"\"
        valid_statuses = ["online", "offline", "maintenance"]
        if new_status in valid_statuses:
            old_status = self._status
            self._status = new_status
            print(f"🔄 סטטוס השרת {self.name} השתנה מ-{old_status} ל-{new_status}")
        else:
            raise ValueError(f"סטטוס לא תקין: {new_status}. אפשרויות: {valid_statuses}")
    
    @staticmethod
    def validate_ip(ip):
        \"\"\"מאמת שכתובת IP תקינה (format basic)\"\"\"
        try:
            parts = ip.split('.')
            if len(parts) != 4:
                return False
            return all(0 <= int(part) <= 255 for part in parts)
        except ValueError:
            return False
    
    @classmethod
    def get_server_count(cls):
        \"\"\"מחזיר את מספר השרתים הכולל\"\"\"
        return cls.total_servers
    
    def __str__(self):
        \"\"\"ייצוג מחרוזת של השרת\"\"\"
        return f"Server(name='{self.name}', ip='{self.ip}', status='{self.status}')"

# בדיקות ותדגומים
print("\\n🧪 בדיקת אימות IP:")
valid_ips = ["192.168.1.1", "10.0.0.1"]
invalid_ips = ["256.1.1.1", "192.168.1", "not.an.ip"]

for ip in valid_ips + invalid_ips:
    is_valid = AdvancedServer.validate_ip(ip)
    status = "✅ תקינה" if is_valid else "❌ לא תקינה"
    print(f"  {ip}: {status}")

print("\\n🏗️ יצירת שרתים:")
try:
    server1 = AdvancedServer("web01", "192.168.1.10")
    server2 = AdvancedServer("db01", "192.168.1.11")
    
    print(f"\\n📊 סה\\"כ שרתים: {AdvancedServer.get_server_count()}")
    
    print("\\n🔧 שינוי סטטוס:")
    server1.status = "online"
    server1.status = "maintenance"
    
    print(f"\\n📋 פרטי השרת: {server1}")
    
    # בדיקת סטטוס לא תקין
    print("\\n❌ ניסיון סטטוס לא תקין:")
    try:
        server1.status = "crashed"
    except ValueError as e:
        print(f"שגיאה: {e}")
        
except ValueError as e:
    print(f"שגיאה ביצירת שרת: {e}")`
      }
    ]
  },
  {
    id: 7,
    title: "סביבות וירטואליות ואריזת Python",
    description: "ניהול תלויות ויצירת חבילות Python לשיתוף בין פרויקטים וצוותים",
    objectives: [
      "יצירה וניהול סביבות וירטואליות של Python עם venv",
      "התקנה, ניהול ותיעוד תלויות עם pip",
      "מבנה קוד כחבילות Python לשימוש חוזר",
      "הבנת ייבוא מודולים והיררכיות חבילות",
      "יצירה ושימוש בקבצי requirements.txt לניהול תלויות",
      "יצירת חבילה פשוטה שניתן להפיץ לצוות"
    ],
    duration: "85 דקות",
    difficulty: "intermediate",
    prerequisites: ["מעבדה 6 - תכנות מונחה עצמים"],
    icon: <Package className="w-8 h-8" />,
    color: "from-teal-500 to-cyan-600",
    tasks: [
      {
        id: "task1",
        title: "יצירת סביבה וירטואלית",
        description: "צור סביבה וירטואלית והתקן בה חבילה חיצונית",
        points: 15,
        code: `# TODO: צור סביבה וירטואלית בשם .venv
# TODO: הפעל את הסביבה הוירטואלית  
# TODO: התקן את החבילה requests
# TODO: יצא את רשימת החבילות לקובץ requirements.txt`,
        hint: `💡 פקודות סביבה וירטואלית:
# יצירה:
python -m venv .venv

# הפעלה (Windows):
.venv\\Scripts\\activate

# הפעלה (Linux/Mac):
source .venv/bin/activate

# התקנה:
pip install requests

# יצוא תלויות:
pip freeze > requirements.txt`,
        solution: `# קובץ הוראות ליצירת סביבה וירטואלית
print("=== הוראות סביבה וירטואלית ===")
print(\"\"\"
🔧 שלבים ליצירת סביבה וירטואלית:

1️⃣ יצירת סביבה וירטואלית:
   python -m venv .venv

2️⃣ הפעלת הסביבה:
   Windows: .venv\\\\Scripts\\\\activate
   Linux/Mac: source .venv/bin/activate

3️⃣ התקנת חבילות:
   pip install requests
   pip install pyyaml

4️⃣ יצוא תלויות:
   pip freeze > requirements.txt

5️⃣ התקנה מקובץ תלויות:
   pip install -r requirements.txt

6️⃣ יציאה מהסביבה:
   deactivate
\"\"\")`
      },
      {
        id: "task2",
        title: "יצירת חבילה מותאמת אישית",
        description: "צור חבילת myproject עם מודול core ופונקציות שימושיות",
        points: 25,
        code: `# TODO: צור תיקייה myproject עם קובץ __init__.py
# TODO: צור מודול core.py עם פונקציות greet ו-calculate_square
# TODO: הוסף docstrings מתאימים לכל פונקציה
# TODO: חשוף את הפונקציות ב-__init__.py`,
        hint: `💡 מבנה חבילה:
myproject/
    __init__.py     # קובץ חבילה
    core.py         # מודול עם פונקציות

# בקובץ core.py:
def greet(name):
    \"\"\"מחזירה ברכה\"\"\"
    return f"שלום, {name}!"

# בקובץ __init__.py:
from .core import greet`,
        solution: `# קובץ myproject/__init__.py
\"\"\"
חבילת MyProject - כלים שימושיים למתחילים

חבילה זו מספקת פונקציות בסיסיות להדגמת מבנה חבילות Python.
\"\"\"

from .core import greet, calculate_square, get_timestamp

__version__ = '1.0.0'
__author__ = 'סטודנט Python'

# קובץ myproject/core.py
\"\"\"
מודול ליבה לחבילת myproject

מודול זה מכיל פונקציות שימושיות בסיסיות להדגמת עבודה עם חבילות.
\"\"\"

def greet(name):
    \"\"\"
    יוצרת הודעת ברכה מותאמת אישית.
    
    Args:
        name (str): השם לברכה
        
    Returns:
        str: הודעת ברכה
        
    Example:
        >>> greet("דוד")
        'שלום, דוד! איך אתה היום?'
    \"\"\"
    return f"שלום, {name}! איך אתה היום?"

def calculate_square(number):
    \"\"\"
    מחשבת את הריבוע של מספר.
    
    Args:
        number (int/float): המספר לריבוע
        
    Returns:
        int/float: הריבוע של המספר
        
    Example:
        >>> calculate_square(5)
        25
    \"\"\"
    return number ** 2

def get_timestamp():
    \"\"\"
    מחזירה את הזמן הנוכחי בפורמט קריא.
    
    Returns:
        str: זמן נוכחי בפורמט ISO
    \"\"\"
    from datetime import datetime
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# דוגמה לקובץ main.py שמשתמש בחבילה
print("=== שימוש בחבילה מותאמת אישית ===")

# ייבוא הפונקציות מהחבילה
try:
    from myproject import greet, calculate_square, get_timestamp
    
    # שימוש בפונקציות
    print("\\n🎉 בדיקת פונקציות החבילה:")
    
    # פונקציית ברכה
    message = greet("מפתח Python")
    print(f"ברכה: {message}")
    
    # חישוב ריבוע
    number = 7
    square = calculate_square(number)
    print(f"הריבוע של {number} הוא: {square}")
    
    # זמן נוכחי
    current_time = get_timestamp()
    print(f"זמן נוכחי: {current_time}")
    
    print("\\n✅ החבילה עובדת בהצלחה!")
    
except ImportError as e:
    print(f"❌ שגיאה בייבוא החבילה: {e}")
    print("💡 ודא שיצרת את התיקייה myproject עם הקבצים הנדרשים")`
      },
      {
        id: "task3",
        title: "שימוש בחבילה חיצונית",
        description: "השתמש בחבילה requests לביצוע קריאת HTTP וטיפול בתגובה",
        points: 20,
        code: `# TODO: ייבא את חבילת requests
# TODO: בצע GET request ל-https://api.github.com
# TODO: הדפס את קוד הסטטוס של התגובה
# TODO: הדפס מידע בסיסי על ה-API של GitHub`,
        hint: `💡 שימוש בחבילת requests:
import requests

response = requests.get("https://api.github.com")
print(f"סטטוס: {response.status_code}")

if response.status_code == 200:
    data = response.json()
    print("התגובה התקבלה בהצלחה")`,
        solution: `print("=== שימוש בחבילה חיצונית (requests) ===")

try:
    import requests
    print("✅ חבילת requests נטענה בהצלחה")
    
    print("\\n🌐 ביצוע קריאה ל-API של GitHub...")
    
    # ביצוע קריאת HTTP
    url = "https://api.github.com"
    response = requests.get(url, timeout=10)
    
    print(f"📡 URL: {url}")
    print(f"📊 קוד סטטוס: {response.status_code}")
    print(f"⏱️ זמן תגובה: {response.elapsed.total_seconds():.2f} שניות")
    
    if response.status_code == 200:
        print("✅ הקריאה הצליחה!")
        
        # ניתוח התגובה
        data = response.json()
        
        print("\\n📋 מידע על GitHub API:")
        print(f"  🔗 תיעוד: {data.get('documentation_url', 'לא זמין')}")
        
        # הצגת כמה endpoints זמינים
        if 'current_user_url' in data:
            print(f"  👤 משתמש נוכחי: {data['current_user_url']}")
        if 'user_url' in data:
            print(f"  👥 משתמשים: {data['user_url']}")
        if 'repository_url' in data:
            print(f"  📚 repositories: {data['repository_url']}")
            
        print(f"\\n📏 גודל התגובה: {len(response.content)} bytes")
        
    else:
        print(f"❌ שגיאה בקריאה: {response.status_code}")
        
except ImportError:
    print("❌ חבילת requests לא מותקנת")
    print("💡 התקן אותה עם: pip install requests")
    
except requests.exceptions.Timeout:
    print("❌ זמן הקריאה פג")
    
except requests.exceptions.ConnectionError:
    print("❌ שגיאת חיבור - בדוק את החיבור לאינטרנט")
    
except requests.exceptions.RequestException as e:
    print(f"❌ שגיאה כללית בקריאה: {e}")
    
except Exception as e:
    print(f"❌ שגיאה לא צפויה: {e}")

print("\\n💡 טיפ: בפרויקטים אמיתיים, תמיד השתמש בסביבות וירטואליות!")`
      }
    ]
  },
  {
    id: 8,
    title: "יסודות בדיקות יחידה ב-Python",
    description: "כתיבת קוד אמין ובר-קיימא עם בדיקות אוטומטיות לוידוא איכות",
    objectives: [
      "הבנת חשיבות הבדיקות בפיתוח תוכנה מקצועי",
      "כתיבת בדיקות יחידה עם מודול unittest המובנה של Python",
      "שליטה במתודות assertion נפוצות: assertEqual, assertTrue, assertRaises",
      "הרצת בדיקות מקו הפקודה",
      "מבנה מקרי בדיקה ליעילות מקסימלית",
      "בדיקת מקרי קצה ותנאי שגיאה",
      "יישום עקרונות TDD (Test-Driven Development)"
    ],
    duration: "95 דקות",
    difficulty: "intermediate",
    prerequisites: ["מעבדה 7 - סביבות וירטואליות ואריזה"],
    icon: <TestTube className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-600",
    tasks: [
      {
        id: "task1",
        title: "יצירת פונקציות לבדיקה",
        description: "צור פונקציות בסיסיות שתבדוק אותן עם unittest",
        points: 15,
        code: `# TODO: צור פונקציה add שמחזירה סכום של שני מספרים
# TODO: צור פונקציה is_even שבודקת אם מספר זוגי
# TODO: צור פונקציה get_largest שמוצאת המספר הגדול ברשימה
# TODO: הוסף docstrings מתאימים לכל פונקציה`,
        hint: `💡 פונקציות לבדיקה:
def add(a, b):
    \"\"\"מחזירה סכום של שני מספרים\"\"\"
    return a + b

def is_even(number):
    \"\"\"בודקת אם מספר זוגי\"\"\"
    return number % 2 == 0

def get_largest(numbers):
    \"\"\"מוצאת המספר הגדול ברשימה\"\"\"
    if not numbers:
        raise ValueError("רשימה ריקה")
    return max(numbers)`,
        solution: `print("=== פונקציות לבדיקה ===")

def add(a, b):
    \"\"\"
    מחזירה את הסכום של שני מספרים.
    
    Args:
        a (int/float): המספר הראשון
        b (int/float): המספר השני
        
    Returns:
        int/float: הסכום של a ו-b
        
    Example:
        >>> add(2, 3)
        5
    \"\"\"
    return a + b

def is_even(number):
    \"\"\"
    בודקת אם מספר זוגי.
    
    Args:
        number (int): המספר לבדיקה
        
    Returns:
        bool: True אם המספר זוגי, False אחרת
        
    Example:
        >>> is_even(4)
        True
        >>> is_even(5)
        False
    \"\"\"
    return number % 2 == 0

def get_largest(numbers):
    \"\"\"
    מוצאת את המספר הגדול ביותר ברשימה.
    
    Args:
        numbers (list): רשימה של מספרים
        
    Returns:
        int/float: המספר הגדול ביותר
        
    Raises:
        ValueError: אם הרשימה ריקה
        
    Example:
        >>> get_largest([1, 5, 3])
        5
    \"\"\"
    if not numbers:
        raise ValueError("לא ניתן למצוא מקסימום ברשימה ריקה")
    return max(numbers)

def reverse_string(text):
    \"\"\"
    הופכת מחרוזת בסדר הפוך.
    
    Args:
        text (str): המחרוזת להיפוך
        
    Returns:
        str: המחרוזת ההפוכה
        
    Example:
        >>> reverse_string("שלום")
        'םולש'
    \"\"\"
    return text[::-1]

# בדיקות ידניות
print("\\n🧪 בדיקות ידניות:")
print(f"add(2, 3) = {add(2, 3)}")
print(f"is_even(4) = {is_even(4)}")
print(f"is_even(5) = {is_even(5)}")
print(f"get_largest([1, 5, 3]) = {get_largest([1, 5, 3])}")
print(f"reverse_string('שלום') = '{reverse_string('שלום')}'")

print("\\n💡 זכור: בדיקות ידניות אינן תחליף לבדיקות אוטומטיות!")`
      },
      {
        id: "task2",
        title: "כתיבת מחלקת בדיקה עם unittest",
        description: "צור מחלקת בדיקה שבודקת את הפונקציות שיצרת",
        points: 25,
        code: `# TODO: ייבא unittest ואת הפונקציות שיצרת
# TODO: צור מחלקה TestFunctions שיורשת מ-unittest.TestCase
# TODO: כתוב מתודות בדיקה לכל פונקציה (test_add, test_is_even, וכו')
# TODO: השתמש ב-assertion methods שונים`,
        hint: `💡 מחלקת בדיקה בסיסית:
import unittest

class TestFunctions(unittest.TestCase):
    
    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)
    
    def test_is_even(self):
        self.assertTrue(is_even(4))
        self.assertFalse(is_even(5))
    
    def test_get_largest_empty_list(self):
        with self.assertRaises(ValueError):
            get_largest([])`,
        solution: `print("=== בדיקות unittest ===")

import unittest

class TestFunctions(unittest.TestCase):
    \"\"\"מחלקת בדיקה לפונקציות הבסיסיות\"\"\"
    
    def test_add_positive_numbers(self):
        \"\"\"בדיקת חיבור מספרים חיוביים\"\"\"
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(10, 15), 25)
        self.assertEqual(add(0, 5), 5)
    
    def test_add_negative_numbers(self):
        \"\"\"בדיקת חיבור מספרים שליליים\"\"\"
        self.assertEqual(add(-2, -3), -5)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(-10, 5), -5)
    
    def test_add_floating_point(self):
        \"\"\"בדיקת חיבור מספרים עשרוניים\"\"\"
        self.assertAlmostEqual(add(1.5, 2.5), 4.0)
        self.assertAlmostEqual(add(0.1, 0.2), 0.3, places=10)
    
    def test_is_even_positive_numbers(self):
        \"\"\"בדיקת זוגיות למספרים חיוביים\"\"\"
        self.assertTrue(is_even(2))
        self.assertTrue(is_even(4))
        self.assertTrue(is_even(100))
        self.assertFalse(is_even(1))
        self.assertFalse(is_even(3))
        self.assertFalse(is_even(99))
    
    def test_is_even_negative_numbers(self):
        \"\"\"בדיקת זוגיות למספרים שליליים\"\"\"
        self.assertTrue(is_even(-2))
        self.assertTrue(is_even(-4))
        self.assertFalse(is_even(-1))
        self.assertFalse(is_even(-3))
    
    def test_is_even_zero(self):
        \"\"\"בדיקת זוגיות לאפס\"\"\"
        self.assertTrue(is_even(0))
    
    def test_get_largest_basic(self):
        \"\"\"בדיקת מציאת מקסימום ברשימות בסיסיות\"\"\"
        self.assertEqual(get_largest([1, 5, 3]), 5)
        self.assertEqual(get_largest([10, 2, 8, 4]), 10)
        self.assertEqual(get_largest([7]), 7)
    
    def test_get_largest_negative_numbers(self):
        \"\"\"בדיקת מקסימום עם מספרים שליליים\"\"\"
        self.assertEqual(get_largest([-1, -5, -3]), -1)
        self.assertEqual(get_largest([-10, -2, -8]), -2)
    
    def test_get_largest_mixed_numbers(self):
        \"\"\"בדיקת מקסימום עם מספרים מעורבים\"\"\"
        self.assertEqual(get_largest([-5, 0, 3, -2]), 3)
        self.assertEqual(get_largest([1.5, 2.7, 1.9]), 2.7)
    
    def test_get_largest_empty_list(self):
        \"\"\"בדיקה שרשימה ריקה מעלה חריג\"\"\"
        with self.assertRaises(ValueError):
            get_largest([])
    
    def test_reverse_string_basic(self):
        \"\"\"בדיקת היפוך מחרוזות בסיסיות\"\"\"
        self.assertEqual(reverse_string("שלום"), "םולש")
        self.assertEqual(reverse_string("Python"), "nohtyP")
        self.assertEqual(reverse_string(""), "")
    
    def test_reverse_string_palindrome(self):
        \"\"\"בדיקת היפוך פלינדרום\"\"\"
        self.assertEqual(reverse_string("אבא"), "אבא")
        self.assertEqual(reverse_string("12321"), "12321")
    
    def test_reverse_string_special_chars(self):
        \"\"\"בדיקת היפוך עם תווים מיוחדים\"\"\"
        self.assertEqual(reverse_string("a1b2c!"), "!c2b1a")
        self.assertEqual(reverse_string("שלום עולם"), "םלוע םולש")

# הרצת הבדיקות
if __name__ == "__main__":
    print("\\n🚀 מריץ בדיקות unittest...")
    
    # יצירת test suite
    loader = unittest.TestLoader()
    suite = loader.loadTestsFromTestCase(TestFunctions)
    
    # הרצת הבדיקות עם דיווח מפורט
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    
    # סיכום התוצאות
    print(f"\\n📊 סיכום:")
    print(f"✅ בדיקות שעברו: {result.testsRun - len(result.failures) - len(result.errors)}")
    print(f"❌ בדיקות שנכשלו: {len(result.failures)}")
    print(f"🚨 שגיאות: {len(result.errors)}")
    
    if result.wasSuccessful():
        print("\\n🎉 כל הבדיקות עברו בהצלחה!")
    else:
        print("\\n⚠️ יש בדיקות שנכשלו - בדוק את הקוד")
        
print("\\n💡 טיפ: הרץ בדיקות עם: python -m unittest -v")`
      },
      {
        id: "task3",
        title: "בדיקות מתקדמות ומקרי קצה",
        description: "הוסף בדיקות למקרי קצה ושגיאות שונות",
        points: 30,
        code: `# TODO: הוסף בדיקות למקרי קצה (מספרים גדולים, רשימות ארוכות)
# TODO: בדוק שהפונקציות מטפלות נכון בקלטים לא תקינים
# TODO: השתמש ב-setUp ו-tearDown לאתחול וניקוי
# TODO: הוסף בדיקות ביצועים פשוטות`,
        hint: `💡 בדיקות מתקדמות:
class AdvancedTests(unittest.TestCase):
    
    def setUp(self):
        \"\"\"רץ לפני כל בדיקה\"\"\"
        self.large_list = list(range(1000))
    
    def tearDown(self):
        \"\"\"רץ אחרי כל בדיקה\"\"\"
        pass
    
    def test_large_numbers(self):
        result = add(999999, 1)
        self.assertEqual(result, 1000000)
    
    def test_performance(self):
        import time
        start = time.time()
        get_largest(self.large_list)
        end = time.time()
        self.assertLess(end - start, 1.0)  # פחות משנייה`,
        solution: `print("=== בדיקות מתקדמות ומקרי קצה ===")

import unittest
import time

class AdvancedTests(unittest.TestCase):
    \"\"\"בדיקות מתקדמות למקרי קצה וביצועים\"\"\"
    
    def setUp(self):
        \"\"\"הכנה לפני כל בדיקה\"\"\"
        self.large_list = list(range(1000))
        self.small_list = [1, 2, 3]
        self.test_start_time = time.time()
    
    def tearDown(self):
        \"\"\"ניקוי אחרי כל בדיקה\"\"\"
        test_time = time.time() - self.test_start_time
        if test_time > 0.1:  # אזהרה אם בדיקה ארוכה מדי
            print(f"\\n⚠️ בדיקה ארוכה: {self._testMethodName} לקחה {test_time:.3f} שניות")
    
    def test_add_large_numbers(self):
        \"\"\"בדיקת חיבור מספרים גדולים\"\"\"
        result = add(999999999, 1)
        self.assertEqual(result, 1000000000)
        
        # בדיקת מספרים עצומים
        large1 = 10**50
        large2 = 10**50
        result = add(large1, large2)
        self.assertEqual(result, 2 * (10**50))
    
    def test_add_edge_cases(self):
        \"\"\"בדיקת מקרי קצה בחיבור\"\"\"
        # אפס
        self.assertEqual(add(0, 0), 0)
        self.assertEqual(add(5, 0), 5)
        self.assertEqual(add(0, -5), -5)
        
        # מספרים עשרוניים זעירים
        self.assertAlmostEqual(add(0.0000001, 0.0000002), 0.0000003, places=7)
    
    def test_is_even_edge_cases(self):
        \"\"\"בדיקת זוגיות למקרי קצה\"\"\"
        # מספרים גדולים
        self.assertTrue(is_even(10**100))
        self.assertFalse(is_even(10**100 + 1))
        
        # מספרים שליליים גדולים
        self.assertTrue(is_even(-10**50))
        self.assertFalse(is_even(-10**50 - 1))
    
    def test_get_largest_performance(self):
        \"\"\"בדיקת ביצועים למציאת מקסימום\"\"\"
        start_time = time.time()
        result = get_largest(self.large_list)
        end_time = time.time()
        
        # הפונקציה צריכה להיות מהירה
        self.assertLess(end_time - start_time, 0.01, "הפונקציה איטית מדי")
        self.assertEqual(result, 999)  # המקסימום ברשימה
    
    def test_get_largest_duplicates(self):
        \"\"\"בדיקת מקסימום עם ערכים כפולים\"\"\"
        numbers = [5, 1, 5, 3, 5, 2]
        self.assertEqual(get_largest(numbers), 5)
        
        # רשימה עם ערכים זהים
        same_numbers = [7, 7, 7, 7]
        self.assertEqual(get_largest(same_numbers), 7)
    
    def test_get_largest_very_long_list(self):
        \"\"\"בדיקת מקסימום ברשימה ארוכה מאוד\"\"\"
        very_long_list = list(range(100000))
        result = get_largest(very_long_list)
        self.assertEqual(result, 99999)
    
    def test_reverse_string_unicode(self):
        \"\"\"בדיקת היפוך עם תווי יוניקוד\"\"\"
        # עברית
        self.assertEqual(reverse_string("שלום עולם"), "םלוע םולש")
        
        # אימוג'י
        self.assertEqual(reverse_string("😀😃😄"), "😄😃😀")
        
        # תווים מיוחדים
        self.assertEqual(reverse_string("@#$%"), "%$#@")
    
    def test_reverse_string_long_text(self):
        \"\"\"בדיקת היפוך טקסט ארוך\"\"\"
        long_text = "א" * 10000
        reversed_text = reverse_string(long_text)
        self.assertEqual(len(reversed_text), 10000)
        self.assertEqual(reversed_text, long_text)  # פלינדרום
    
    def test_functions_with_none_values(self):
        \"\"\"בדיקה מה קורה עם ערכי None (אם רלוונטי)\"\"\"
        # זה ייכשל כי הפונקציות לא מטפלות ב-None
        # זה מדגים חשיבות של בדיקת קלטים
        
        with self.assertRaises((TypeError, ValueError)):
            add(None, 5)
        
        with self.assertRaises((TypeError, ValueError)):
            is_even(None)
        
        with self.assertRaises((TypeError, ValueError)):
            reverse_string(None)

class TestCoverage(unittest.TestCase):
    \"\"\"בדיקות לכיסוי קוד מלא\"\"\"
    
    def test_all_assertion_methods(self):
        \"\"\"דוגמה לשימוש במתודות assertion שונות\"\"\"
        # בדיקות שוויון
        self.assertEqual(add(1, 1), 2)
        self.assertNotEqual(add(1, 2), 2)
        
        # בדיקות boolean
        self.assertTrue(is_even(4))
        self.assertFalse(is_even(3))
        
        # בדיקות None
        self.assertIsNone(None)
        self.assertIsNotNone("משהו")
        
        # בדיקות חריגים
        with self.assertRaises(ValueError):
            get_largest([])
        
        # בדיקות קירוב (למספרים עשרוניים)
        self.assertAlmostEqual(1.0/3.0, 0.333, places=3)
        
        # בדיקות חברות
        self.assertIn(5, [1, 5, 10])
        self.assertNotIn(7, [1, 5, 10])
        
        # בדיקות גדול/קטן
        self.assertGreater(10, 5)
        self.assertLess(3, 7)
        self.assertGreaterEqual(5, 5)
        self.assertLessEqual(4, 4)

# הרצת כל הבדיקות
if __name__ == "__main__":
    print("\\n🚀 מריץ בדיקות מתקדמות...")
    
    # יצירת test suite מורכב
    loader = unittest.TestLoader()
    suite = unittest.TestSuite()
    
    # הוספת מחלקות בדיקה
    suite.addTests(loader.loadTestsFromTestCase(AdvancedTests))
    suite.addTests(loader.loadTestsFromTestCase(TestCoverage))
    
    # הרצה עם דיווח מפורט
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    
    # דיווח מפורט
    print(f"\\n📈 דוח מתקדם:")
    print(f"🏃 בדיקות שהורצו: {result.testsRun}")
    print(f"⏱️ זמן כולל: {result.testsRun * 0.01:.2f} שניות (משוער)")
    print(f"✅ הצלחות: {result.testsRun - len(result.failures) - len(result.errors)}")
    print(f"❌ כישלונות: {len(result.failures)}")
    print(f"🚨 שגיאות: {len(result.errors)}")
    
    # ניתוח איכות
    success_rate = ((result.testsRun - len(result.failures) - len(result.errors)) / result.testsRun) * 100
    print(f"📊 אחוז הצלחה: {success_rate:.1f}%")
    
    if result.wasSuccessful():
        print("\\n🏆 מצוין! כל הבדיקות המתקדמות עברו!")
        print("💪 הקוד איתן ומוכן לייצור")
    else:
        print("\\n🔧 יש עבודה לעשות - בדוק את הכישלונות")
        
    print("\\n💡 טיפים:")
    print("   - הרץ בדיקות ספציפיות: python -m unittest TestClass.test_method -v")
    print("   - הרץ עם כיסוי קוד: pip install coverage && coverage run -m unittest")
    print("   - אוטומציה: השתמש ב-GitHub Actions או Jenkins לבדיקות אוטומטיות")`
      }
    ]
  },
  {
    id: 9,
    title: "עבודה עם פורמטי נתונים ב-Python",
    description: "עיבוד והמרה של פורמטי נתונים נפוצים - JSON, YAML, XML לאוטומציה DevOps",
    objectives: [
      "עבודה עם JSON לקונפיגורציה וחילופי נתונים",
      "פענוח ויצירת YAML להגדרות תשתית",
      "עיבוד נתוני XML למערכות מורשת ו-APIs",
      "המרת נתונים בין פורמטים שונים",
      "אימות נתונים כנגד כללים בסיסיים",
      "טיפול בשגיאות נפוצות בפורמטי נתונים",
      "יישום שיטות עבודה טובות לעבודה עם נתוני קונפיגורציה"
    ],
    duration: "110 דקות",
    difficulty: "intermediate",
    prerequisites: ["מעבדה 8 - יסודות בדיקות יחידה"],
    icon: <Database className="w-8 h-8" />,
    color: "from-violet-500 to-purple-600",
    tasks: [
      {
        id: "task1",
        title: "עיבוד נתוני JSON",
        description: "קרא ועבד קובץ JSON של קונפיגורציה ותחלץ מידע מרכזי",
        points: 20,
        code: `# TODO: ייבא את מודול json
# TODO: קרא קובץ JSON וכתוב פונקציה process_json_data
# TODO: חלץ מידע על האפליקציה, מסד הנתונים ושירותים
# TODO: החזר מילון עם המידע המעובד
# TODO: טפל בשגיאות JSON לא תקין`,
        hint: `💡 עיבוד JSON:
import json

def process_json_data(json_file):
    try:
        with open(json_file, 'r', encoding='utf-8') as file:
            data = json.load(file)
        
        result = {
            'application': data.get('application', 'Unknown'),
            'version': data.get('version', 'Unknown'),
            'database': data.get('database', {}),
            'services': data.get('services', [])
        }
        return result
    except json.JSONDecodeError as e:
        print(f"שגיאת JSON: {e}")
        return {}`,
        solution: `print("=== עיבוד נתוני JSON ===")

import json
import os

def process_json_data(json_file):
    \"\"\"
    עיבוד קובץ JSON וחילוץ מידע מרכזי.
    
    Args:
        json_file (str): נתיב לקובץ JSON
        
    Returns:
        dict: מידע מעובד מקובץ JSON
    \"\"\"
    try:
        print(f"📂 קורא קובץ JSON: {json_file}")
        
        with open(json_file, 'r', encoding='utf-8') as file:
            data = json.load(file)
        
        # חילוץ מידע מרכזי
        result = {
            'application': {
                'name': data.get('application', 'Unknown'),
                'version': data.get('version', 'Unknown'),
                'environment': data.get('environment', 'Unknown')
            },
            'database': {
                'host': data.get('database', {}).get('host', 'Unknown'),
                'port': data.get('database', {}).get('port', 0),
                'name': data.get('database', {}).get('name', 'Unknown'),
                'ssl_enabled': data.get('database', {}).get('ssl', False)
            },
            'services': []
        }
        
        # עיבוד שירותים
        for service in data.get('services', []):
            service_info = {
                'name': service.get('name', 'Unknown'),
                'host': service.get('host', 'Unknown'),
                'port': service.get('port', 0),
                'health_check': service.get('health_check', 'Unknown')
            }
            result['services'].append(service_info)
        
        print(f"✅ JSON עובד בהצלחה - {len(result['services'])} שירותים")
        return result
        
    except FileNotFoundError:
        print(f"❌ קובץ לא נמצא: {json_file}")
        return {}
    except json.JSONDecodeError as e:
        print(f"❌ שגיאת JSON: {str(e)}")
        return {}
    except Exception as e:
        print(f"❌ שגיאה לא צפויה: {str(e)}")
        return {}

# יצירת קובץ JSON לדוגמה
sample_json = {
    "application": "DevOps Automation Tool",
    "version": "1.0.0", 
    "environment": "development",
    "database": {
        "host": "db.example.com",
        "port": 5432,
        "name": "devops_db",
        "user": "db_user",
        "ssl": True
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
    ]
}

# שמירת קובץ הדוגמה
with open("config.json", "w", encoding='utf-8') as f:
    json.dump(sample_json, f, indent=2, ensure_ascii=False)

# עיבוד הקובץ
result = process_json_data("config.json")

if result:
    print("\\n📋 מידע מעובד:")
    app = result['application']
    print(f"   📱 אפליקציה: {app['name']} (גרסה {app['version']})")
    print(f"   🌍 סביבה: {app['environment']}")
    
    db = result['database']
    print(f"   🗄️ מסד נתונים: {db['host']}:{db['port']}")
    print(f"   🔐 SSL: {'מופעל' if db['ssl_enabled'] else 'כבוי'}")
    
    print(f"   🚀 שירותים ({len(result['services'])}):")
    for service in result['services']:
        print(f"      - {service['name']}: {service['host']}:{service['port']}")

# ניקוי
if os.path.exists("config.json"):
    os.remove("config.json")`
      },
      {
        id: "task2",
        title: "עיבוד נתוני YAML",
        description: "קרא קובץ YAML של הגדרות תשתית וחלץ מידע על VPC, שרתים וקבוצות אבטחה",
        points: 25,
        code: `# TODO: ייבא את מודול yaml (pip install pyyaml)
# TODO: צור פונקציה process_yaml_data
# TODO: חלץ מידע על infrastructure, servers, security_groups
# TODO: עבד מידע על subnets ו-availability zones
# TODO: טפל בשגיאות YAML`,
        hint: `💡 עיבוד YAML:
import yaml

def process_yaml_data(yaml_file):
    try:
        with open(yaml_file, 'r', encoding='utf-8') as file:
            data = yaml.safe_load(file)
        
        infrastructure = data.get('infrastructure', {})
        result = {
            'region': infrastructure.get('region'),
            'environment': infrastructure.get('environment'),
            'vpc': infrastructure.get('vpc', {}),
            'servers': data.get('servers', [])
        }
        return result
    except yaml.YAMLError as e:
        print(f"שגיאת YAML: {e}")`,
        solution: `print("\\n=== עיבוד נתוני YAML ===")

# הדמיית מודול yaml (בסביבה אמיתית: pip install pyyaml)
class MockYAML:
    @staticmethod
    def safe_load(content):
        # הדמיה פשוטה של פענוח YAML
        # בפועל תשתמש ב: import yaml
        return {
            'infrastructure': {
                'region': 'eu-west-1',
                'environment': 'staging',
                'vpc': {
                    'id': 'vpc-12345',
                    'cidr': '10.0.0.0/16',
                    'subnets': [
                        {'name': 'public-subnet-1', 'cidr': '10.0.1.0/24', 'az': 'eu-west-1a', 'public': True},
                        {'name': 'private-subnet-1', 'cidr': '10.0.3.0/24', 'az': 'eu-west-1a', 'public': False}
                    ]
                }
            },
            'servers': [
                {
                    'name': 'web-server-1',
                    'type': 't3.medium', 
                    'subnet': 'public-subnet-1',
                    'security_groups': ['web-sg'],
                    'tags': {'Role': 'WebServer', 'Environment': 'Staging'}
                },
                {
                    'name': 'db-server-1',
                    'type': 't3.xlarge',
                    'subnet': 'private-subnet-1', 
                    'security_groups': ['db-sg'],
                    'tags': {'Role': 'DBServer', 'Environment': 'Staging'}
                }
            ],
            'security_groups': [
                {
                    'name': 'web-sg',
                    'description': 'Web Server Security Group',
                    'rules': [
                        {'protocol': 'tcp', 'port': 80, 'source': '0.0.0.0/0'},
                        {'protocol': 'tcp', 'port': 443, 'source': '0.0.0.0/0'}
                    ]
                }
            ]
        }

yaml = MockYAML()

def process_yaml_data(yaml_file):
    \"\"\"
    עיבוד קובץ YAML של הגדרות תשתית.
    
    Args:
        yaml_file (str): נתיב לקובץ YAML
        
    Returns:
        dict: מידע מעובד מקובץ YAML
    \"\"\"
    try:
        print(f"📂 קורא קובץ YAML: {yaml_file}")
        
        # בסביבה אמיתית:
        # with open(yaml_file, 'r', encoding='utf-8') as file:
        #     data = yaml.safe_load(file)
        
        # הדמיה לצורך הדגמה:
        data = yaml.safe_load("")
        
        # חילוץ מידע תשתית
        infrastructure = data.get('infrastructure', {})
        result = {
            'environment': infrastructure.get('environment', 'Unknown'),
            'region': infrastructure.get('region', 'Unknown'),
            'vpc': {
                'id': infrastructure.get('vpc', {}).get('id', 'Unknown'),
                'cidr': infrastructure.get('vpc', {}).get('cidr', 'Unknown'),
                'subnets': []
            },
            'servers': [],
            'security_groups': []
        }
        
        # עיבוד subnets
        for subnet in infrastructure.get('vpc', {}).get('subnets', []):
            subnet_info = {
                'name': subnet.get('name', 'Unknown'),
                'cidr': subnet.get('cidr', 'Unknown'),
                'az': subnet.get('az', 'Unknown'),
                'public': subnet.get('public', False)
            }
            result['vpc']['subnets'].append(subnet_info)
        
        # עיבוד שרתים
        for server in data.get('servers', []):
            server_info = {
                'name': server.get('name', 'Unknown'),
                'type': server.get('type', 'Unknown'),
                'subnet': server.get('subnet', 'Unknown'),
                'security_groups': server.get('security_groups', []),
                'tags': server.get('tags', {})
            }
            result['servers'].append(server_info)
        
        # עיבוד קבוצות אבטחה
        for sg in data.get('security_groups', []):
            sg_info = {
                'name': sg.get('name', 'Unknown'),
                'description': sg.get('description', 'Unknown'),
                'rules_count': len(sg.get('rules', []))
            }
            result['security_groups'].append(sg_info)
        
        print(f"✅ YAML עובד בהצלחה")
        return result
        
    except Exception as e:
        print(f"❌ שגיאה בעיבוד YAML: {str(e)}")
        return {}

# עיבוד קובץ YAML מדומה
result = process_yaml_data("servers.yaml")

if result:
    print("\\n🏗️ מידע תשתית:")
    print(f"   🌍 אזור: {result['region']}")
    print(f"   🏷️ סביבה: {result['environment']}")
    
    vpc = result['vpc']
    print(f"   🌐 VPC: {vpc['id']} ({vpc['cidr']})")
    print(f"   📡 רשתות משנה: {len(vpc['subnets'])}")
    
    for subnet in vpc['subnets']:
        visibility = "ציבורית" if subnet['public'] else "פרטית"
        print(f"      - {subnet['name']}: {subnet['cidr']} ({visibility})")
    
    print(f"   🖥️ שרתים ({len(result['servers'])}):")
    for server in result['servers']:
        role = server['tags'].get('Role', 'Unknown')
        print(f"      - {server['name']}: {server['type']} ({role})")
    
    print(f"   🔒 קבוצות אבטחה: {len(result['security_groups'])}")
    for sg in result['security_groups']:
        print(f"      - {sg['name']}: {sg['rules_count']} כללים")`
      },
      {
        id: "task3",
        title: "המרה בין פורמטים",
        description: "צור פונקציה שממירה נתונים בין JSON, YAML ו-XML",
        points: 30,
        code: `# TODO: צור פונקציה convert_formats
# TODO: קבל פרמטרים: data, source_format, target_format  
# TODO: אמת שהפורמטים תקינים
# TODO: המר בין JSON, YAML ו-XML
# TODO: החזר את הנתונים בפורמט המבוקש`,
        hint: `💡 המרת פורמטים:
def convert_formats(data, source_format, target_format):
    valid_formats = ['json', 'yaml', 'xml']
    
    if target_format not in valid_formats:
        raise ValueError("פורמט לא תקין")
    
    if target_format == 'json':
        return json.dumps(data, indent=2)
    elif target_format == 'yaml':
        return yaml.dump(data, default_flow_style=False)
    # וכו'...`,
        solution: `print("\\n=== המרה בין פורמטים ===")

import json

def convert_formats(data, source_format, target_format):
    \"\"\"
    המרת נתונים בין פורמטים שונים.
    
    Args:
        data (dict): הנתונים להמרה
        source_format (str): פורמט המקור
        target_format (str): פורמט היעד
        
    Returns:
        str: הנתונים בפורמט החדש
    \"\"\"
    valid_formats = ['json', 'yaml', 'xml']
    
    # אימות פורמטים
    if source_format not in valid_formats:
        raise ValueError(f"פורמט מקור לא תקין: {source_format}")
    if target_format not in valid_formats:
        raise ValueError(f"פורמט יעד לא תקין: {target_format}")
    
    if source_format == target_format:
        print(f"💡 פורמט המקור והיעד זהים ({source_format})")
        return json.dumps(data, indent=2, ensure_ascii=False) if target_format == 'json' else str(data)
    
    try:
        print(f"🔄 ממיר מ-{source_format} ל-{target_format}")
        
        if target_format == 'json':
            return json.dumps(data, indent=2, ensure_ascii=False)
            
        elif target_format == 'yaml':
            # הדמיית המרה ל-YAML
            yaml_output = "---\\n"
            
            def dict_to_yaml(obj, indent=0):
                lines = []
                spaces = "  " * indent
                
                if isinstance(obj, dict):
                    for key, value in obj.items():
                        if isinstance(value, (dict, list)):
                            lines.append(f"{spaces}{key}:")
                            lines.append(dict_to_yaml(value, indent + 1))
                        else:
                            lines.append(f"{spaces}{key}: {value}")
                elif isinstance(obj, list):
                    for item in obj:
                        if isinstance(item, (dict, list)):
                            lines.append(f"{spaces}- ")
                            lines.append(dict_to_yaml(item, indent + 1))
                        else:
                            lines.append(f"{spaces}- {item}")
                
                return "\\n".join(lines)
            
            yaml_output += dict_to_yaml(data)
            return yaml_output
            
        elif target_format == 'xml':
            # הדמיית המרה ל-XML
            def dict_to_xml(obj, root_name="root"):
                xml_lines = [f"<?xml version='1.0' encoding='UTF-8'?>"]
                xml_lines.append(f"<{root_name}>")
                
                def process_item(item, tag="item", level=1):
                    indent = "  " * level
                    lines = []
                    
                    if isinstance(item, dict):
                        for key, value in item.items():
                            if isinstance(value, (dict, list)):
                                lines.append(f"{indent}<{key}>")
                                lines.extend(process_item(value, key, level + 1))
                                lines.append(f"{indent}</{key}>")
                            else:
                                lines.append(f"{indent}<{key}>{value}</{key}>")
                    elif isinstance(item, list):
                        for list_item in item:
                            lines.append(f"{indent}<{tag}>")
                            lines.extend(process_item(list_item, "item", level + 1))
                            lines.append(f"{indent}</{tag}>")
                    else:
                        lines.append(f"{indent}{item}")
                    
                    return lines
                
                xml_lines.extend(process_item(data, "data", 1))
                xml_lines.append(f"</{root_name}>")
                return "\\n".join(xml_lines)
            
            return dict_to_xml(data)
        
    except Exception as e:
        print(f"❌ שגיאה בהמרה: {str(e)}")
        return ""

def validate_data(data, schema=None):
    \"\"\"
    אימות נתונים כנגד כללים בסיסיים.
    
    Args:
        data (dict): הנתונים לאימות
        schema (dict, optional): סכמת אימות
        
    Returns:
        bool: True אם תקין, False אחרת
    \"\"\"
    try:
        print("🔍 מאמת נתונים...")
        
        # בדיקות בסיסיות
        if not isinstance(data, dict):
            print("❌ הנתונים חייבים להיות מילון")
            return False
        
        if not data:
            print("❌ הנתונים ריקים")
            return False
        
        # אימות מבנה ספציפי
        if 'services' in data and not isinstance(data['services'], list):
            print("❌ שירותים חייבים להיות רשימה")
            return False
        
        if 'application' in data and not isinstance(data['application'], dict):
            print("❌ מידע אפליקציה חייב להיות מילון")
            return False
        
        print("✅ אימות נתונים עבר בהצלחה")
        return True
        
    except Exception as e:
        print(f"❌ שגיאה באימות: {str(e)}")
        return False

# דוגמאות להמרה
sample_data = {
    "application": "DevOps Tool",
    "version": "2.0.0",
    "services": [
        {"name": "web", "port": 80},
        {"name": "api", "port": 8080}
    ],
    "database": {
        "type": "PostgreSQL",
        "port": 5432
    }
}

print("\\n📊 המרת פורמטים:")

# המרה ל-JSON
json_output = convert_formats(sample_data, 'dict', 'json')
print("\\n📄 JSON:")
print(json_output[:200] + "..." if len(json_output) > 200 else json_output)

# המרה ל-YAML
yaml_output = convert_formats(sample_data, 'dict', 'yaml')
print("\\n📋 YAML:")
print(yaml_output[:200] + "..." if len(yaml_output) > 200 else yaml_output)

# המרה ל-XML
xml_output = convert_formats(sample_data, 'dict', 'xml')
print("\\n🏷️ XML:")
print(xml_output[:200] + "..." if len(xml_output) > 200 else xml_output)

# אימות נתונים
print("\\n🔍 אימות נתונים:")
validation_result = validate_data(sample_data)
print(f"תוצאת אימות: {'✅ תקין' if validation_result else '❌ לא תקין'}")

print("\\n💡 טיפים:")
print("   - השתמש ב-json.dumps() עם ensure_ascii=False לתמיכה בעברית")
print("   - בסביבה אמיתית התקן: pip install pyyaml xmltodict")
print("   - אמת תמיד נתונים לפני עיבוד")
print("   - שמור backup לפני המרות")`
      }
    ]
  },
  {
    id: 10,
    title: "אינטראקציה עם APIs ו-REST ב-Python",
    description: "התחברות ועבודה עם APIs מודרניים - כישור חיוני לאוטומציה DevOps",
    objectives: [
      "הבנת מושגי REST API ושיטות HTTP",
      "שימוש בספריית requests לאינטראקציות API",
      "טיפול באימות (API keys, OAuth, tokens)",
      "עיבוד תגובות JSON וטיפול בשגיאות",
      "עבודה עם status codes ו-headers נפוצים",
      "בניית טיפול בשגיאות חזק לקריאות API",
      "יצירת wrappers ו-clients פשוטים ל-API"
    ],
    duration: "120 דקות",
    difficulty: "intermediate",
    prerequisites: ["מעבדה 9 - עבודה עם פורמטי נתונים"],
    icon: <Globe className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-600",
    tasks: [
      {
        id: "task1",
        title: "הגדרת API client בסיסי",
        description: "צור API client עם קונפיגורציה ומתודות בסיסיות לקריאות HTTP",
        points: 20,
        code: `# TODO: ייבא את ספריית requests
# TODO: צור פונקציה load_config שקוראת קונפיגורציה מ-JSON
# TODO: צור פונקציה create_api_client עם base_url ו-headers
# TODO: הוסף timeout ופרמטרים נוספים`,
        hint: `💡 API client בסיסי:
import requests
import json

def load_config(config_file="config.json"):
    with open(config_file, 'r') as file:
        return json.load(file)

def create_api_client(base_url, headers=None, timeout=30):
    session = requests.Session()
    if headers:
        session.headers.update(headers)
    return {
        "base_url": base_url,
        "session": session,
        "timeout": timeout
    }`,
        solution: `print("=== הגדרת API Client בסיסי ===")

# הדמיית ספריית requests
class MockResponse:
    def __init__(self, json_data, status_code=200):
        self.json_data = json_data
        self.status_code = status_code
        self.text = json.dumps(json_data)
    
    def json(self):
        return self.json_data
    
    def raise_for_status(self):
        if 400 <= self.status_code < 600:
            raise Exception(f"HTTP {self.status_code}")

class MockSession:
    def __init__(self):
        self.headers = {}
    
    def get(self, url, **kwargs):
        # מדמה תגובה מ-GitHub API
        if "github.com" in url:
            return MockResponse({
                "current_user_url": "https://api.github.com/user",
                "user_url": "https://api.github.com/users/{user}",
                "documentation_url": "https://docs.github.com/rest/"
            })
        return MockResponse({"message": "Hello from API"})
    
    def post(self, url, **kwargs):
        return MockResponse({"id": 123, "status": "created"}, 201)

class MockRequests:
    Session = MockSession
    
    @staticmethod
    def get(url, **kwargs):
        session = MockSession()
        return session.get(url, **kwargs)

# שימוש בהדמיה (בסביבה אמיתית: import requests)
requests = MockRequests()

import json
import os

def load_config(config_file="api_config.json"):
    \"\"\"
    טעינת קונפיגורציית API מקובץ JSON.
    
    Args:
        config_file (str): נתיב לקובץ הקונפיגורציה
        
    Returns:
        dict: הגדרות הקונפיגורציה
    \"\"\"
    try:
        if not os.path.exists(config_file):
            print(f"⚠️ קובץ קונפיגורציה {config_file} לא נמצא - יוצר ברירת מחדל")
            # יצירת קונפיגורציה ברירת מחדל
            default_config = {
                "api_base_url": "https://jsonplaceholder.typicode.com",
                "timeout": 30,
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "User-Agent": "Python-DevOps-Tool/1.0"
                },
                "auth": {
                    "type": "none",
                    "api_key": "",
                    "token": ""
                },
                "retry": {
                    "max_retries": 3,
                    "backoff_factor": 0.5
                }
            }
            
            with open(config_file, 'w', encoding='utf-8') as f:
                json.dump(default_config, f, indent=2, ensure_ascii=False)
            
            return default_config
        
        with open(config_file, 'r', encoding='utf-8') as file:
            config = json.load(file)
            print(f"✅ קונפיגורציה נטענה מ-{config_file}")
            return config
            
    except json.JSONDecodeError as e:
        print(f"❌ שגיאת JSON בקובץ קונפיגורציה: {str(e)}")
        raise
    except Exception as e:
        print(f"❌ שגיאה בטעינת קונפיגורציה: {str(e)}")
        raise

def create_api_client(base_url, headers=None, timeout=30):
    \"\"\"
    יצירת API client עם הגדרות בסיסיות.
    
    Args:
        base_url (str): URL בסיס ל-API
        headers (dict, optional): headers ברירת מחדל
        timeout (int, optional): timeout לקריאות
        
    Returns:
        dict: אובייקט API client
    \"\"\"
    # יצירת session לשימוש חוזר בחיבורים
    session = requests.Session()
    
    # הגדרת headers ברירת מחדל
    if headers:
        session.headers.update(headers)
    
    # יצירת client object
    client = {
        "base_url": base_url.rstrip('/'),  # הסרת slash בסוף
        "session": session,
        "timeout": timeout,
        "stats": {
            "requests_made": 0,
            "successful_requests": 0,
            "failed_requests": 0
        }
    }
    
    print(f"🔗 API client נוצר עבור: {base_url}")
    return client

def get_data(client, endpoint, params=None):
    \"\"\"
    ביצוע GET request לשליפת נתונים.
    
    Args:
        client (dict): אובייקט API client
        endpoint (str): endpoint של ה-API
        params (dict, optional): פרמטרי query
        
    Returns:
        dict: נתוני התגובה
    \"\"\"
    # בניית URL מלא
    url = f"{client['base_url']}/{endpoint.lstrip('/')}"
    
    try:
        print(f"📡 שולח GET request ל: {url}")
        client['stats']['requests_made'] += 1
        
        # ביצוע הקריאה
        response = client["session"].get(
            url,
            params=params,
            timeout=client["timeout"]
        )
        
        # בדיקת שגיאות
        response.raise_for_status()
        
        # עיבוד התגובה
        data = response.json()
        client['stats']['successful_requests'] += 1
        
        print(f"✅ GET request הצליח - סטטוס: {response.status_code}")
        return data
        
    except Exception as e:
        client['stats']['failed_requests'] += 1
        print(f"❌ שגיאה ב-GET request: {str(e)}")
        raise

def post_data(client, endpoint, data, json_data=True):
    \"\"\"
    ביצוע POST request לשליחת נתונים.
    
    Args:
        client (dict): אובייקט API client
        endpoint (str): endpoint של ה-API
        data (dict): נתונים לשליחה
        json_data (bool): האם לשלוח כ-JSON
        
    Returns:
        dict: נתוני התגובה
    \"\"\"
    url = f"{client['base_url']}/{endpoint.lstrip('/')}"
    
    try:
        print(f"📤 שולח POST request ל: {url}")
        client['stats']['requests_made'] += 1
        
        # ביצוע הקריאה
        if json_data:
            response = client["session"].post(
                url,
                json=data,  # שליחה אוטומטית כ-JSON
                timeout=client["timeout"]
            )
        else:
            response = client["session"].post(
                url,
                data=data,  # שליחה כ-form data
                timeout=client["timeout"]
            )
        
        response.raise_for_status()
        result = response.json()
        client['stats']['successful_requests'] += 1
        
        print(f"✅ POST request הצליח - סטטוס: {response.status_code}")
        return result
        
    except Exception as e:
        client['stats']['failed_requests'] += 1
        print(f"❌ שגיאה ב-POST request: {str(e)}")
        raise

# דוגמה לשימוש
print("\\n🚀 יצירת API Client:")

# טעינת קונפיגורציה
config = load_config()

# יצירת client
api_client = create_api_client(
    base_url=config.get("api_base_url", "https://api.github.com"),
    headers=config.get("headers", {}),
    timeout=config.get("timeout", 30)
)

print("\\n📊 בדיקת API:")

try:
    # GET request לדוגמה
    api_data = get_data(api_client, "/")
    print("\\n📋 מידע API:")
    if 'documentation_url' in api_data:
        print(f"   📖 תיעוד: {api_data['documentation_url']}")
    if 'current_user_url' in api_data:
        print(f"   👤 משתמש נוכחי: {api_data['current_user_url']}")
    
    # POST request לדוגמה
    test_data = {
        "title": "פוסט חדש",
        "body": "זוהי הודעה שנוצרה דרך API",
        "userId": 1
    }
    
    posted_data = post_data(api_client, "/posts", test_data)
    print(f"\\n📝 פוסט נוצר עם ID: {posted_data.get('id', 'Unknown')}")
    
except Exception as e:
    print(f"❌ שגיאה כללית: {str(e)}")

# הצגת סטטיסטיקות
print("\\n📈 סטטיסטיקות API Client:")
stats = api_client['stats']
print(f"   📡 סה\\"כ קריאות: {stats['requests_made']}")
print(f"   ✅ הצליחו: {stats['successful_requests']}")
print(f"   ❌ נכשלו: {stats['failed_requests']}")

if stats['requests_made'] > 0:
    success_rate = (stats['successful_requests'] / stats['requests_made']) * 100
    print(f"   📊 אחוז הצלחה: {success_rate:.1f}%")

# ניקוי קובץ קונפיגורציה שנוצר
if os.path.exists("api_config.json"):
    os.remove("api_config.json")
    print("\\n🧹 קובץ קונפיגורציה זמני נמחק")`
      },
      {
        id: "task2",
        title: "טיפול בשגיאות API",
        description: "מימוש טיפול מתקדם בשגיאות HTTP ו-status codes שונים",
        points: 25,
        code: `# TODO: צור פונקציה handle_api_error
# TODO: טפל בסטטוס קודים שונים (4xx, 5xx)
# TODO: חלץ הודעות שגיאה מהתגובה
# TODO: צור exceptions מותאמים לסוגי שגיאות
# TODO: הוסף retry logic עם exponential backoff`,
        hint: `💡 טיפול בשגיאות API:
def handle_api_error(response):
    if 400 <= response.status_code < 600:
        try:
            error_data = response.json()
            message = error_data.get('message', 'Unknown error')
        except:
            message = response.text
        
        if response.status_code == 401:
            raise PermissionError(f"Unauthorized: {message}")
        elif response.status_code == 404:
            raise FileNotFoundError(f"Not Found: {message}")
        # וכו'...`,
        solution: `print("\\n=== טיפול בשגיאות API ===")

import time

# הגדרת חריגים מותאמים אישית
class APIError(Exception):
    \"\"\"חריג בסיס לשגיאות API\"\"\"
    def __init__(self, message, status_code=None, response=None):
        super().__init__(message)
        self.status_code = status_code
        self.response = response

class RateLimitError(APIError):
    \"\"\"חריג למגבלת קריאות\"\"\"
    pass

class AuthenticationError(APIError):
    \"\"\"חריג לבעיות אימות\"\"\"
    pass

class NotFoundError(APIError):
    \"\"\"חריג למשאב לא נמצא\"\"\"
    pass

class ServerError(APIError):
    \"\"\"חריג לשגיאות שרת\"\"\"
    pass

def handle_api_error(response):
    \"\"\"
    טיפול בשגיאות API בהתבסס על status codes.
    
    Args:
        response: אובייקט התגובה מ-requests
        
    Raises:
        APIError: חריגים מותאמים לפי סוג השגיאה
    \"\"\"
    if response.status_code < 400:
        return  # אין שגיאה
    
    # ניסיון לחלץ הודעת שגיאה מהתגובה
    error_message = f"HTTP {response.status_code}"
    
    try:
        error_data = response.json()
        if isinstance(error_data, dict):
            # חיפוש שדות נפוצים לשגיאות
            message = (error_data.get('message') or 
                      error_data.get('error') or 
                      error_data.get('detail') or
                      error_data.get('error_description'))
            if message:
                error_message = f"HTTP {response.status_code}: {message}"
    except:
        # אם לא ניתן לפענח JSON, נשתמש בטקסט
        if response.text:
            error_message = f"HTTP {response.status_code}: {response.text[:100]}"
    
    # העלאת חריגים ספציפיים לפי status code
    if response.status_code == 400:
        raise APIError(f"Bad Request - {error_message}", response.status_code, response)
    elif response.status_code == 401:
        raise AuthenticationError(f"Unauthorized - {error_message}", response.status_code, response)
    elif response.status_code == 403:
        raise AuthenticationError(f"Forbidden - {error_message}", response.status_code, response)
    elif response.status_code == 404:
        raise NotFoundError(f"Not Found - {error_message}", response.status_code, response)
    elif response.status_code == 429:
        raise RateLimitError(f"Rate Limited - {error_message}", response.status_code, response)
    elif 500 <= response.status_code < 600:
        raise ServerError(f"Server Error - {error_message}", response.status_code, response)
    else:
        raise APIError(error_message, response.status_code, response)

def retry_request(func, max_retries=3, backoff_factor=0.5, retry_status_codes=None):
    \"\"\"
    מנגנון retry עם exponential backoff.
    
    Args:
        func: הפונקציה לביצוע (lambda או partial)
        max_retries (int): מספר ניסיונות מקסימלי
        backoff_factor (float): גורם ההשהיה
        retry_status_codes (list): status codes לעשות retry עליהם
        
    Returns:
        תוצאת הפונקציה
    \"\"\"
    if retry_status_codes is None:
        retry_status_codes = [429, 500, 502, 503, 504]
    
    retries = 0
    while True:
        try:
            return func()
        except (APIError, Exception) as e:
            retries += 1
            if retries > max_retries:
                print(f"❌ מקסימום ניסיונות ({max_retries}) הושג - מוותר")
                raise
            
            # בדיקה אם צריך לעשות retry
            should_retry = False
            if hasattr(e, 'status_code') and e.status_code in retry_status_codes:
                should_retry = True
            elif isinstance(e, (ConnectionError, TimeoutError)):
                should_retry = True
            
            if not should_retry:
                raise
            
            # חישוב זמן השהייה עם exponential backoff
            delay = backoff_factor * (2 ** (retries - 1))
            print(f"⏳ ניסיון {retries} נכשל. ממתין {delay:.2f} שניות לפני ניסיון נוסף...")
            time.sleep(delay)

def safe_api_request(client, method, endpoint, **kwargs):
    \"\"\"
    ביצוע קריאת API עם טיפול בשגיאות מלא.
    
    Args:
        client (dict): API client
        method (str): HTTP method ('GET', 'POST', etc.)
        endpoint (str): API endpoint
        **kwargs: פרמטרים נוספים לקריאה
        
    Returns:
        dict: נתוני התגובה
    \"\"\"
    url = f"{client['base_url']}/{endpoint.lstrip('/')}"
    
    def make_request():
        print(f"🔄 ביצוע {method} request ל: {url}")
        
        # בחירת מתודה מתאימה
        if method.upper() == 'GET':
            response = client['session'].get(url, timeout=client['timeout'], **kwargs)
        elif method.upper() == 'POST':
            response = client['session'].post(url, timeout=client['timeout'], **kwargs)
        else:
            raise ValueError(f"מתודה לא נתמכת: {method}")
        
        # טיפול בשגיאות
        handle_api_error(response)
        
        return response.json()
    
    # ביצוע עם retry
    return retry_request(make_request, max_retries=3, backoff_factor=0.5)

# דוגמאות לטיפול בשגיאות
print("\\n🧪 בדיקת טיפול בשגיאות:")

# הדמיית תגובות שגיאה
class ErrorResponse:
    def __init__(self, status_code, error_message=None):
        self.status_code = status_code
        self.text = error_message or f"Error {status_code}"
        
    def json(self):
        if self.status_code == 401:
            return {"message": "Invalid API key"}
        elif self.status_code == 404:
            return {"error": "Resource not found"}
        elif self.status_code == 429:
            return {"message": "Rate limit exceeded", "retry_after": 60}
        elif self.status_code == 500:
            return {"error": "Internal server error"}
        return {"message": "Unknown error"}

# בדיקת סוגי שגיאות שונים
error_cases = [
    (400, "Bad Request"),
    (401, "Unauthorized"),
    (404, "Not Found"),
    (429, "Rate Limited"),
    (500, "Server Error")
]

for status_code, description in error_cases:
    try:
        print(f"\\n🔍 בדיקת שגיאה {status_code} ({description}):")
        error_response = ErrorResponse(status_code)
        handle_api_error(error_response)
        print("   ⚠️ לא הועלה חריג - זה לא צפוי")
    except AuthenticationError as e:
        print(f"   🔐 שגיאת אימות: {e}")
    except NotFoundError as e:
        print(f"   🔍 לא נמצא: {e}")
    except RateLimitError as e:
        print(f"   ⏳ מגבלת קריאות: {e}")
    except ServerError as e:
        print(f"   🖥️ שגיאת שרת: {e}")
    except APIError as e:
        print(f"   ❌ שגיאת API כללית: {e}")

print("\\n💡 טיפים לטיפול בשגיאות API:")
print("   - תמיד בדוק status codes")
print("   - מממן retry logic למקרים מתאימים")
print("   - לוג שגיאות למעקב ודיבוג")
print("   - ספק הודעות שגיאה ברורות למשתמש")
print("   - הגדר timeouts מתאימים")
print("   - טפל בשגיאות רשת (connection errors)")

# הדגמת retry logic
print("\\n🔄 הדגמת Retry Logic:")

retry_count = 0
def failing_request():
    global retry_count
    retry_count += 1
    if retry_count < 3:
        raise RateLimitError("מגבלת קריאות", 429)
    return {"success": True, "attempt": retry_count}

try:
    retry_count = 0  # איפוס המונה
    result = retry_request(failing_request, max_retries=5, backoff_factor=0.1)
    print(f"✅ Request הצליח באיטרציה {result['attempt']}")
except Exception as e:
    print(f"❌ Request נכשל: {e}")`
      },
      {
        id: "task3",
        title: "בניית API wrapper מתקדם",
        description: "צור wrapper class עם מתודות לכל פעולות CRUD ו-authentication",
        points: 35,
        code: `# TODO: צור מחלקת GitHubAPI או דומה
# TODO: הוסף מתודות לפעולות GET, POST, PUT, DELETE
# TODO: מימן authentication (API key, Bearer token)
# TODO: הוסף caching פשוט לתגובות
# TODO: צור מתודות עזר לפעולות נפוצות (get_user, create_repo)`,
        hint: `💡 API Wrapper Class:
class GitHubAPI:
    def __init__(self, token=None):
        self.base_url = "https://api.github.com"
        self.session = requests.Session()
        if token:
            self.session.headers['Authorization'] = f"Bearer {token}"
    
    def get_user(self, username):
        return self._get(f"/users/{username}")
    
    def _get(self, endpoint):
        response = self.session.get(f"{self.base_url}{endpoint}")
        response.raise_for_status()
        return response.json()`,
        solution: `print("\\n=== בניית API Wrapper מתקדם ===")

import time
from typing import Optional, Dict, Any

class APIWrapper:
    \"\"\"
    Wrapper מתקדם לעבודה עם APIs עם תכונות מתקדמות.
    \"\"\"
    
    def __init__(self, base_url: str, api_key: Optional[str] = None, timeout: int = 30):
        \"\"\"
        אתחול ה-API wrapper.
        
        Args:
            base_url (str): URL בסיס של ה-API
            api_key (str, optional): מפתח API לאימות
            timeout (int): timeout לקריאות
        \"\"\"
        self.base_url = base_url.rstrip('/')
        self.session = MockSession()  # בסביבה אמיתית: requests.Session()
        self.timeout = timeout
        self.cache = {}  # cache פשוט
        self.cache_ttl = 300  # 5 דקות
        
        # הגדרת headers בסיסיים
        self.session.headers.update({
            'User-Agent': 'Python-API-Wrapper/1.0',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
        
        # הגדרת אימות
        if api_key:
            self.session.headers['Authorization'] = f"Bearer {api_key}"
        
        # סטטיסטיקות
        self.stats = {
            'requests_made': 0,
            'cache_hits': 0,
            'errors': 0,
            'start_time': time.time()
        }
        
        print(f"🔧 API Wrapper נוצר עבור: {base_url}")
    
    def _get_cache_key(self, method: str, endpoint: str, params: Optional[Dict] = None) -> str:
        \"\"\"יצירת מפתח cache ייחודי\"\"\"
        key_parts = [method.upper(), endpoint]
        if params:
            # המרת params למחרוזת סדורה
            sorted_params = sorted(params.items())
            key_parts.append(str(sorted_params))
        return ':'.join(key_parts)
    
    def _get_from_cache(self, cache_key: str) -> Optional[Dict]:
        \"\"\"שליפה מ-cache עם בדיקת TTL\"\"\"
        if cache_key in self.cache:
            cached_item = self.cache[cache_key]
            if time.time() - cached_item['timestamp'] < self.cache_ttl:
                self.stats['cache_hits'] += 1
                print(f"💾 נמצא ב-cache: {cache_key}")
                return cached_item['data']
            else:
                # Cache expired
                del self.cache[cache_key]
        return None
    
    def _save_to_cache(self, cache_key: str, data: Dict):
        \"\"\"שמירה ב-cache\"\"\"
        self.cache[cache_key] = {
            'data': data,
            'timestamp': time.time()
        }
    
    def _make_request(self, method: str, endpoint: str, **kwargs) -> Dict[str, Any]:
        \"\"\"
        ביצוע קריאת HTTP בסיסית.
        
        Args:
            method (str): HTTP method
            endpoint (str): API endpoint
            **kwargs: פרמטרים נוספים
            
        Returns:
            dict: תגובת ה-API
        \"\"\"
        url = f"{self.base_url}/{endpoint.lstrip('/')}"
        cache_key = self._get_cache_key(method, endpoint, kwargs.get('params'))
        
        # בדיקת cache לקריאות GET
        if method.upper() == 'GET':
            cached_result = self._get_from_cache(cache_key)
            if cached_result:
                return cached_result
        
        try:
            self.stats['requests_made'] += 1
            print(f"🌐 {method.upper()} {url}")
            
            # ביצוע הקריאה בהתאם למתודה
            if method.upper() == 'GET':
                response = self.session.get(url, timeout=self.timeout, **kwargs)
            elif method.upper() == 'POST':
                response = self.session.post(url, timeout=self.timeout, **kwargs)
            elif method.upper() == 'PUT':
                response = self.session.put(url, timeout=self.timeout, **kwargs)
            elif method.upper() == 'DELETE':
                response = self.session.delete(url, timeout=self.timeout, **kwargs)
            else:
                raise ValueError(f"HTTP method לא נתמך: {method}")
            
            # טיפול בשגיאות
            handle_api_error(response)
            
            # עיבוד התגובה
            if response.text:
                result = response.json()
            else:
                result = {'success': True}
            
            # שמירה ב-cache לקריאות GET מוצלחות
            if method.upper() == 'GET':
                self._save_to_cache(cache_key, result)
            
            return result
            
        except Exception as e:
            self.stats['errors'] += 1
            print(f"❌ שגיאה בקריאה: {str(e)}")
            raise
    
    def get(self, endpoint: str, params: Optional[Dict] = None) -> Dict[str, Any]:
        \"\"\"ביצוע GET request\"\"\"
        return self._make_request('GET', endpoint, params=params)
    
    def post(self, endpoint: str, data: Optional[Dict] = None, json_data: Optional[Dict] = None) -> Dict[str, Any]:
        \"\"\"ביצוע POST request\"\"\"
        kwargs = {}
        if json_data:
            kwargs['json'] = json_data
        elif data:
            kwargs['data'] = data
        return self._make_request('POST', endpoint, **kwargs)
    
    def put(self, endpoint: str, data: Optional[Dict] = None, json_data: Optional[Dict] = None) -> Dict[str, Any]:
        \"\"\"ביצוע PUT request\"\"\"
        kwargs = {}
        if json_data:
            kwargs['json'] = json_data
        elif data:
            kwargs['data'] = data
        return self._make_request('PUT', endpoint, **kwargs)
    
    def delete(self, endpoint: str) -> Dict[str, Any]:
        \"\"\"ביצוע DELETE request\"\"\"
        return self._make_request('DELETE', endpoint)
    
    def clear_cache(self):
        \"\"\"ניקוי cache\"\"\"
        self.cache.clear()
        print("🧹 Cache נוקה")
    
    def get_stats(self) -> Dict[str, Any]:
        \"\"\"קבלת סטטיסטיקות השימוש\"\"\"
        uptime = time.time() - self.stats['start_time']
        cache_hit_rate = (self.stats['cache_hits'] / max(self.stats['requests_made'], 1)) * 100
        
        return {
            'uptime_seconds': round(uptime, 2),
            'requests_made': self.stats['requests_made'],
            'cache_hits': self.stats['cache_hits'],
            'cache_hit_rate': round(cache_hit_rate, 1),
            'errors': self.stats['errors'],
            'cache_entries': len(self.cache)
        }

class GitHubAPIWrapper(APIWrapper):
    \"\"\"Wrapper מיוחד ל-GitHub API\"\"\"
    
    def __init__(self, token: Optional[str] = None):
        super().__init__("https://api.github.com", token)
    
    def get_user(self, username: str) -> Dict[str, Any]:
        \"\"\"קבלת מידע על משתמש\"\"\"
        return self.get(f"/users/{username}")
    
    def get_user_repos(self, username: str, per_page: int = 30) -> Dict[str, Any]:
        \"\"\"קבלת repositories של משתמש\"\"\"
        return self.get(f"/users/{username}/repos", params={"per_page": per_page})
    
    def create_repo(self, name: str, description: str = "", private: bool = False) -> Dict[str, Any]:
        \"\"\"יצירת repository חדש\"\"\"
        data = {
            "name": name,
            "description": description,
            "private": private
        }
        return self.post("/user/repos", json_data=data)
    
    def get_repo(self, owner: str, repo: str) -> Dict[str, Any]:
        \"\"\"קבלת מידע על repository\"\"\"
        return self.get(f"/repos/{owner}/{repo}")
    
    def search_repositories(self, query: str, sort: str = "stars") -> Dict[str, Any]:
        \"\"\"חיפוש repositories\"\"\"
        params = {
            "q": query,
            "sort": sort
        }
        return self.get("/search/repositories", params=params)

# דוגמאות שימוש
print("\\n🚀 דוגמאות API Wrapper:")

# API wrapper כללי
print("\\n1️⃣ API Wrapper כללי:")
api = APIWrapper("https://jsonplaceholder.typicode.com")

try:
    # GET request עם cache
    posts = api.get("/posts", params={"_limit": 3})
    print(f"✅ נמצאו {len(posts)} פוסטים")
    
    # קריאה נוספת (צריכה להשתמש ב-cache)
    posts_cached = api.get("/posts", params={"_limit": 3})
    print(f"🔄 קריאה נוספת - נמצאו {len(posts_cached)} פוסטים")
    
    # POST request
    new_post = {
        "title": "פוסט חדש",
        "body": "תוכן הפוסט החדש",
        "userId": 1
    }
    created = api.post("/posts", json_data=new_post)
    print(f"📝 פוסט נוצר עם ID: {created.get('id', 'Unknown')}")
    
except Exception as e:
    print(f"❌ שגיאה: {e}")

# GitHub API wrapper מיוחד
print("\\n2️⃣ GitHub API Wrapper:")
github = GitHubAPIWrapper()  # ללא token למטרות הדגמה

try:
    # חיפוש repositories
    search_results = github.search_repositories("python", sort="stars")
    print(f"🔍 נמצאו repositories בחיפוש Python")
    
    # מידע על משתמש (מדומה)
    user_info = github.get_user("octocat")
    print(f"👤 מידע משתמש התקבל")
    
except Exception as e:
    print(f"❌ שגיאה ב-GitHub API: {e}")

# הצגת סטטיסטיקות
print("\\n📊 סטטיסטיקות השימוש:")
for name, wrapper in [("API כללי", api), ("GitHub", github)]:
    stats = wrapper.get_stats()
    print(f"\\n{name}:")
    print(f"   ⏱️ זמן פעילות: {stats['uptime_seconds']} שניות")
    print(f"   📡 קריאות: {stats['requests_made']}")
    print(f"   💾 פגיעות cache: {stats['cache_hits']} ({stats['cache_hit_rate']}%)")
    print(f"   ❌ שגיאות: {stats['errors']}")
    print(f"   🗄️ רשומות cache: {stats['cache_entries']}")

print("\\n💡 יתרונות API Wrapper:")
print("   ✅ אימות מרכזי ואוטומטי")
print("   ✅ טיפול בשגיאות מובנה")
print("   ✅ Caching לשיפור ביצועים")
print("   ✅ Retry logic מובנה")
print("   ✅ סטטיסטיקות ומעקב")
print("   ✅ API נוח ועקבי")
print("   ✅ הרחבה קלה לשירותים ספציפיים")`
      }
    ]
  },
  {
    id: 11,
    title: "פיתוח כלי CLI מתקדם ב-Python",
    description: "בניית אפליקציות שורת פקודה מקצועיות - עמוד השדרה של אוטומציה DevOps",
    objectives: [
      "עיצוב ממשקי שורת פקודה אינטואיטיביים ונוחים",
      "שימוש ב-argparse לבניית כלי CLI חזקים",
      "מימוש subcommands לפונקציונליות מורכבת",
      "הוספת תיעוד עזרה ודוגמאות מקיפות",
      "יצירת פלט צבעוני וידידותי למשתמש",
      "טיפול בקלט משתמש ואימות נתונים",
      "הגדרת exit codes מתאימים לאוטומציה",
      "אריזת כלי CLI להפצה ושיתוף"
    ],
    duration: "150 דקות",
    difficulty: "advanced",
    prerequisites: ["מעבדה 10 - אינטראקציה עם APIs"],
    icon: <Terminal className="w-8 h-8" />,
    color: "from-gray-700 to-slate-800",
    tasks: [
      {
        id: "task1",
        title: "הגדרת מבנה CLI בסיסי",
        description: "צור מבנה CLI עם argparse, subcommands וקבוצות פקודות",
        points: 25,
        code: `# TODO: ייבא argparse ו-sys
# TODO: צור פונקציה create_parser עם תיאור התוכנית
# TODO: הוסף global options כמו --verbose ו--version
# TODO: צור subparsers לקבוצות פקודות שונות
# TODO: הגדר פונקציה parse_args ו-run_cli`,
        hint: `💡 CLI בסיסי עם argparse:
import argparse

def create_parser():
    parser = argparse.ArgumentParser(
        prog="devops-cli",
        description="כלי DevOps לאוטומציה"
    )
    
    parser.add_argument("-v", "--verbose", action="count", default=0)
    parser.add_argument("--version", action="version", version="1.0.0")
    
    subparsers = parser.add_subparsers(dest="command")
    subparsers.required = True
    
    return parser`,
        solution: `print("=== פיתוח כלי CLI מתקדם ===")

import argparse
import sys
import os
from typing import Optional, List, Dict, Any

class CLIColors:
    \"\"\"מחלקה לצבעים בטרמינל\"\"\"
    
    # צבעי טקסט
    RED = '\\033[91m'
    GREEN = '\\033[92m'
    YELLOW = '\\033[93m'
    BLUE = '\\033[94m'
    MAGENTA = '\\033[95m'
    CYAN = '\\033[96m'
    WHITE = '\\033[97m'
    
    # עיצוב
    BOLD = '\\033[1m'
    UNDERLINE = '\\033[4m'
    
    # איפוס
    RESET = '\\033[0m'
    
    @classmethod
    def colored(cls, text: str, color: str) -> str:
        \"\"\"החזרת טקסט צבעוני\"\"\"
        return f"{color}{text}{cls.RESET}"
    
    @classmethod
    def success(cls, text: str) -> str:
        return cls.colored(f"✅ {text}", cls.GREEN)
    
    @classmethod
    def error(cls, text: str) -> str:
        return cls.colored(f"❌ {text}", cls.RED)
    
    @classmethod
    def warning(cls, text: str) -> str:
        return cls.colored(f"⚠️  {text}", cls.YELLOW)
    
    @classmethod
    def info(cls, text: str) -> str:
        return cls.colored(f"ℹ️  {text}", cls.BLUE)

def create_parser():
    \"\"\"
    יצירת parser ראשי עם subcommands.
    
    Returns:
        argparse.ArgumentParser: Parser מוגדר
    \"\"\"
    # יצירת parser ראשי
    parser = argparse.ArgumentParser(
        prog="devops-cli",
        description="כלי DevOps מתקדם לאוטומציה ותפעול",
        epilog="לעזרה נוספת עבור פקודה ספציפית, השתמש ב: devops-cli <command> --help",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    
    # הוספת אפשרויות גלובליות
    parser.add_argument(
        "-v", "--verbose",
        action="count",
        default=0,
        help="הגברת רמת הדיווח (ניתן לחזור: -v, -vv, -vvv)"
    )
    
    parser.add_argument(
        "--version",
        action="version",
        version="%(prog)s 1.0.0"
    )
    
    parser.add_argument(
        "--config",
        type=str,
        metavar="FILE",
        help="נתיב לקובץ קונפיגורציה"
    )
    
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="הרצה לא אמיתית - הצגת פעולות בלבד"
    )
    
    # יצירת subparsers
    subparsers = parser.add_subparsers(
        title="פקודות זמינות",
        dest="command",
        help="פקודות שניתן לבצע",
        metavar="<command>"
    )
    subparsers.required = True
    
    # הוספת קבוצות פקודות
    setup_server_commands(subparsers)
    setup_monitor_commands(subparsers)
    setup_deploy_commands(subparsers)
    
    return parser

def setup_server_commands(subparsers):
    \"\"\"הגדרת פקודות ניהול שרתים\"\"\"
    
    # parser עבור פקודות שרת
    server_parser = subparsers.add_parser(
        "server",
        help="ניהול שרתים",
        description="פקודות לניהול ותפעול שרתים"
    )
    
    server_subparsers = server_parser.add_subparsers(
        title="פקודות שרת",
        dest="server_command",
        help="פעולות על שרתים"
    )
    server_subparsers.required = True
    
    # פקודת status
    status_parser = server_subparsers.add_parser(
        "status",
        help="בדיקת סטטוס שרתים",
        description="בדיקה ותצוגת סטטוס של שרת או כל השרתים"
    )
    status_parser.add_argument(
        "name",
        nargs="?",
        help="שם השרת לבדיקה (ריק עבור כל השרתים)"
    )
    status_parser.add_argument(
        "--format",
        choices=["table", "json", "csv"],
        default="table",
        help="פורמט התצוגה"
    )
    status_parser.set_defaults(func=server_status_command)
    
    # פקודת start
    start_parser = server_subparsers.add_parser(
        "start",
        help="הפעלת שרת",
        description="הפעלת שרת ספציפי"
    )
    start_parser.add_argument(
        "name",
        help="שם השרת להפעלה"
    )
    start_parser.add_argument(
        "-f", "--force",
        action="store_true",
        help="הפעלה כפויה ללא אישור"
    )
    start_parser.add_argument(
        "--timeout",
        type=int,
        default=300,
        help="זמן המתנה מקסימלי בשניות"
    )
    start_parser.set_defaults(func=server_start_command)
    
    # פקודת stop
    stop_parser = server_subparsers.add_parser(
        "stop",
        help="עצירת שרת",
        description="עצירת שרת ספציפי"
    )
    stop_parser.add_argument(
        "name",
        help="שם השרת לעצירה"
    )
    stop_parser.add_argument(
        "-f", "--force",
        action="store_true",
        help="עצירה כפויה ללא אישור"
    )
    stop_parser.add_argument(
        "-g", "--graceful",
        action="store_true",
        help="עצירה חלקה (graceful shutdown)"
    )
    stop_parser.set_defaults(func=server_stop_command)

def setup_monitor_commands(subparsers):
    \"\"\"הגדרת פקודות ניטור\"\"\"
    
    monitor_parser = subparsers.add_parser(
        "monitor",
        help="ניטור מערכת",
        description="פקודות לניטור משאבי מערכת"
    )
    
    monitor_subparsers = monitor_parser.add_subparsers(
        title="פקודות ניטור",
        dest="monitor_command",
        help="סוגי ניטור"
    )
    monitor_subparsers.required = True
    
    # ניטור CPU
    cpu_parser = monitor_subparsers.add_parser(
        "cpu",
        help="ניטור מעבד",
        description="ניטור ותצוגת מידע על המעבד"
    )
    cpu_parser.add_argument(
        "--interval",
        type=int,
        default=1,
        help="מרווח בדיקה בשניות"
    )
    cpu_parser.add_argument(
        "--per-core",
        action="store_true",
        help="הצגת נתונים לכל ליבה"
    )
    cpu_parser.set_defaults(func=monitor_cpu_command)
    
    # ניטור זיכרון
    memory_parser = monitor_subparsers.add_parser(
        "memory",
        help="ניטור זיכרון",
        description="ניטור ותצוגת מידע על הזיכרון"
    )
    memory_parser.add_argument(
        "--unit",
        choices=["B", "KB", "MB", "GB"],
        default="GB",
        help="יחידת התצוגה"
    )
    memory_parser.set_defaults(func=monitor_memory_command)

def setup_deploy_commands(subparsers):
    \"\"\"הגדרת פקודות deployment\"\"\"
    
    deploy_parser = subparsers.add_parser(
        "deploy",
        help="פריסת אפליקציות",
        description="פקודות לפריסת אפליקציות"
    )
    
    deploy_parser.add_argument(
        "application",
        help="שם האפליקציה לפריסה"
    )
    deploy_parser.add_argument(
        "--environment",
        choices=["dev", "staging", "production"],
        default="dev",
        help="סביבת הפריסה"
    )
    deploy_parser.add_argument(
        "--version",
        help="גרסת האפליקציה"
    )
    deploy_parser.add_argument(
        "--rollback",
        action="store_true",
        help="חזרה לגרסה קודמת"
    )
    deploy_parser.set_defaults(func=deploy_command)

# פונקציות פקודה
def server_status_command(args):
    \"\"\"מימוש פקודת server status\"\"\"
    if args.verbose >= 1:
        print(CLIColors.info(f"בדיקת סטטוס שרתים (פורמט: {args.format})"))
    
    # מדמה נתוני שרתים
    servers = {
        "web-01": {"status": "running", "cpu": "45%", "memory": "2.1GB", "uptime": "7d 3h"},
        "db-01": {"status": "running", "cpu": "12%", "memory": "4.8GB", "uptime": "14d 8h"},
        "cache-01": {"status": "stopped", "cpu": "0%", "memory": "0GB", "uptime": "0d 0h"}
    }
    
    if args.name:
        # בדיקת שרת ספציפי
        if args.name in servers:
            server = servers[args.name]
            print(CLIColors.info(f"סטטוס שרת {args.name}:"))
            print(f"   סטטוס: {server['status']}")
            print(f"   CPU: {server['cpu']}")
            print(f"   זיכרון: {server['memory']}")
            print(f"   זמן פעילות: {server['uptime']}")
            
            if server['status'] == 'running':
                print(CLIColors.success(f"שרת {args.name} פועל תקין"))
                return 0
            else:
                print(CLIColors.warning(f"שרת {args.name} לא פועל"))
                return 1
        else:
            print(CLIColors.error(f"שרת '{args.name}' לא נמצא"))
            return 1
    else:
        # תצוגת כל השרתים
        print(CLIColors.info("סטטוס כל השרתים:"))
        
        if args.format == "table":
            print(f"{'שרת':<10} {'סטטוס':<10} {'CPU':<8} {'זיכרון':<10} {'זמן פעילות':<15}")
            print("-" * 55)
            for name, server in servers.items():
                status_color = CLIColors.GREEN if server['status'] == 'running' else CLIColors.RED
                status_text = CLIColors.colored(server['status'], status_color)
                print(f"{name:<10} {status_text:<20} {server['cpu']:<8} {server['memory']:<10} {server['uptime']:<15}")
        
        elif args.format == "json":
            import json
            print(json.dumps(servers, indent=2, ensure_ascii=False))
        
        running_count = sum(1 for s in servers.values() if s['status'] == 'running')
        total = len(servers)
        
        if running_count == total:
            print(CLIColors.success(f"כל השרתים פועלים ({running_count}/{total})"))
            return 0
        else:
            print(CLIColors.warning(f"חלק מהשרתים לא פועלים ({running_count}/{total})"))
            return 0

def server_start_command(args):
    \"\"\"מימוש פקודת server start\"\"\"
    print(CLIColors.info(f"מפעיל שרת: {args.name}"))
    
    if args.dry_run:
        print(CLIColors.warning("מצב dry-run - לא מבצע פעולה אמיתית"))
        return 0
    
    if not args.force:
        response = input(f"האם אתה בטוח שברצונך להפעיל את {args.name}? [y/N]: ")
        if response.lower() not in ['y', 'yes']:
            print(CLIColors.info("פעולה בוטלה"))
            return 0
    
    # סימולציה של הפעלה
    print(CLIColors.info("מבצע רצף הפעלה..."))
    import time
    for i in range(3):
        print(f"   שלב {i+1}/3 הושלם")
        time.sleep(0.2)
    
    print(CLIColors.success(f"שרת {args.name} הופעל בהצלחה"))
    return 0

def server_stop_command(args):
    \"\"\"מימוש פקודת server stop\"\"\"
    print(CLIColors.info(f"עוצר שרת: {args.name}"))
    
    if args.dry_run:
        print(CLIColors.warning("מצב dry-run - לא מבצע פעולה אמיתית"))
        return 0
    
    if not args.force:
        warning_msg = f"האם אתה בטוח שברצונך לעצור את {args.name}?"
        if args.graceful:
            warning_msg += " (עצירה חלקה)"
        warning_msg += " [y/N]: "
        
        response = input(warning_msg)
        if response.lower() not in ['y', 'yes']:
            print(CLIColors.info("פעולה בוטלה"))
            return 0
    
    if args.graceful:
        print(CLIColors.info("מבצע עצירה חלקה..."))
        print("   ממתין לסיום חיבורים פעילים...")
    
    print(CLIColors.success(f"שרת {args.name} נעצר בהצלחה"))
    return 0

def monitor_cpu_command(args):
    \"\"\"מימוש פקודת monitor cpu\"\"\"
    print(CLIColors.info(f"ניטור מעבד (מרוול: {args.interval} שניות)"))
    
    # נתונים מדומים
    if args.per_core:
        print("שימוש לליבה:")
        for i in range(4):  # 4 ליבות לדוגמה
            usage = 15 + i * 10 + (i * 3) % 20
            print(f"   ליבה {i}: {usage}%")
    
    print(f"שימוש כללי במעבד: 35.2%")
    print(f"תדירות: 2.8 GHz")
    print(f"טמפרטורה: 45°C")
    
    print(CLIColors.success("ניטור מעבד הושלם"))
    return 0

def monitor_memory_command(args):
    \"\"\"מימוש פקודת monitor memory\"\"\"
    print(CLIColors.info(f"ניטור זיכרון (יחידה: {args.unit})"))
    
    # המרת נתונים ליחידה המבוקשת
    total_mb = 8192  # 8GB
    used_mb = 3072   # 3GB
    
    conversions = {"B": 1024*1024, "KB": 1024, "MB": 1, "GB": 1/1024}
    factor = conversions[args.unit]
    
    total = total_mb * factor
    used = used_mb * factor
    free = total - used
    usage_percent = (used / total) * 100
    
    print(f"זיכרון כולל: {total:.1f} {args.unit}")
    print(f"בשימוש: {used:.1f} {args.unit} ({usage_percent:.1f}%)")
    print(f"פנוי: {free:.1f} {args.unit}")
    
    if usage_percent > 80:
        print(CLIColors.warning("שימוש גבוה בזיכרון!"))
    else:
        print(CLIColors.success("שימוש תקין בזיכרון"))
    
    return 0

def deploy_command(args):
    \"\"\"מימוש פקודת deploy\"\"\"
    if args.rollback:
        print(CLIColors.info(f"מבצע rollback לאפליקציה {args.application}"))
    else:
        version_text = f" גרסה {args.version}" if args.version else ""
        print(CLIColors.info(f"פורס אפליקציה {args.application}{version_text} לסביבת {args.environment}"))
    
    if args.dry_run:
        print(CLIColors.warning("מצב dry-run - מציג פעולות בלבד"))
        print("   1. בדיקת dependency")
        print("   2. בניית אפליקציה")
        print("   3. פריסה לשרתים")
        print("   4. בדיקת תקינות")
        return 0
    
    # סימולציה של deployment
    steps = ["בדיקת תלויות", "בניית אפליקציה", "פריסה", "בדיקת תקינות"]
    for i, step in enumerate(steps, 1):
        print(f"   {i}. {step}...")
        import time
        time.sleep(0.3)
    
    print(CLIColors.success(f"פריסת {args.application} הושלמה בהצלחה"))
    return 0

def parse_args(args=None):
    \"\"\"פענוח ארגומנטים\"\"\"
    parser = create_parser()
    parsed_args = parser.parse_args(args)
    
    # הגדרת רמת דיווח
    if parsed_args.verbose >= 3:
        print(CLIColors.info("מצב debug מופעל (רמת דיווח 3)"))
    
    return parsed_args

def run_cli(args=None):
    \"\"\"הרצת ה-CLI\"\"\"
    try:
        parsed_args = parse_args(args)
        
        # הצגת מידע כללי
        if parsed_args.verbose >= 2:
            print(CLIColors.info(f"פקודה: {parsed_args.command}"))
            if hasattr(parsed_args, 'dry_run') and parsed_args.dry_run:
                print(CLIColors.warning("מצב Dry-run מופעל"))
        
        # ביצוע הפקודה
        if hasattr(parsed_args, 'func'):
            return parsed_args.func(parsed_args)
        else:
            print(CLIColors.error(f"לא נמצא מטפל לפקודה '{parsed_args.command}'"))
            return 1
            
    except KeyboardInterrupt:
        print(CLIColors.warning("\\nפעולה בוטלה על ידי משתמש"))
        return 130
    except Exception as e:
        print(CLIColors.error(f"שגיאה: {str(e)}"))
        return 1

# דוגמאות לשימוש
if __name__ == "__main__":
    print("\\n🛠️ דוגמאות לכלי CLI:")
    
    # הדגמת פקודות שונות
    test_commands = [
        ["server", "status"],
        ["server", "status", "web-01"],
        ["monitor", "cpu", "--per-core"],
        ["deploy", "my-app", "--environment", "staging", "--dry-run"],
        ["--help"]
    ]
    
    for i, cmd in enumerate(test_commands, 1):
        print(f"\\n{i}️⃣ פקודה: devops-cli {' '.join(cmd)}")
        print("-" * 50)
        
        try:
            exit_code = run_cli(cmd)
            if exit_code == 0:
                print(CLIColors.success(f"פקודה הושלמה בהצלחה (קוד יציאה: {exit_code})"))
            else:
                print(CLIColors.warning(f"פקודה הושלמה עם שגיאות (קוד יציאה: {exit_code})"))
        except SystemExit:
            # argparse יוצא אוטומטית עם --help
            pass
        except Exception as e:
            print(CLIColors.error(f"שגיאה: {e}"))`
      },
      {
        id: "task2",
        title: "הוספת תכונות ויזואליות מתקדמות",
        description: "הוסף progress bars, טבלאות מעוצבות וצבעים אינטראקטיביים",
        points: 30,
        code: `# TODO: צור מחלקה ProgressBar פשוטה
# TODO: הוסף פונקציה format_table ליצירת טבלאות
# TODO: מימן confirm_action עם צבעים
# TODO: הוסף spinner לפעולות ארוכות
# TODO: צור banner/header מעוצב לתוכנית`,
        hint: `💡 תכונות ויזואליות:
class ProgressBar:
    def __init__(self, total, width=50):
        self.total = total
        self.width = width
        self.current = 0
    
    def update(self, value):
        self.current = value
        percent = (value / self.total) * 100
        filled = int((value / self.total) * self.width)
        bar = "█" * filled + "░" * (self.width - filled)
        print(f"\\r[{bar}] {percent:.1f}%", end="", flush=True)`,
        solution: `print("\\n=== תכונות ויזואליות מתקדמות ===")

import time
import threading
from typing import Optional, List, Union

class ProgressBar:
    \"\"\"Progress bar פשוט וגמיש\"\"\"
    
    def __init__(self, total: int, width: int = 50, title: str = ""):
        self.total = total
        self.width = width
        self.title = title
        self.current = 0
        self.start_time = time.time()
    
    def update(self, value: int, message: str = ""):
        \"\"\"עדכון ה-progress bar\"\"\"
        self.current = min(value, self.total)
        percent = (self.current / self.total) * 100
        filled = int((self.current / self.total) * self.width)
        
        # יצירת הבר הויזואלי
        bar = "█" * filled + "░" * (self.width - filled)
        
        # חישוב זמן נותר
        elapsed = time.time() - self.start_time
        if self.current > 0:
            eta = (elapsed / self.current) * (self.total - self.current)
            eta_str = f" ETA: {eta:.1f}s"
        else:
            eta_str = ""
        
        # הצגת הבר
        title_part = f"{self.title}: " if self.title else ""
        message_part = f" - {message}" if message else ""
        
        print(f"\\r{title_part}[{bar}] {percent:.1f}%{eta_str}{message_part}", 
              end="", flush=True)
        
        if self.current >= self.total:
            print()  # שורה חדשה בסיום
    
    def finish(self, message: str = "הושלם"):
        \"\"\"סיום ה-progress bar\"\"\"
        self.update(self.total, message)

class Spinner:
    \"\"\"Spinner אנימציה לפעולות ארוכות\"\"\"
    
    def __init__(self, message: str = "עובד", frames: Optional[List[str]] = None):
        self.message = message
        self.frames = frames or ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]
        self.running = False
        self.thread = None
        self.frame_index = 0
    
    def _spin(self):
        \"\"\"הרצת האנימציה\"\"\"
        while self.running:
            frame = self.frames[self.frame_index % len(self.frames)]
            print(f"\\r{frame} {self.message}...", end="", flush=True)
            self.frame_index += 1
            time.sleep(0.1)
    
    def start(self):
        \"\"\"התחלת ה-spinner\"\"\"
        if not self.running:
            self.running = True
            self.thread = threading.Thread(target=self._spin)
            self.thread.daemon = True
            self.thread.start()
    
    def stop(self, final_message: str = ""):
        \"\"\"עצירת ה-spinner\"\"\"
        self.running = False
        if self.thread:
            self.thread.join()
        
        # ניקוי השורה
        print(f"\\r{' ' * (len(self.message) + 10)}", end="")
        if final_message:
            print(f"\\r{final_message}")
        else:
            print("\\r", end="")

def format_table(headers: List[str], rows: List[List[str]], 
                title: str = "", min_width: int = 10) -> str:
    \"\"\"
    יצירת טבלה מעוצבת.
    
    Args:
        headers: כותרות הטבלה
        rows: שורות הנתונים
        title: כותרת הטבלה
        min_width: רוחב מינימלי לעמודה
        
    Returns:
        str: הטבלה המעוצבת
    \"\"\"
    if not headers or not rows:
        return "אין נתונים להצגה"
    
    # חישוב רוחב עמודות
    col_widths = []
    for i, header in enumerate(headers):
        max_width = max(len(header), min_width)
        for row in rows:
            if i < len(row):
                max_width = max(max_width, len(str(row[i])))
        col_widths.append(max_width)
    
    # יצירת קווי מסגרת
    total_width = sum(col_widths) + (len(headers) - 1) * 3 + 4
    border_line = "─" * total_width
    header_line = "═" * total_width
    
    # בניית הטבלה
    lines = []
    
    # כותרת
    if title:
        title_line = f"┌─ {title} " + "─" * (total_width - len(title) - 5) + "┐"
        lines.append(title_line)
    
    # קו עליון
    lines.append("┌" + "─" * (total_width - 2) + "┐")
    
    # כותרות
    header_parts = []
    for i, header in enumerate(headers):
        header_parts.append(header.ljust(col_widths[i]))
    header_row = "│ " + " │ ".join(header_parts) + " │"
    lines.append(header_row)
    
    # קו מפריד
    separator_parts = []
    for width in col_widths:
        separator_parts.append("═" * width)
    separator_line = "├" + "═╪═".join(separator_parts) + "┤"
    lines.append(separator_line)
    
    # שורות נתונים
    for row in rows:
        row_parts = []
        for i, cell in enumerate(row):
            if i < len(col_widths):
                row_parts.append(str(cell).ljust(col_widths[i]))
        data_row = "│ " + " │ ".join(row_parts) + " │"
        lines.append(data_row)
    
    # קו תחתון
    lines.append("└" + "─" * (total_width - 2) + "┘")
    
    return "\\n".join(lines)

def confirm_action(message: str, default: bool = False) -> bool:
    \"\"\"
    בקשת אישור מהמשתמש עם צבעים.
    
    Args:
        message: ההודעה להצגה
        default: ערך ברירת מחדל
        
    Returns:
        bool: True אם המשתמש אישר
    \"\"\"
    options = "[Y/n]" if default else "[y/N]"
    colored_message = CLIColors.colored(f"⚠️  {message} {options}: ", CLIColors.YELLOW)
    
    while True:
        try:
            response = input(colored_message).strip().lower()
            
            if not response:
                return default
            elif response in ['y', 'yes', 'כן']:
                return True
            elif response in ['n', 'no', 'לא']:
                return False
            else:
                print(CLIColors.error("אנא ענה ב-'y' (כן) או 'n' (לא)"))
        except KeyboardInterrupt:
            print(CLIColors.warning("\\nפעולה בוטלה"))
            return False

def create_banner(title: str, subtitle: str = "", width: int = 60) -> str:
    \"\"\"
    יצירת banner מעוצב לתוכנית.
    
    Args:
        title: כותרת ראשית
        subtitle: כותרת משנה
        width: רוחב הבאנר
        
    Returns:
        str: הבאנר המעוצב
    \"\"\"
    lines = []
    
    # קו עליון
    lines.append("╔" + "═" * (width - 2) + "╗")
    
    # כותרת ראשית
    title_padding = (width - len(title) - 2) // 2
    title_line = "║" + " " * title_padding + title + " " * (width - len(title) - title_padding - 2) + "║"
    lines.append(title_line)
    
    # כותרת משנה
    if subtitle:
        lines.append("║" + " " * (width - 2) + "║")
        subtitle_padding = (width - len(subtitle) - 2) // 2
        subtitle_line = "║" + " " * subtitle_padding + subtitle + " " * (width - len(subtitle) - subtitle_padding - 2) + "║"
        lines.append(subtitle_line)
    
    # קו תחתון
    lines.append("╚" + "═" * (width - 2) + "╝")
    
    return "\\n".join(lines)

def show_loading_demo():
    \"\"\"הדגמת רכיבים ויזואליים\"\"\"
    print(CLIColors.colored("\\n🎨 הדגמת רכיבים ויזואליים", CLIColors.CYAN + CLIColors.BOLD))
    
    # באנר
    banner = create_banner("DevOps CLI Tool", "כלי מתקדם לאוטומציה")
    print(CLIColors.colored(banner, CLIColors.BLUE))
    
    # Progress bar
    print("\\n1️⃣ Progress Bar:")
    progress = ProgressBar(100, 40, "מעבד קבצים")
    for i in range(0, 101, 5):
        progress.update(i, f"קובץ {i//5 + 1}")
        time.sleep(0.05)
    
    # Spinner
    print("\\n2️⃣ Spinner:")
    spinner = Spinner("מתחבר לשרת")
    spinner.start()
    time.sleep(2)
    spinner.stop(CLIColors.success("התחברות הצליחה"))
    
    # טבלה
    print("\\n3️⃣ טבלה מעוצבת:")
    headers = ["שרת", "סטטוס", "CPU", "זיכרון", "אחוזי פעילות"]
    rows = [
        ["web-01", "פועל", "45%", "2.1GB", "█████░░░░░"],
        ["db-01", "פועל", "12%", "4.8GB", "██░░░░░░░░"],
        ["cache-01", "נעצר", "0%", "0GB", "░░░░░░░░░░"]
    ]
    
    table = format_table(headers, rows, "סטטוס שרתים")
    print(table)
    
    # אישור
    print("\\n4️⃣ בקשת אישור:")
    confirmed = confirm_action("האם להמשיך בפעולה", default=True)
    if confirmed:
        print(CLIColors.success("המשתמש אישר את הפעולה"))
    else:
        print(CLIColors.info("המשתמש ביטל את הפעולה"))

def create_dashboard(data: dict) -> str:
    \"\"\"יצירת לוח מידע מעוצב\"\"\"
    lines = []
    
    # כותרת
    lines.append(CLIColors.colored("╔═══════════════════════════════════════════════════════════╗", CLIColors.CYAN))
    lines.append(CLIColors.colored("║                    📊 לוח בקרה מערכת                    ║", CLIColors.CYAN))
    lines.append(CLIColors.colored("╚═══════════════════════════════════════════════════════════╝", CLIColors.CYAN))
    lines.append("")
    
    # סטטוס כללי
    status = data.get('status', 'unknown')
    if status == 'healthy':
        status_display = CLIColors.success("✅ תקין")
    elif status == 'warning':
        status_display = CLIColors.warning("⚠️  אזהרה")
    else:
        status_display = CLIColors.error("❌ שגיאה")
    
    lines.append(f"🏥 סטטוס מערכת: {status_display}")
    lines.append(f"⏰ זמן עדכון אחרון: {data.get('last_update', 'לא ידוע')}")
    lines.append("")
    
    # משאבים
    lines.append(CLIColors.colored("💻 משאבי מערכת:", CLIColors.BLUE + CLIColors.BOLD))
    cpu_usage = data.get('cpu_usage', 0)
    memory_usage = data.get('memory_usage', 0)
    disk_usage = data.get('disk_usage', 0)
    
    # יצירת בארים ויזואליים
    def create_usage_bar(percentage: float, width: int = 20) -> str:
        filled = int((percentage / 100) * width)
        bar = "█" * filled + "░" * (width - filled)
        
        if percentage < 50:
            color = CLIColors.GREEN
        elif percentage < 80:
            color = CLIColors.YELLOW
        else:
            color = CLIColors.RED
        
        return CLIColors.colored(bar, color)
    
    lines.append(f"   🔧 CPU:    [{create_usage_bar(cpu_usage)}] {cpu_usage:.1f}%")
    lines.append(f"   💾 זיכרון: [{create_usage_bar(memory_usage)}] {memory_usage:.1f}%")
    lines.append(f"   💿 דיסק:   [{create_usage_bar(disk_usage)}] {disk_usage:.1f}%")
    lines.append("")
    
    # שירותים
    services = data.get('services', [])
    if services:
        lines.append(CLIColors.colored("🚀 שירותים פעילים:", CLIColors.BLUE + CLIColors.BOLD))
        for service in services:
            status_icon = "✅" if service.get('status') == 'running' else "❌"
            lines.append(f"   {status_icon} {service.get('name', 'Unknown')}")
        lines.append("")
    
    # התראות
    alerts = data.get('alerts', [])
    if alerts:
        lines.append(CLIColors.colored("🚨 התראות:", CLIColors.RED + CLIColors.BOLD))
        for alert in alerts:
            lines.append(f"   ⚠️  {alert}")
    else:
        lines.append(CLIColors.colored("✅ אין התראות פעילות", CLIColors.GREEN))
    
    return "\\n".join(lines)

# הרצת הדגמות
if __name__ == "__main__":
    show_loading_demo()
    
    # הדגמת לוח מידע
    print("\\n5️⃣ לוח מידע מתקדם:")
    dashboard_data = {
        'status': 'healthy',
        'last_update': '2024-01-15 14:30:00',
        'cpu_usage': 35.5,
        'memory_usage': 68.2,
        'disk_usage': 23.8,
        'services': [
            {'name': 'nginx', 'status': 'running'},
            {'name': 'postgresql', 'status': 'running'},
            {'name': 'redis', 'status': 'stopped'}
        ],
        'alerts': []
    }
    
    dashboard = create_dashboard(dashboard_data)
    print(dashboard)
    
    print("\\n" + CLIColors.colored("🎉 הדגמת רכיבים ויזואליים הושלמה!", CLIColors.GREEN + CLIColors.BOLD))`
      },
      {
        id: "task3",
        title: "מימוש CLI מלא עם plugins ואוטומציה",
        description: "צור מערכת plugins, קונפיגורציה מתקדמת ואוטומציה לפעולות נפוצות",
        points: 45,
        code: `# TODO: צור מערכת plugins עם discovery אוטומטי
# TODO: הוסף מערכת קונפיגורציה עם קבצי YAML/JSON
# TODO: מימן logging מתקדם עם rotation
# TODO: צור פקודות אוטומציה (workflows)
# TODO: הוסף bash completion ו-aliases
# TODO: צור דוקומנטציה אוטומטית לפקודות`,
        hint: `💡 מערכת plugins:
class PluginManager:
    def __init__(self):
        self.plugins = {}
    
    def load_plugin(self, plugin_path):
        # טעינת plugin מקובץ
        pass
    
    def register_command(self, name, func):
        # רישום פקודה חדשה
        self.plugins[name] = func
    
    def execute_plugin(self, name, args):
        if name in self.plugins:
            return self.plugins[name](args)`,
        solution: `print("\\n=== מימוש CLI מלא עם תכונות מתקדמות ===")

import json
import logging
import os
import sys
import importlib.util
from pathlib import Path
from typing import Dict, List, Callable, Any, Optional
from dataclasses import dataclass
import tempfile
import shutil

@dataclass
class PluginInfo:
    \"\"\"מידע על plugin\"\"\"
    name: str
    version: str
    description: str
    author: str
    commands: List[str]
    file_path: str

class ConfigManager:
    \"\"\"מנהל קונפיגורציה מתקדם\"\"\"
    
    def __init__(self, config_dir: str = None):
        self.config_dir = Path(config_dir or os.path.expanduser("~/.devops-cli"))
        self.config_file = self.config_dir / "config.json"
        self.ensure_config_dir()
        self.config = self.load_config()
    
    def ensure_config_dir(self):
        \"\"\"וידוא שתיקיית הקונפיגורציה קיימת\"\"\"
        self.config_dir.mkdir(parents=True, exist_ok=True)
        
        # יצירת קבצי קונפיגורציה ברירת מחדל
        if not self.config_file.exists():
            default_config = {
                "cli": {
                    "color": True,
                    "verbose": False,
                    "auto_update": True,
                    "editor": "nano"
                },
                "plugins": {
                    "enabled": True,
                    "auto_load": True,
                    "directories": ["plugins", "~/.devops-cli/plugins"]
                },
                "logging": {
                    "level": "INFO",
                    "file": "~/.devops-cli/logs/app.log",
                    "rotation": True,
                    "max_size": "10MB",
                    "backup_count": 5
                },
                "aliases": {
                    "st": "server status",
                    "deploy-prod": "deploy --environment production",
                    "mon": "monitor"
                }
            }
            self.save_config(default_config)
    
    def load_config(self) -> dict:
        \"\"\"טעינת קונפיגורציה\"\"\"
        try:
            with open(self.config_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            return {}
        except json.JSONDecodeError as e:
            print(CLIColors.error(f"שגיאה בקריאת קונפיגורציה: {e}"))
            return {}
    
    def save_config(self, config: dict = None):
        \"\"\"שמירת קונפיגורציה\"\"\"
        config_to_save = config or self.config
        with open(self.config_file, 'w', encoding='utf-8') as f:
            json.dump(config_to_save, f, indent=2, ensure_ascii=False)
        self.config = config_to_save
    
    def get(self, key: str, default=None):
        \"\"\"קבלת ערך קונפיגורציה עם נתיב מפוצל בנקודות\"\"\"
        keys = key.split('.')
        value = self.config
        
        for k in keys:
            if isinstance(value, dict) and k in value:
                value = value[k]
            else:
                return default
        
        return value
    
    def set(self, key: str, value):
        \"\"\"הגדרת ערך קונפיגורציה\"\"\"
        keys = key.split('.')
        config = self.config
        
        # ניווט לרמה הנכונה
        for k in keys[:-1]:
            if k not in config:
                config[k] = {}
            config = config[k]
        
        # הגדרת הערך
        config[keys[-1]] = value
        self.save_config()

class LoggingManager:
    \"\"\"מנהל לוגים מתקדם\"\"\"
    
    def __init__(self, config_manager: ConfigManager):
        self.config = config_manager
        self.setup_logging()
    
    def setup_logging(self):
        \"\"\"הגדרת מערכת לוגים\"\"\"
        log_level = self.config.get('logging.level', 'INFO')
        log_file = os.path.expanduser(self.config.get('logging.file', '~/.devops-cli/logs/app.log'))
        
        # יצירת תיקיית לוגים
        os.makedirs(os.path.dirname(log_file), exist_ok=True)
        
        # הגדרת formatter
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        
        # הגדרת file handler
        file_handler = logging.FileHandler(log_file, encoding='utf-8')
        file_handler.setFormatter(formatter)
        
        # הגדרת console handler
        console_handler = logging.StreamHandler()
        console_handler.setFormatter(formatter)
        
        # הגדרת logger ראשי
        logger = logging.getLogger('devops-cli')
        logger.setLevel(getattr(logging, log_level.upper()))
        logger.addHandler(file_handler)
        
        # הוספת console handler רק במצב verbose
        if self.config.get('cli.verbose', False):
            logger.addHandler(console_handler)
        
        self.logger = logger
    
    def get_logger(self, name: str = 'devops-cli'):
        \"\"\"קבלת logger\"\"\"
        return logging.getLogger(name)

class PluginManager:
    \"\"\"מנהל plugins מתקדם\"\"\"
    
    def __init__(self, config_manager: ConfigManager, logger: logging.Logger):
        self.config = config_manager
        self.logger = logger
        self.plugins: Dict[str, PluginInfo] = {}
        self.commands: Dict[str, Callable] = {}
        
        if self.config.get('plugins.enabled', True):
            self.discover_plugins()
    
    def discover_plugins(self):
        \"\"\"גילוי אוטומטי של plugins\"\"\"
        plugin_dirs = self.config.get('plugins.directories', [])
        
        for plugin_dir in plugin_dirs:
            plugin_path = Path(os.path.expanduser(plugin_dir))
            if plugin_path.exists():
                self.load_plugins_from_directory(plugin_path)
    
    def load_plugins_from_directory(self, directory: Path):
        \"\"\"טעינת plugins מתיקייה\"\"\"
        for plugin_file in directory.glob("*.py"):
            if plugin_file.name.startswith("plugin_"):
                try:
                    self.load_plugin(plugin_file)
                except Exception as e:
                    self.logger.error(f"שגיאה בטעינת plugin {plugin_file}: {e}")
    
    def load_plugin(self, plugin_path: Path):
        \"\"\"טעינת plugin בודד\"\"\"
        try:
            # טעינת המודול
            spec = importlib.util.spec_from_file_location(plugin_path.stem, plugin_path)
            module = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(module)
            
            # וידוא שיש פונקציות נדרשות
            if not hasattr(module, 'PLUGIN_INFO'):
                self.logger.warning(f"Plugin {plugin_path} חסר PLUGIN_INFO")
                return
            
            plugin_info_dict = module.PLUGIN_INFO
            plugin_info = PluginInfo(
                name=plugin_info_dict['name'],
                version=plugin_info_dict['version'],
                description=plugin_info_dict['description'],
                author=plugin_info_dict['author'],
                commands=plugin_info_dict['commands'],
                file_path=str(plugin_path)
            )
            
            # רישום הפקודות
            for command_name in plugin_info.commands:
                if hasattr(module, f"command_{command_name}"):
                    command_func = getattr(module, f"command_{command_name}")
                    self.commands[command_name] = command_func
                    self.logger.info(f"נטען plugin: {plugin_info.name} - פקודה: {command_name}")
            
            self.plugins[plugin_info.name] = plugin_info
            
        except Exception as e:
            self.logger.error(f"שגיאה בטעינת plugin {plugin_path}: {e}")
    
    def execute_command(self, command: str, args) -> int:
        \"\"\"הרצת פקודת plugin\"\"\"
        if command in self.commands:
            try:
                return self.commands[command](args)
            except Exception as e:
                self.logger.error(f"שגיאה בהרצת פקודת plugin {command}: {e}")
                return 1
        return None
    
    def list_plugins(self) -> List[PluginInfo]:
        \"\"\"רשימת כל ה-plugins\"\"\"
        return list(self.plugins.values())

class WorkflowManager:
    \"\"\"מנהל workflows לאוטומציה\"\"\"
    
    def __init__(self, config_manager: ConfigManager, logger: logging.Logger):
        self.config = config_manager
        self.logger = logger
        self.workflows = self.load_workflows()
    
    def load_workflows(self) -> Dict[str, Dict]:
        \"\"\"טעינת workflows\"\"\"
        workflows_file = self.config.config_dir / "workflows.json"
        
        if workflows_file.exists():
            try:
                with open(workflows_file, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except Exception as e:
                self.logger.error(f"שגיאה בטעינת workflows: {e}")
        
        # workflows ברירת מחדל
        default_workflows = {
            "deploy-full": {
                "description": "פריסה מלאה עם בדיקות",
                "steps": [
                    {"command": "server status", "description": "בדיקת סטטוס שרתים"},
                    {"command": "monitor cpu", "description": "בדיקת עומס מעבד"},
                    {"command": "deploy {app} --environment {env}", "description": "פריסת האפליקציה"},
                    {"command": "server status", "description": "אימות פריסה"}
                ]
            },
            "health-check": {
                "description": "בדיקת תקינות מערכת מלאה",
                "steps": [
                    {"command": "server status", "description": "בדיקת שרתים"},
                    {"command": "monitor cpu", "description": "בדיקת מעבד"},
                    {"command": "monitor memory", "description": "בדיקת זיכרון"}
                ]
            }
        }
        
        self.save_workflows(default_workflows)
        return default_workflows
    
    def save_workflows(self, workflows: Dict[str, Dict]):
        \"\"\"שמירת workflows\"\"\"
        workflows_file = self.config.config_dir / "workflows.json"
        with open(workflows_file, 'w', encoding='utf-8') as f:
            json.dump(workflows, f, indent=2, ensure_ascii=False)
    
    def execute_workflow(self, name: str, variables: Dict[str, str] = None) -> int:
        \"\"\"הרצת workflow\"\"\"
        if name not in self.workflows:
            print(CLIColors.error(f"Workflow '{name}' לא נמצא"))
            return 1
        
        workflow = self.workflows[name]
        variables = variables or {}
        
        print(CLIColors.info(f"מריץ workflow: {name}"))
        print(CLIColors.info(f"תיאור: {workflow['description']}"))
        
        progress = ProgressBar(len(workflow['steps']), title="Workflow")
        
        for i, step in enumerate(workflow['steps']):
            step_command = step['command']
            step_description = step['description']
            
            # החלפת משתנים
            for var, value in variables.items():
                step_command = step_command.replace(f"{{{var}}}", value)
            
            progress.update(i, f"מבצע: {step_description}")
            
            # סימולציה של הרצת פקודה
            time.sleep(0.5)
            self.logger.info(f"מבצע: {step_command}")
        
        progress.finish("Workflow הושלם")
        print(CLIColors.success(f"Workflow '{name}' הושלם בהצלחה"))
        return 0

class AdvancedCLI:
    \"\"\"CLI מתקדם עם כל התכונות\"\"\"
    
    def __init__(self):
        self.config = ConfigManager()
        self.logging_manager = LoggingManager(self.config)
        self.logger = self.logging_manager.get_logger()
        self.plugin_manager = PluginManager(self.config, self.logger)
        self.workflow_manager = WorkflowManager(self.config, self.logger)
        
        self.logger.info("CLI מתקדם הופעל")
    
    def process_aliases(self, args: List[str]) -> List[str]:
        \"\"\"עיבוד aliases\"\"\"
        if not args:
            return args
        
        aliases = self.config.get('aliases', {})
        command = args[0]
        
        if command in aliases:
            alias_command = aliases[command].split()
            return alias_command + args[1:]
        
        return args
    
    def create_enhanced_parser(self):
        \"\"\"יצירת parser משופר\"\"\"
        parser = create_parser()
        
        # הוספת פקודות מתקדמות
        subparsers = parser._subparsers._group_actions[0]
        
        # פקודת config
        config_parser = subparsers.add_parser('config', help='ניהול קונפיגורציה')
        config_subparsers = config_parser.add_subparsers(dest='config_command')
        
        # config get
        get_parser = config_subparsers.add_parser('get', help='קבלת ערך קונפיגורציה')
        get_parser.add_argument('key', help='מפתח הקונפיגורציה')
        get_parser.set_defaults(func=self.config_get_command)
        
        # config set
        set_parser = config_subparsers.add_parser('set', help='הגדרת ערך קונפיגורציה')
        set_parser.add_argument('key', help='מפתח הקונפיגורציה')
        set_parser.add_argument('value', help='הערך החדש')
        set_parser.set_defaults(func=self.config_set_command)
        
        # פקודת plugins
        plugins_parser = subparsers.add_parser('plugins', help='ניהול plugins')
        plugins_subparsers = plugins_parser.add_subparsers(dest='plugins_command')
        
        list_parser = plugins_subparsers.add_parser('list', help='רשימת plugins')
        list_parser.set_defaults(func=self.plugins_list_command)
        
        # פקודת workflow
        workflow_parser = subparsers.add_parser('workflow', help='הרצת workflows')
        workflow_parser.add_argument('name', help='שם ה-workflow')
        workflow_parser.add_argument('--var', action='append', help='משתנים: --var key=value')
        workflow_parser.set_defaults(func=self.workflow_command)
        
        return parser
    
    def config_get_command(self, args):
        \"\"\"פקודת config get\"\"\"
        value = self.config.get(args.key)
        if value is not None:
            if isinstance(value, (dict, list)):
                print(json.dumps(value, indent=2, ensure_ascii=False))
            else:
                print(value)
            return 0
        else:
            print(CLIColors.error(f"מפתח '{args.key}' לא נמצא"))
            return 1
    
    def config_set_command(self, args):
        \"\"\"פקודת config set\"\"\"
        try:
            # ניסיון להמיר לטיפוס מתאים
            value = args.value
            if value.lower() in ['true', 'false']:
                value = value.lower() == 'true'
            elif value.isdigit():
                value = int(value)
            elif value.replace('.', '').isdigit():
                value = float(value)
            
            self.config.set(args.key, value)
            print(CLIColors.success(f"הוגדר {args.key} = {value}"))
            return 0
        except Exception as e:
            print(CLIColors.error(f"שגיאה בהגדרת קונפיגורציה: {e}"))
            return 1
    
    def plugins_list_command(self, args):
        \"\"\"פקודת plugins list\"\"\"
        plugins = self.plugin_manager.list_plugins()
        
        if not plugins:
            print(CLIColors.info("לא נמצאו plugins"))
            return 0
        
        headers = ["שם", "גרסה", "תיאור", "פקודות"]
        rows = []
        
        for plugin in plugins:
            rows.append([
                plugin.name,
                plugin.version,
                plugin.description[:30] + "..." if len(plugin.description) > 30 else plugin.description,
                ", ".join(plugin.commands)
            ])
        
        table = format_table(headers, rows, "Plugins זמינים")
        print(table)
        return 0
    
    def workflow_command(self, args):
        \"\"\"פקודת workflow\"\"\"
        variables = {}
        if args.var:
            for var_assignment in args.var:
                if '=' in var_assignment:
                    key, value = var_assignment.split('=', 1)
                    variables[key] = value
        
        return self.workflow_manager.execute_workflow(args.name, variables)
    
    def run(self, args=None):
        \"\"\"הרצת ה-CLI המתקדם\"\"\"
        try:
            # עיבוד aliases
            if args is None:
                args = sys.argv[1:]
            
            args = self.process_aliases(args)
            
            # בדיקת פקודות plugin
            if args and args[0] in self.plugin_manager.commands:
                # הרצת פקודת plugin
                parsed_args = argparse.Namespace()
                parsed_args.command = args[0]
                parsed_args.args = args[1:]
                return self.plugin_manager.execute_command(args[0], parsed_args)
            
            # הרצת CLI רגיל
            parser = self.create_enhanced_parser()
            parsed_args = parser.parse_args(args)
            
            # הגדרת verbose
            if parsed_args.verbose >= 1:
                self.config.set('cli.verbose', True)
                self.logging_manager.setup_logging()
            
            # ביצוע הפקודה
            if hasattr(parsed_args, 'func'):
                return parsed_args.func(parsed_args)
            else:
                return run_cli(args)
                
        except KeyboardInterrupt:
            print(CLIColors.warning("\\nפעולה בוטלה על ידי משתמש"))
            return 130
        except Exception as e:
            self.logger.error(f"שגיאה בהרצת CLI: {e}")
            print(CLIColors.error(f"שגיאה: {e}"))
            return 1

        ["config", "get", "cli.color"],
        ["config", "set", "cli.theme", "dark"],
        ["plugins", "list"],
        ["workflow", "health-check"],
        ["--help"]
    ]
    
    for i, cmd in enumerate(advanced_commands, 1):
        print(f"\\n{i}️⃣ פקודה מתקדמת: devops-cli {' '.join(cmd)}")
        print("-" * 60)
        
        try:
            exit_code = cli.run(cmd)
            status = "✅ הצליח" if exit_code == 0 else "⚠️ שגיאה"
            print(f"\\n{status} (קוד: {exit_code})")
        except SystemExit:
            pass
        except Exception as e:
            print(CLIColors.error(f"שגיאה: {e}"))
    
    # יצירת bash completion
    print("\\n📝 יצירת Bash Completion:")
    completion = generate_bash_completion()
    completion_file = "/tmp/devops-cli-completion.bash"
    
    try:
        with open(completion_file, 'w') as f:
            f.write(completion)
        print(CLIColors.success(f"Bash completion נוצר: {completion_file}"))
        print(CLIColors.info("להפעלה הוסף: source /tmp/devops-cli-completion.bash"))
    except Exception as e:
        print(CLIColors.error(f"שגיאה ביצירת completion: {e}"))
    
    print("\\n🏆 CLI מתקדם מוכן לשימוש!")
    print(CLIColors.info("תכונות מתקדמות:"))
    print("  ✅ מערכת plugins")
    print("  ✅ קונפיגורציה מתקדמת")
    print("  ✅ Workflows לאוטומציה")
    print("  ✅ לוגים מתקדמים")
    print("  ✅ Aliases לפקודות")
    print("  ✅ Bash completion")
    print("  ✅ ממשק ויזואלי משופר")`
      }
    ]
  }
];
          const completionExample = `_devops_cli_completion() {
    local cur prev commands
    COMPREPLY=()
    cur="\\${COMP_WORDS[COMP_CWORD]}"
    prev="\\${COMP_WORDS[COMP_CWORD-1]}"
    
    commands="server monitor deploy config plugins workflow"
    server_commands="status start stop"
    monitor_commands="cpu memory disk"
    
    if [[ \\${COMP_CWORD} == 1 ]]; then
        COMPREPLY=($(compgen -W "\\${commands}" -- \\${cur}))
    elif [[ \\${prev} == "server" ]]; then
        COMPREPLY=($(compgen -W "\\${server_commands}" -- \\${cur}))
    elif [[ \\${prev} == "monitor" ]]; then
        COMPREPLY=($(compgen -W "\\${monitor_commands}" -- \\${cur}))
    fi
}`;
          
          return `יצירת bash completion מתקדם:

${completionExample}

🚀 CLI מתקדם עם תכונות מלאות:

✅ מערכת plugins
✅ קונפיגורציה מתקדמת  
✅ Workflows לאוטומציה
✅ לוגים מתקדמים
✅ Aliases לפקודות
✅ Bash completion
✅ ממשק ויזואלי משופר`;
        }
        
        function generate_bash_completion(): string {
          return completionExample;
        }
        
        if (__name__ === "__main__"):
        
// דוגמאות שימוש ב-CLI מתקדם
if (true) {  // Simulating if __name__ == "__main__" in Python
  console.log("\\n🛠️ דוגמאות לכלי CLI מתקדם:");
  
  const cli = new AdvancedCLI();
  
  const advanced_commands = [
    ["config", "get", "cli.color"],
    ["config", "set", "cli.theme", "dark"],
    ["plugins", "list"],
    ["workflow", "health-check"],
    ["--help"]
  ];
  
  for (let i = 0; i < advanced_commands.length; i++) {
    const cmd = advanced_commands[i];
    console.log(`\\n${i+1}️⃣ פקודה מתקדמת: devops-cli ${cmd.join(' ')}`);
    console.log("-".repeat(60));
    
    try {
      const exit_code = cli.run(cmd);
      const status = exit_code === 0 ? "✅ הצליח" : "⚠️ שגיאה";
      console.log(`\\n${status} (קוד: ${exit_code})`);
    } catch (e) {
      if (e instanceof SystemExit) {
        // pass
      } else {
        console.log(CLIColors.error(`שגיאה: ${e}`));
      }
    }
  }
  
  // יצירת bash completion
  console.log("\\n📝 יצירת Bash Completion:");
  const completion = generate_bash_completion();
  const completion_file = "/tmp/devops-cli-completion.bash";
  
  try {
    // In a real environment, this would write to file
    console.log(CLIColors.success(`Bash completion נוצר: ${completion_file}`));
    console.log(CLIColors.info("להפעלה הוסף: source /tmp/devops-cli-completion.bash"));
  } catch (e) {
    console.log(CLIColors.error(`שגיאה ביצירת completion: ${e}`));
  }
  
  console.log("\\n🏆 CLI מתקדם מוכן לשימוש!");
  console.log(CLIColors.info("תכונות מתקדמות:"));
  console.log("  ✅ מערכת plugins");
  console.log("  ✅ קונפיגורציה מתקדמת");
  console.log("  ✅ Workflows לאוטומציה");
  console.log("  ✅ לוגים מתקדמים");
  console.log("  ✅ Aliases לפקודות");
  console.log("  ✅ Bash completion");
  console.log("  ✅ ממשק ויזואלי משופר");
}
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 p-6 mb-6 ${
      isCompleted ? 'border-green-300 bg-green-50' : 'border-gray-100 hover:border-blue-300'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xl font-bold text-gray-800 flex items-center gap-3">
          {isCompleted ? (
            <CheckCircle className="w-7 h-7 text-green-500" />
          ) : (
            <Code className="w-7 h-7 text-blue-500" />
          )}
          {task.title}
          {task.points && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {task.points} נקודות
            </span>
          )}
        </h4>
        <button
          onClick={() => setIsCompleted(!isCompleted)}
          className={`px-5 py-2 rounded-lg font-medium transition-colors ${
            isCompleted
              ? 'bg-green-100 text-green-700 hover:bg-green-200'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {isCompleted ? '✅ הושלם' : 'סמן כהושלם'}
        </button>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed text-lg">{task.description}</p>

      {task.code && (
        <div className="mb-4">
          <h5 className="font-semibold text-gray-700 mb-3 text-lg">קוד להשלמה:</h5>
          <pre className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 overflow-x-auto text-sm font-mono">
            <code className="text-gray-800">{task.code}</code>
          </pre>
        </div>
      )}

      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setShowHint(!showHint)}
          className="flex items-center gap-2 px-4 py-3 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors font-medium text-lg"
        >
          <HelpCircle className="w-5 h-5" />
          {showHint ? '🙈 הסתר רמז' : '💡 הצג רמז'}
        </button>
        
        {task.solution && (
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex items-center gap-2 px-4 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-medium text-lg"
          >
            <CheckCircle className="w-5 h-5" />
            {showSolution ? '🙈 הסתר פתרון' : '🔑 הצג פתרון'}
          </button>
        )}
      </div>

      {showHint && (
        <div className="mb-4 p-5 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
          <h6 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2 text-lg">
            <HelpCircle className="w-5 h-5" />
            רמז עזרה:
          </h6>
          <pre className="text-yellow-700 text-sm whitespace-pre-wrap font-mono leading-relaxed">
            {task.hint}
          </pre>
        </div>
      )}

      {showSolution && task.solution && (
        <div className="p-5 bg-green-50 border-2 border-green-200 rounded-lg">
          <h6 className="font-semibold text-green-800 mb-3 flex items-center gap-2 text-lg">
            <CheckCircle className="w-5 h-5" />
            פתרון מלא:
          </h6>
          <pre className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto text-sm font-mono leading-relaxed">
            <code>{task.solution}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

function LabCard({ lab }: { lab: Lab }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700 border-green-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'advanced': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '🟢 מתחיל';
      case 'intermediate': return '🟡 בינוני';
      case 'advanced': return '🔴 מתקדם';
      default: return '⚪ לא מוגדר';
    }
  };

  const totalPoints = lab.tasks.reduce((sum, task) => sum + (task.points || 0), 0);

  return (
    <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 overflow-hidden mb-10 hover:shadow-3xl transition-all duration-300">
      <div className={`bg-gradient-to-r ${lab.color} p-8 text-white`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="bg-white/20 rounded-full p-4 backdrop-blur-sm">
              {lab.icon}
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1">מעבדה {lab.id}</h3>
              <h4 className="text-xl opacity-90">{lab.title}</h4>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors backdrop-blur-sm"
          >
            {isExpanded ? (
              <ChevronDown className="w-7 h-7" />
            ) : (
              <ChevronRight className="w-7 h-7" />
            )}
          </button>
        </div>
        
        <p className="mt-4 text-xl opacity-90 leading-relaxed">{lab.description}</p>
        
        <div className="flex items-center gap-6 mt-6">
          <span className={`px-4 py-2 rounded-full text-lg font-medium border-2 ${getDifficultyColor(lab.difficulty)}`}>
            {getDifficultyText(lab.difficulty)}
          </span>
          <span className="flex items-center gap-2 text-white/90 text-lg">
            <Clock className="w-5 h-5" />
            {lab.duration}
          </span>
          <span className="flex items-center gap-2 text-white/90 text-lg">
            <Star className="w-5 h-5" />
            {lab.tasks.length} משימות
          </span>
          {totalPoints > 0 && (
            <span className="flex items-center gap-2 text-white/90 text-lg">
              🏆 {totalPoints} נקודות
            </span>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h5 className="font-bold text-gray-800 mb-4 text-xl flex items-center gap-2">
                🎯 מטרות המעבדה:
              </h5>
              <ul className="space-y-3">
                {lab.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 text-lg">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {lab.prerequisites && (
              <div>
                <h5 className="font-bold text-gray-800 mb-4 text-xl flex items-center gap-2">
                  📚 דרישות קדם:
                </h5>
                <ul className="space-y-3">
                  {lab.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600 text-lg">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span>{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h5 className="font-bold text-gray-800 mb-8 text-2xl flex items-center gap-3">
              <Play className="w-7 h-7 text-blue-500" />
              משימות למימוש:
            </h5>
            <div className="space-y-6">
              {lab.tasks.map((task) => (
                <TaskCard key={task.id} task={task} labId={lab.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const totalTasks = labs.reduce((total, lab) => total + lab.tasks.length, 0);
  const totalPoints = labs.reduce((total, lab) => 
    total + lab.tasks.reduce((sum, task) => sum + (task.points || 0), 0), 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 mb-8 border border-white/20">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-5 shadow-lg">
                <Code className="w-16 h-16 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  מעבדות Python בעברית
                </h1>
                <p className="text-2xl text-gray-600 mt-3">
                  למידת Python למתחילים עם תרגילים מעשיים וכלי עזרה מתקדמים
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="text-3xl font-bold text-blue-600">{labs.length}</div>
                <div className="text-blue-700 text-lg">מעבדות מקיפות</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <div className="text-3xl font-bold text-green-600">{totalTasks}</div>
                <div className="text-green-700 text-lg">תרגילים מעשיים</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="text-3xl font-bold text-purple-600">💡</div>
                <div className="text-purple-700 text-lg">רמזים לכל תרגיל</div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                <div className="text-3xl font-bold text-orange-600">{totalPoints}</div>
                <div className="text-orange-700 text-lg">נקודות זמינות</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-3">
              🧠 מותאם לאנשים עם ADHD
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/50 rounded-lg p-4">
                <span className="text-lg font-medium text-gray-700">✨ מבנה ברור ומאורגן</span>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <span className="text-lg font-medium text-gray-700">🎯 יעדים קצרים וברורים</span>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <span className="text-lg font-medium text-gray-700">🌈 צבעים מסייעים</span>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="space-y-10">
            {labs.map((lab) => (
              <LabCard key={lab.id} lab={lab} />
            ))}
          </div>
        </main>

        <footer className="text-center mt-20 p-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            🎓 מערכת למידה מתקדמת עם תמיכה מלאה
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            כל תרגיל כולל רמזים הדרגתיים, פתרונות מלאים ומערכת נקודות למעקב התקדמות
          </p>
          <div className="flex justify-center gap-8 text-lg">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              נגיש לאנשים עם ADHD
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              למידה בקצב אישי
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              תמיכה מלאה בעברית
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}