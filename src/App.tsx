import React from 'react';
import { BookOpen, Code, Terminal, Database, Globe, Wrench, TestTube, Package, Cpu } from 'lucide-react';

interface Lab {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  topics: string[];
}

const labs: Lab[] = [
  {
    id: 1,
    title: "Variables and Data Types",
    description: "Learn Python basics including variables, strings, numbers, lists, and dictionaries",
    icon: <Code className="w-6 h-6" />,
    difficulty: 'Beginner',
    estimatedTime: '30 min',
    topics: ['Variables', 'Data Types', 'Basic Operations']
  },
  {
    id: 2,
    title: "Loops and Conditional Logic",
    description: "Master control flow with if statements, for loops, and while loops",
    icon: <Terminal className="w-6 h-6" />,
    difficulty: 'Beginner',
    estimatedTime: '45 min',
    topics: ['If Statements', 'For Loops', 'While Loops', 'Nested Loops']
  },
  {
    id: 3,
    title: "Functions and Modules",
    description: "Create reusable code with functions and organize code into modules",
    icon: <Package className="w-6 h-6" />,
    difficulty: 'Beginner',
    estimatedTime: '40 min',
    topics: ['Functions', 'Modules', 'Imports', 'Code Organization']
  },
  {
    id: 4,
    title: "File Handling",
    description: "Read from and write to files, essential for data processing and automation",
    icon: <BookOpen className="w-6 h-6" />,
    difficulty: 'Beginner',
    estimatedTime: '35 min',
    topics: ['File Reading', 'File Writing', 'CSV Files', 'Error Handling']
  },
  {
    id: 5,
    title: "Error Handling and Logging",
    description: "Build robust applications with proper error handling and logging",
    icon: <Wrench className="w-6 h-6" />,
    difficulty: 'Intermediate',
    estimatedTime: '50 min',
    topics: ['Try-Except', 'Custom Exceptions', 'Logging', 'Debugging']
  },
  {
    id: 6,
    title: "Object-Oriented Programming",
    description: "Learn OOP concepts with classes, inheritance, and polymorphism",
    icon: <Cpu className="w-6 h-6" />,
    difficulty: 'Intermediate',
    estimatedTime: '60 min',
    topics: ['Classes', 'Objects', 'Inheritance', 'Polymorphism']
  },
  {
    id: 7,
    title: "Virtual Environments and Packaging",
    description: "Manage dependencies and create distributable Python packages",
    icon: <Package className="w-6 h-6" />,
    difficulty: 'Intermediate',
    estimatedTime: '45 min',
    topics: ['Virtual Environments', 'pip', 'Package Structure', 'Requirements']
  },
  {
    id: 8,
    title: "Unit Testing Basics",
    description: "Write reliable code with comprehensive unit testing strategies",
    icon: <TestTube className="w-6 h-6" />,
    difficulty: 'Intermediate',
    estimatedTime: '55 min',
    topics: ['unittest', 'Test Cases', 'Assertions', 'Test Coverage']
  },
  {
    id: 9,
    title: "Working with Data Formats",
    description: "Process JSON, YAML, and XML data formats commonly used in DevOps",
    icon: <Database className="w-6 h-6" />,
    difficulty: 'Intermediate',
    estimatedTime: '50 min',
    topics: ['JSON', 'YAML', 'XML', 'Data Validation']
  },
  {
    id: 10,
    title: "API Interaction and REST",
    description: "Interact with RESTful APIs for modern DevOps automation",
    icon: <Globe className="w-6 h-6" />,
    difficulty: 'Advanced',
    estimatedTime: '65 min',
    topics: ['HTTP Requests', 'REST APIs', 'Authentication', 'Error Handling']
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Advanced':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const LabCard: React.FC<{ lab: Lab }> = ({ lab }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              {lab.icon}
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Lab {lab.id}</span>
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-blue-600 rounded-2xl text-white mr-4">
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
            <LabCard key={lab.id} lab={lab} />
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