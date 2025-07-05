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
  type: 'python' | 'markdown' | 'text';
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
    folder: 'labs/lab1',
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
    icon: <BookOpen className="w-6 h-6" />,
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
    title: "סביבות וירטואליות ואריזה",
    description: "נהל תלותיות וצור חבילות פייתון להפצה",
    icon: <Package className="w-6 h-6" />,
    difficulty: 'בינוני',
    estimatedTime: '20-25 דקות',
    topics: ['סביבות וירטואליות', 'pip', 'מבנה חבילות', 'דרישות'],
    folder: 'labs/lab7',
    maxPoints: 140
  },
  {
    id: 8,
    title: "יסודות בדיקות יחידה",
    description: "כתוב קוד אמין עם אסטרטגיות בדיקות יחידה מקיפות",
    icon: <TestTube className="w-6 h-6" />,
    difficulty: 'בינוני',
    estimatedTime: '25-30 דקות',
    topics: ['unittest', 'מקרי בדיקה', 'הצהרות', 'כיסוי בדיקות'],
    folder: 'labs/lab8',
    maxPoints: 160
  },
  {
    id: 9,
    title: "עבודה עם פורמטי נתונים",
    description: "עבד עם פורמטי נתונים JSON, YAML ו-XML הנפוצים ב-DevOps",
    icon: <Database className="w-6 h-6" />,
    difficulty: 'בינוני',
    estimatedTime: '20-25 דקות',
    topics: ['JSON', 'YAML', 'XML', 'אימות נתונים'],
    folder: 'labs/lab9',
    maxPoints: 150
  },
  {
    id: 10,
    title: "אינטראקציה עם API ו-REST",
    description: "אינטראקציה עם RESTful APIs לאוטומציה מודרנית של DevOps",
    icon: <Globe className="w-6 h-6" />,
    difficulty: 'מתקדם',
    estimatedTime: '30-40 דקות',
    topics: ['בקשות HTTP', 'REST APIs', 'אימות', 'טיפול בשגיאות'],
    folder: 'labs/lab10',
    maxPoints: 200
  }
];

const getTodoItems = (labId: number): TodoItem[] => {
  const todoLists: { [key: number]: TodoItem[] } = {
    1: [
      {
        id: 1,
        text: "צור משתנה מחרוזת בשם 'name' עם השם שלך",
        completed: false,
        points: 15,
        hint: "השתמש ב-name = \"השם שלך\"",
        detailedHint: "דוגמה: name = \"אליס\"\nמחרוזת היא טקסט שמוקף במירכאות כפולות או יחידות."
      },
      {
        id: 2,
        text: "צור משתנה מספר שלם בשם 'age'",
        completed: false,
        points: 15,
        hint: "age = מספר (בלי מירכאות)",
        detailedHint: "דוגמה: age = 25\nמספר שלם הוא מספר ללא נקודה עשרונית."
      },
      {
        id: 3,
        text: "צור משתנה מספר עשרוני בשם 'height'",
        completed: false,
        points: 15,
        hint: "השתמש בנקודה לעשרוני: height = 1.75",
        detailedHint: "דוגמה: height = 1.75\nמספר עשרוני (float) מכיל נקודה עשרונית."
      },
      {
        id: 4,
        text: "צור משתנה בוליאני בשם 'is_hungry'",
        completed: false,
        points: 15,
        hint: "השתמש ב-True או False (עם אות גדולה)",
        detailedHint: "דוגמה: is_hungry = True\nבוליאני יכול להיות רק True או False."
      },
      {
        id: 5,
        text: "צור רשימה בשם 'skills' עם 3 כישורים",
        completed: false,
        points: 20,
        hint: "skills = [\"כישור1\", \"כישור2\", \"כישור3\"]",
        detailedHint: "דוגמה: skills = [\"Python\", \"JavaScript\", \"SQL\"]\nרשימה מוקפת בסוגריים מרובעים."
      },
      {
        id: 6,
        text: "הדפס את כל המשתנים עם תוויות תיאוריות",
        completed: false,
        points: 20,
        hint: "print(\"תווית:\", משתנה)",
        detailedHint: "דוגמה: print(\"שם:\", name)\nהשתמש ב-print() עם פסיק בין התווית למשתנה."
      }
    ],
    2: [
      {
        id: 1,
        text: "כתוב הוראות if-elif-else לבדיקת גיל",
        completed: false,
        points: 25,
        hint: "if age >= 18: ... elif age >= 13: ... else: ...",
        detailedHint: "בדוק אם הגיל 18+, 13-17, או פחות מ-13 והדפס הודעה מתאימה."
      },
      {
        id: 2,
        text: "צור לולאת for שעוברת על רשימת כישורים",
        completed: false,
        points: 25,
        hint: "for skill in skills:",
        detailedHint: "for skill in skills:\n    print(\"לומד:\", skill)"
      },
      {
        id: 3,
        text: "כתוב לולאת while עם מונה",
        completed: false,
        points: 25,
        hint: "counter = 0\nwhile counter < 3:",
        detailedHint: "אל תשכח להוסיף counter += 1 בסוף הלולאה!"
      },
      {
        id: 4,
        text: "שלב לולאה עם תנאי לבדיקת משתמשים",
        completed: false,
        points: 25,
        hint: "if user == \"admin\":",
        detailedHint: "עבור על רשימת משתמשים ובדוק אם המשתמש הוא admin."
      },
      {
        id: 5,
        text: "צור לולאות מקוננות לטבלה דו-ממדית",
        completed: false,
        points: 20,
        hint: "for row in grid:\n    for item in row:",
        detailedHint: "השתמש ב-enumerate() כדי לקבל גם את האינדקס."
      }
    ]
    // יש להוסיף TODO-ים לשאר המעבדות...
  };
  
  return todoLists[labId] || [];
};

// Mock lab content with solutions
const getLabContent = (labId: number): LabFile[] => {
  const pythonContent = `#!/usr/bin/env python3
"""
מעבדה ${labId} - ${labs[labId-1].title}

הוראות:
1. השלם את כל ה-TODO-ים למטה
2. הרץ את הסקריפט כדי לבדוק את המימוש שלך
3. נסה להתנסות עם ערכים שונים
"""

# TODO: 1. צור משתנים מסוגים שונים
# צור משתנה מחרוזת הנקרא 'name'
# דוגמה: name = "השם שלך"



# TODO: 2. הדפס את המשתנים באמצעות print()
# הדפס כל משתנה עם תווית תיאורית



# TODO: 3. נסה פעולות בסיסיות
# חשב והדפס את הגיל שלך בעוד 5 שנים
# השתמש ב-len() כדי לספור פריטים ברשימה



print("\\nעבודה מצוינת! סיימת בהצלחה לעבוד עם יסודות פייתון.")
print("הרץ את הקובץ הזה עם: python main.py")
print("בדוק את המימוש שלך מול רשימת האימותים ב-README.md")
`;

  const solutionsContent = `#!/usr/bin/env python3
"""
מעבדה ${labId} - פתרונות מלאים
${labs[labId-1].title}

זהו קובץ הפתרונות המלא למעבדה.
השתמש בו רק אחרי שניסית לפתור בעצמך!
"""

# פתרון 1: יצירת משתנים מסוגים שונים
name = "אליס כהן"           # מחרוזת
age = 28                     # מספר שלם
height = 1.68               # מספר עשרוני
is_hungry = True            # בוליאני
skills = ["Python", "Git", "Linux"]  # רשימה

# יצירת מילון
profile = {
    "name": name,
    "age": age,
    "skills": skills
}

# פתרון 2: הדפסת המשתנים
print("שם:", name)
print("גיל:", age)
print("גובה:", height)
print("רעב:", is_hungry)
print("כישורים:", skills)
print("פרופיל:", profile)

# פתרון 3: פעולות בסיסיות
print("גיל בעוד 5 שנים:", age + 5)
print("מספר כישורים:", len(skills))
print("הכישור הראשון:", skills[0])

# בונוס: פעולות נוספות
print("שם באותיות גדולות:", name.upper())
skills.append("Docker")
print("כישורים מעודכנים:", skills)

print("\\n🎉 כל הכבוד! סיימת את המעבדה בהצלחה!")
`;

  const readmeContent = `# מעבדה ${labId} - ${labs[labId-1].title}

${labs[labId-1].description}

---

## 🎯 מטרות

בסוף המעבדה הזו, תוכל:
- לתכנת ב-Python בטכניקות בסיסיות
- להבין משתנים וסוגי נתונים
- לכתוב ולהריץ סקריפט Python הראשון שלך
- להשתמש בפונקציה print() להצגת מידע
- לחקור פעולות בסיסיות עם סוגי נתונים שונים

---

## ✍️ המשימה שלך

פתח את הקובץ main.py והשלם את כל ה-TODO-ים:

1. צור משתנים מסוגים שונים
2. הדפס את המשתנים באמצעות פונקציית print()
3. בצע פעולות בסיסיות על המשתנים

---

## 🏆 מערכת נקודות

- סה"כ נקודות זמינות: **${labs[labId-1].maxPoints}**
- נקודות לכל TODO לפי הקושי
- בונוס נקודות להשלמה מהירה!

---

## 🧪 רשימת אימות

✅ יצרת משתנים באמצעות סוגי נתונים שונים של Python
✅ הדפסת את כל המשתנים עם תוויות תיאוריות
✅ ביצעת פעולות בסיסיות על המשתנים
✅ הסקריפט שלך רץ ללא שגיאות

הרץ את הסקריפט שלך עם:
\`\`\`bash
python main.py
\`\`\`

---

## 💡 עצות והכוונה

1. **התחל קטן**: עבוד על TODO אחד בכל פעם
2. **בדוק תוצאות**: הרץ את הקוד אחרי כל שינוי
3. **השתמש ברמזים**: לחץ על כפתור הרמז אם אתה תקוע
4. **תתנסה**: נסה ערכים שונים למשתנים
5. **קרא שגיאות**: הודעות השגיאה עוזרות לזהות בעיות

---

## 🚀 הרחבות אופציונליות

אחרי שתסיים את המעבדה הבסיסית, נסה:
- ליצור מבנה נתונים מורכב יותר (רשימה של מילונים)
- להשתמש ב-f-strings לעיצוב טקסט
- לנסות את פונקציית input() לקלט מהמשתמש
- לבדוק סוגי נתונים עם type()
`;

  return [
    {
      name: 'main.py',
      content: pythonContent,
      type: 'python'
    },
    {
      name: 'solutions.py',
      content: solutionsContent,
      type: 'python'
    },
    {
      name: 'README.md',
      content: readmeContent,
      type: 'markdown'
    }
  ];
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

const extractTodos = (content: string): string[] => {
  const todoRegex = /# TODO:.*(?:\n(?:# .*)*)?/g;
  const matches = content.match(todoRegex) || [];
  return matches.map(todo => todo.replace(/^# TODO: /, '').replace(/\n# /g, '\n'));
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
                         currentFile.type === 'markdown' ? 'Markdown' : 'Text'}
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