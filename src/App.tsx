import React, { useState } from 'react';
import { BookOpen, Code, Play, HelpCircle, ChevronRight, ChevronDown, CheckCircle, Clock, Star } from 'lucide-react';

interface Lab {
  id: number;
  title: string;
  description: string;
  objectives: string[];
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  tasks: Task[];
}

interface Task {
  id: string;
  title: string;
  description: string;
  code?: string;
  hint: string;
  solution?: string;
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
    tasks: [
      {
        id: "task1",
        title: "יצירת משתנים מסוגים שונים",
        description: "צור משתנים מסוגי נתונים שונים: מחרוזת (name), מספר שלם (age), מספר עשרוני (height), בוליאני (is_hungry), רשימה (skills), ומילון (profile)",
        code: `# TODO: צור משתנה name עם השם שלך
# TODO: צור משתנה age עם הגיל שלך  
# TODO: צור משתנה height עם הגובה שלך
# TODO: צור משתנה is_hungry (True/False)
# TODO: צור רשימת skills עם לפחות 3 כישורים
# TODO: צור מילון profile שמכיל name, age, ו-skills`,
        hint: `טיפ: ב-Python יוצרים משתנים פשוט על ידי השמה:
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
        code: `# TODO: הדפס את כל המשתנים עם תוויות מתאימות
# דוגמה: print("שם:", name)`,
        hint: `השתמש בפונקציית print() עם תוויות:
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
        code: `# TODO: חשב ותדפיס את הגיל בעוד 5 שנים
# TODO: ספור ותדפיס את מספר הכישורים (השתמש ב-len())
# TODO: גש לכישור הראשון ברשימה והדפס אותו`,
        hint: `פעולות בסיסיות:
- חיבור: age + 5
- אורך רשימה: len(skills)
- גישה לאלמנט ברשימה: skills[0] (אינדקס ראשון הוא 0)`,
        solution: `print("גיל בעוד 5 שנים:", age + 5)
print("מספר כישורים:", len(skills))
print("כישור ראשון:", skills[0])`
      },
      {
        id: "task4",
        title: "פעולות מתקדמות (בונוס)",
        description: "השתמש במתודות מחרוזת כמו .upper() ו-.lower(), הוסף כישור חדש לרשימה, והוסף זוג מפתח-ערך למילון",
        code: `# TODO: הדפס את השם באותיות גדולות ובאותיות קטנות
# TODO: הוסף כישור חדש לרשימה עם .append()
# TODO: הוסף מפתח 'height' למילון profile`,
        hint: `מתודות מועילות:
- name.upper() - אותיות גדולות
- name.lower() - אותיות קטנות  
- skills.append("כישור חדש") - הוספה לרשימה
- profile["height"] = height - הוספה למילון`,
        solution: `print("שם באותיות גדולות:", name.upper())
print("שם באותיות קטנות:", name.lower())
skills.append("Docker")
print("רשימת כישורים מעודכנת:", skills)
profile["height"] = height
print("פרופיל מעודכן:", profile)`
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
    tasks: [
      {
        id: "task1",
        title: "הצהרות תנאי",
        description: "צור משתנה age וכתוב מבנה תנאי שמדפיס הודעות שונות לפי הגיל",
        code: `# TODO: צור משתנה age
# TODO: כתוב תנאי שמדפיס:
# - אם הגיל 18 ומעלה: "אתה בוגר"
# - אם הגיל בין 13-17: "אתה נער" 
# - אחרת: "אתה ילד"`,
        hint: `שימוש בתנאים:
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
        code: `# TODO: צור רשימת skills עם לפחות 3 כישורים טכנולוגיים
# TODO: השתמש בלולאת for לעבור על הרשימה
# TODO: הדפס כל כישור עם הודעה "לומד: [כישור]"`,
        hint: `לולאת for בסיסית:
skills = ["Python", "JavaScript", "Docker"]
for skill in skills:
    print("לומד:", skill)`,
        solution: `skills = ["Python", "JavaScript", "Docker", "Linux"]
for skill in skills:
    print("לומד:", skill)`
      },
      {
        id: "task3",
        title: "לולאת while",
        description: "צור משתנה counter וכתוב לולאת while שמדפיסה את הערך עד שהוא מגיע ל-3",
        code: `# TODO: צור משתנה counter עם ערך 0
# TODO: כתוב לולאת while שרצה כל עוד counter < 3
# TODO: הדפס את ערך ה-counter בכל איטרציה
# TODO: אל תשכח להגדיל את ה-counter!`,
        hint: `לולאת while:
counter = 0
while counter < 3:
    print("Counter הוא:", counter)
    counter += 1  # חשוב! אחרת לולאה אינסופית`,
        solution: `counter = 0
while counter < 3:
    print("Counter הוא:", counter)
    counter += 1`
      },
      {
        id: "task4",
        title: "לולאה עם לוגיקה תנאית",
        description: "צור רשימת משתמשים שכוללת 'admin' ומשתמשים אחרים, ועבור עליהם עם הודעות שונות",
        code: `# TODO: צור רשימת users שכוללת "admin", "guest" ועוד משתמש
# TODO: עבור על הרשימה עם לולאת for
# TODO: הדפס הודעה מיוחדת ל-"admin" והודעה רגילה לאחרים`,
        hint: `שילוב לולאה ותנאי:
users = ["admin", "guest", "developer"]
for user in users:
    if user == "admin":
        print("ברוך הבא, מנהל המערכת!")
    else:
        print(f"שלום, {user}!")`,
        solution: `users = ["admin", "guest", "developer"]
for user in users:
    if user == "admin":
        print("ברוך הבא, מנהל המערכת!")
    else:
        print(f"שלום, {user}!")`
      },
      {
        id: "task5",
        title: "לולאות מקוננות (אתגר)",
        description: "צור מבנה דו-ממדי (grid) והשתמש בלולאות מקוננות לעבור על כל אלמנט",
        code: `# TODO: צור grid של 3x3 עם מספרים (רשימה של רשימות)
# TODO: השתמש בלולאות מקוננות לעבור על כל אלמנט
# TODO: הדפס את המיקום והערך של כל אלמנט`,
        hint: `לולאות מקוננות עם enumerate:
grid = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
]

for row_index, row in enumerate(grid):
    for col_index, value in enumerate(row):
        print(f"מיקום ({row_index},{col_index}) מכיל: {value}")`,
        solution: `grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row_index, row in enumerate(grid):
    for col_index, value in enumerate(row):
        print(f"מיקום ({row_index},{col_index}) מכיל: {value}")`
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
    tasks: [
      {
        id: "task1",
        title: "יצירת פונקציית ברכה",
        description: "צור פונקציה שמקבלת שם ומחזירה הודעת ברכה",
        code: `# TODO: צור פונקציה בשם greet שמקבלת פרמטר name
# TODO: הפונקציה תחזיר מחרוזת ברכה כמו "שלום, [שם]!"
# TODO: הוסף docstring שמסביר מה הפונקציה עושה
# TODO: קרא לפונקציה והדפס את התוצאה`,
        hint: `הגדרת פונקציה עם docstring:
def greet(name):
    """
    יוצרת הודעת ברכה עם השם הנתון.
    
    Args:
        name (str): השם לברכה
        
    Returns:
        str: הודעת ברכה
    """
    return f"שלום, {name}!"

# שימוש בפונקציה
message = greet("דוד")
print(message)`,
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
      },
      {
        id: "task2",
        title: "פונקציית חיבור",
        description: "צור פונקציה שמקבלת שני מספרים ומחזירה את הסכום שלהם",
        code: `# TODO: צור פונקציה add שמקבלת שני פרמטרים x ו-y
# TODO: הפונקציה תחזיר את הסכום של x ו-y
# TODO: הוסף docstring מתאים
# TODO: בדוק את הפונקציה עם מספרים שונים`,
        hint: `פונקציית חיבור פשוטה:
def add(x, y):
    """
    מחזירה את הסכום של שני מספרים.
    
    Args:
        x: המספר הראשון
        y: המספר השני
        
    Returns:
        הסכום של x ו-y
    """
    return x + y`,
        solution: `def add(x, y):
    """
    מחזירה את הסכום של שני מספרים.
    
    Args:
        x: המספר הראשון
        y: המספר השני
        
    Returns:
        הסכום של x ו-y
    """
    return x + y

# בדיקה
print("5 + 3 =", add(5, 3))
print("10 + 20 =", add(10, 20))`
      },
      {
        id: "task3",
        title: "פונקציה למציאת המקסימום",
        description: "צור פונקציה שמקבלת שלושה מספרים ומחזירה את הגדול ביותר",
        code: `# TODO: צור פונקציה max_of_three שמקבלת שלושה פרמטרים
# TODO: השתמש בפונקציית max() הפנויה של Python
# TODO: הוסף docstring מלא עם Args ו-Returns
# TODO: בדוק עם מספרים שונים`,
        hint: `שימוש בפונקציית max():
def max_of_three(a, b, c):
    """
    מוצאת את המספר הגדול ביותר מבין שלושה.
    
    Args:
        a: המספר הראשון
        b: המספר השני  
        c: המספר השלישי
        
    Returns:
        המספר הגדול ביותר
    """
    return max(a, b, c)`,
        solution: `def max_of_three(a, b, c):
    """
    מוצאת את המספר הגדול ביותר מבין שלושה.
    
    Args:
        a: המספר הראשון
        b: המספר השני
        c: המספר השלישי
        
    Returns:
        המספר הגדול ביותר
    """
    return max(a, b, c)

# בדיקה
print("המקסימום מבין 5, 10, 3:", max_of_three(5, 10, 3))
print("המקסימום מבין -1, -5, -2:", max_of_three(-1, -5, -2))`
      },
      {
        id: "task4",
        title: "יצירת מודול נפרד",
        description: "צור קובץ helper.py עם הפונקציות שיצרת וייבא אותן לקובץ הראשי",
        code: `# TODO: צור קובץ חדש בשם helper.py
# TODO: העבר את הפונקציות greet, add, max_of_three לקובץ החדש
# TODO: בקובץ הראשי, ייבא את הפונקציות מ-helper
# TODO: השתמש בפונקציות המיובאות`,
        hint: `בקובץ helper.py:
def greet(name):
    return f"שלום, {name}!"

def add(x, y):
    return x + y

def max_of_three(a, b, c):
    return max(a, b, c)

בקובץ הראשי:
from helper import greet, add, max_of_three

# שימוש בפונקציות
print(greet("Python"))
print(add(5, 3))`,
        solution: `# בקובץ helper.py
def greet(name):
    """יוצרת הודעת ברכה עם השם הנתון."""
    return f"שלום, {name}!"

def add(x, y):
    """מחזירה את הסכום של שני מספרים."""
    return x + y

def max_of_three(a, b, c):
    """מוצאת את המספר הגדול ביותר מבין שלושה."""
    return max(a, b, c)

# בקובץ הראשי (main.py)
from helper import greet, add, max_of_three

print(greet("דוד"))
print("סכום:", add(10, 15))
print("מקסימום:", max_of_three(5, 12, 8))`
      }
    ]
  }
];

function TaskCard({ task, labId }: { task: Task; labId: number }) {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          {isCompleted ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <Code className="w-6 h-6 text-blue-500" />
          )}
          {task.title}
        </h4>
        <button
          onClick={() => setIsCompleted(!isCompleted)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isCompleted
              ? 'bg-green-100 text-green-700 hover:bg-green-200'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {isCompleted ? 'הושלם' : 'סמן כהושלם'}
        </button>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">{task.description}</p>

      {task.code && (
        <div className="mb-4">
          <h5 className="font-semibold text-gray-700 mb-2">קוד להשלמה:</h5>
          <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto text-sm">
            <code className="text-gray-800">{task.code}</code>
          </pre>
        </div>
      )}

      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setShowHint(!showHint)}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors font-medium"
        >
          <HelpCircle className="w-4 h-4" />
          {showHint ? 'הסתר רמז' : 'הצג רמז'}
        </button>
        
        {task.solution && (
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-medium"
          >
            <CheckCircle className="w-4 h-4" />
            {showSolution ? 'הסתר פתרון' : 'הצג פתרון'}
          </button>
        )}
      </div>

      {showHint && (
        <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h6 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            רמז:
          </h6>
          <pre className="text-yellow-700 text-sm whitespace-pre-wrap font-mono">
            {task.hint}
          </pre>
        </div>
      )}

      {showSolution && task.solution && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <h6 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            פתרון:
          </h6>
          <pre className="bg-gray-800 text-green-400 rounded-lg p-4 overflow-x-auto text-sm">
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
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'מתחיל';
      case 'intermediate': return 'בינוני';
      case 'advanced': return 'מתקדם';
      default: return 'לא מוגדר';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-full p-3">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">מעבדה {lab.id}</h3>
              <h4 className="text-xl opacity-90">{lab.title}</h4>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            {isExpanded ? (
              <ChevronDown className="w-6 h-6" />
            ) : (
              <ChevronRight className="w-6 h-6" />
            )}
          </button>
        </div>
        
        <p className="mt-4 text-lg opacity-90 leading-relaxed">{lab.description}</p>
        
        <div className="flex items-center gap-4 mt-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(lab.difficulty)}`}>
            {getDifficultyText(lab.difficulty)}
          </span>
          <span className="flex items-center gap-1 text-white/80">
            <Clock className="w-4 h-4" />
            {lab.duration}
          </span>
          <span className="flex items-center gap-1 text-white/80">
            <Star className="w-4 h-4" />
            {lab.tasks.length} משימות
          </span>
        </div>
      </div>

      {isExpanded && (
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h5 className="font-bold text-gray-800 mb-3 text-lg">מטרות המעבדה:</h5>
              <ul className="space-y-2">
                {lab.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {lab.prerequisites && (
              <div>
                <h5 className="font-bold text-gray-800 mb-3 text-lg">דרישות קדם:</h5>
                <ul className="space-y-2">
                  {lab.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h5 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-2">
              <Play className="w-6 h-6 text-blue-500" />
              משימות למימוש:
            </h5>
            <div className="space-y-4">
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4">
                <Code className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  מעבדות Python בעברית
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  למידת Python למתחילים עם תרגילים מעשיים
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">{labs.length}</div>
                <div className="text-blue-700">מעבדות</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">
                  {labs.reduce((total, lab) => total + lab.tasks.length, 0)}
                </div>
                <div className="text-green-700">תרגילים</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">כולל רמזים</div>
                <div className="text-purple-700">לכל תרגיל</div>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="space-y-8">
            {labs.map((lab) => (
              <LabCard key={lab.id} lab={lab} />
            ))}
          </div>
        </main>

        <footer className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <p className="text-gray-600">
            💻 מערכת מעבדות Python בעברית - למידה מעשית עם תמיכה מלאה
          </p>
          <p className="text-sm text-gray-500 mt-2">
            כל תרגיל כולל רמזים ופתרונות לעזרה מקסימלית
          </p>
        </footer>
      </div>
    </div>
  );
}