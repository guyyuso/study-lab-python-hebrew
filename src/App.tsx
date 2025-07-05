import React, { useState } from 'react';
import { BookOpen, Code, Terminal, Database, Globe, Wrench, TestTube, Package, Cpu, ArrowRight, ArrowLeft, FileText, CheckCircle } from 'lucide-react';

interface Lab {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  difficulty: 'מתחיל' | 'בינוני' | 'מתקדם';
  estimatedTime: string;
  topics: string[];
  folder: string;
}

interface LabFile {
  name: string;
  content: string;
  type: 'python' | 'markdown' | 'text';
}

const labs: Lab[] = [
  {
    id: 1,
    title: "משתנים וסוגי נתונים",
    description: "למד יסודות פייתון כולל משתנים, מחרוזות, מספרים, רשימות ומילונים",
    icon: <Code className="w-6 h-6" />,
    difficulty: 'מתחיל',
    estimatedTime: '30 דקות',
    topics: ['משתנים', 'סוגי נתונים', 'פעולות בסיסיות'],
    folder: 'labs/lab1'
  },
  {
    id: 2,
    title: "לולאות ולוגיקה מותנית",
    description: "שלוט בזרימת התוכנית עם הוראות if, לולאות for ולולאות while",
    icon: <Terminal className="w-6 h-6" />,
    difficulty: 'מתחיל',
    estimatedTime: '45 דקות',
    topics: ['הוראות if', 'לולאות for', 'לולאות while', 'לולאות מקוננות'],
    folder: 'labs/lab2'
  },
  {
    id: 3,
    title: "פונקציות ומודולים",
    description: "צור קוד לשימוש חוזר עם פונקציות וארגן קוד למודולים",
    icon: <Package className="w-6 h-6" />,
    difficulty: 'מתחיל',
    estimatedTime: '40 דקות',
    topics: ['פונקציות', 'מודולים', 'ייבוא', 'ארגון קוד'],
    folder: 'labs/lab3'
  },
  {
    id: 4,
    title: "טיפול בקבצים",
    description: "קרא וכתוב קבצים, חיוני לעיבוד נתונים ואוטומציה",
    icon: <BookOpen className="w-6 h-6" />,
    difficulty: 'מתחיל',
    estimatedTime: '35 דקות',
    topics: ['קריאת קבצים', 'כתיבת קבצים', 'קבצי CSV', 'טיפול בשגיאות'],
    folder: 'labs/lab4'
  },
  {
    id: 5,
    title: "טיפול בשגיאות ולוגים",
    description: "בנה יישומים יציבים עם טיפול בשגיאות ולוגים תקינים",
    icon: <Wrench className="w-6 h-6" />,
    difficulty: 'בינוני',
    estimatedTime: '50 דקות',
    topics: ['Try-Except', 'שגיאות מותאמות', 'לוגים', 'דיבוג'],
    folder: 'labs/lab5'
  },
  {
    id: 6,
    title: "תכנות מונחה עצמים",
    description: "למד מושגי OOP עם מחלקות, הורשה ופולימורפיזם",
    icon: <Cpu className="w-6 h-6" />,
    difficulty: 'בינוני',
    estimatedTime: '60 דקות',
    topics: ['מחלקות', 'אובייקטים', 'הורשה', 'פולימורפיזם'],
    folder: 'labs/lab6'
  },
  {
    id: 7,
    title: "סביבות וירטואליות ואריזה",
    description: "נהל תלותיות וצור חבילות פייתון להפצה",
    icon: <Package className="w-6 h-6" />,
    difficulty: 'בינוני',
    estimatedTime: '45 דקות',
    topics: ['סביבות וירטואליות', 'pip', 'מבנה חבילות', 'דרישות'],
    folder: 'labs/lab7'
  },
  {
    id: 8,
    title: "יסודות בדיקות יחידה",
    description: "כתוב קוד אמין עם אסטרטגיות בדיקות יחידה מקיפות",
    icon: <TestTube className="w-6 h-6" />,
    difficulty: 'בינוני',
    estimatedTime: '55 דקות',
    topics: ['unittest', 'מקרי בדיקה', 'הצהרות', 'כיסוי בדיקות'],
    folder: 'labs/lab8'
  },
  {
    id: 9,
    title: "עבודה עם פורמטי נתונים",
    description: "עבד עם פורמטי נתונים JSON, YAML ו-XML הנפוצים ב-DevOps",
    icon: <Database className="w-6 h-6" />,
    difficulty: 'בינוני',
    estimatedTime: '50 דקות',
    topics: ['JSON', 'YAML', 'XML', 'אימות נתונים'],
    folder: 'labs/lab9'
  },
  {
    id: 10,
    title: "אינטראקציה עם API ו-REST",
    description: "אינטראקציה עם RESTful APIs לאוטומציה מודרנית של DevOps",
    icon: <Globe className="w-6 h-6" />,
    difficulty: 'מתקדם',
    estimatedTime: '65 דקות',
    topics: ['בקשות HTTP', 'REST APIs', 'אימות', 'טיפול בשגיאות'],
    folder: 'labs/lab10'
  }
];

// Mock lab content - בפרויקט אמיתי זה יגיע מקבצים
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

## 🧪 רשימת אימות

✅ יצרת משתנים באמצעות סוגי נתונים שונים של Python
✅ הדפסת את כל המשתנים עם תוויות תיאוריות
✅ ביצעת פעולות בסיסיות על המשתנים
✅ הסקריפט שלך רץ ללא שגיאות

הרץ את הסקריפט שלך עם:
\`\`\`bash
python main.py
\`\`\`
`;

  return [
    {
      name: 'main.py',
      content: pythonContent,
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
      return 'bg-green-100 text-green-800 border-green-200';
    case 'בינוני':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'מתקדם':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const extractTodos = (content: string): string[] => {
  const todoRegex = /# TODO:.*(?:\n(?:# .*)*)?/g;
  const matches = content.match(todoRegex) || [];
  return matches.map(todo => todo.replace(/^# TODO: /, '').replace(/\n# /g, '\n'));
};

const LabCard: React.FC<{ lab: Lab; onSelect: (lab: Lab) => void }> = ({ lab, onSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer transform hover:scale-105"
         onClick={() => onSelect(lab)}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              {lab.icon}
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">מעבדה {lab.id}</span>
              <h3 className="text-lg font-bold text-gray-900">{lab.title}</h3>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(lab.difficulty)}`}>
            {lab.difficulty}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{lab.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Terminal className="w-4 h-4" />
            <span>{lab.estimatedTime}</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-600 font-medium">
            <span className="text-sm">התחל מעבדה</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {lab.topics.map((topic, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
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
  const labFiles = getLabContent(lab.id);
  const currentFile = labFiles.find(file => file.name === selectedFile);
  const todos = currentFile?.type === 'python' ? extractTodos(currentFile.content) : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>חזור לרשימת המעבדות</span>
            </button>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(lab.difficulty)}`}>
              {lab.difficulty}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
              {lab.icon}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">מעבדה {lab.id}: {lab.title}</h1>
              <p className="text-gray-600">{lab.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* TODO List Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                רשימת TODO-ים
              </h3>
              {todos.length > 0 ? (
                <div className="space-y-3">
                  {todos.map((todo, index) => (
                    <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <span className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </span>
                        <p className="text-sm text-gray-700 leading-relaxed">{todo}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">בחר קובץ Python כדי לראות TODO-ים</p>
              )}
            </div>

            {/* Lab Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">פרטי המעבדה</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">זמן משוער:</span>
                  <span className="font-medium">{lab.estimatedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">רמת קושי:</span>
                  <span className="font-medium">{lab.difficulty}</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-gray-600 block mb-2">נושאים:</span>
                <div className="flex flex-wrap gap-2">
                  {lab.topics.map((topic, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* File Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* File Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex">
                  {labFiles.map((file) => (
                    <button
                      key={file.name}
                      onClick={() => setSelectedFile(file.name)}
                      className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                        selectedFile === file.name
                          ? 'border-blue-500 text-blue-600 bg-blue-50'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>{file.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* File Content */}
              <div className="p-6">
                {currentFile && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">{currentFile.name}</h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {currentFile.type === 'python' ? 'Python' : 
                         currentFile.type === 'markdown' ? 'Markdown' : 'Text'}
                      </span>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm leading-relaxed whitespace-pre-wrap">
                        {currentFile.content}
                      </pre>
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

  if (selectedLab) {
    return <LabViewer lab={selectedLab} onBack={() => setSelectedLab(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-blue-600 rounded-2xl text-white ml-4">
              <Code className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              מערכת 10 מעבדות פייתון
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            למד פייתון עם 10 מעבדות מעשיות המיועדות להנדסת DevOps ואוטומציה. 
            כל מעבדה בנויה על הקודמת ומספקת ניסיון מעשי עם כלים וטכניקות מתקדמות.
          </p>
          <div className="mt-6 text-sm text-blue-600 font-medium">
            👆 לחץ על מעבדה כדי להתחיל ולראות את ה-TODO-ים
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
            <div className="text-gray-600">מעבדות מעשיות</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">~8</div>
            <div className="text-gray-600">שעות למידה</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">40+</div>
            <div className="text-gray-600">נושאי פייתון</div>
          </div>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {labs.map((lab) => (
            <LabCard key={lab.id} lab={lab} onSelect={setSelectedLab} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מוכן להתחיל?</h2>
            <p className="text-gray-600 mb-6">
              התחל עם המעבדה הראשונה ובנה את הידע שלך צעד אחר צעד. 
              כל מעבדה כוללת הסברים מפורטים, דוגמאות קוד, ומשימות מעשיות.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <BookOpen className="w-4 h-4" />
                <span>הוראות מפורטות</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Code className="w-4 h-4" />
                <span>דוגמאות קוד</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <TestTube className="w-4 h-4" />
                <span>משימות מעשיות</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;