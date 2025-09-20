// Academic categories and mock data for AnswerChain
export interface Question {
  id: string
  title: string
  content: string
  category: string
  level: AcademicLevel
  author: {
    id: string
    name: string
    institution: string
    verified: boolean
  }
  answerCount: number
  bounty?: string
  timestamp: number
  tags: string[]
}

export interface Answer {
  id: string
  questionId: string
  content: string
  author: {
    id: string
    name: string
    institution: string
    verified: boolean
  }
  verified: boolean
  citations: number
  timestamp: number
}

export type AcademicLevel = 
  | 'Undergraduate'
  | 'Graduate'
  | 'PhD'
  | 'Postdoc'
  | 'Faculty'

export const academicCategories = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '📐',
    color: 'bg-blue-500',
    subcategories: ['Algebra', 'Calculus', 'Statistics', 'Discrete Math']
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: '⚛️',
    color: 'bg-purple-500',
    subcategories: ['Quantum Physics', 'Mechanics', 'Thermodynamics', 'Electromagnetism']
  },
  {
    id: 'computer-science',
    name: 'Computer Science',
    icon: '💻',
    color: 'bg-green-500',
    subcategories: ['Algorithms', 'Machine Learning', 'Software Engineering', 'Cybersecurity']
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: '🧪',
    color: 'bg-orange-500',
    subcategories: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Biochemistry']
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: '🧬',
    color: 'bg-emerald-500',
    subcategories: ['Molecular Biology', 'Genetics', 'Ecology', 'Neuroscience']
  },
  {
    id: 'engineering',
    name: 'Engineering',
    icon: '⚙️',
    color: 'bg-gray-500',
    subcategories: ['Mechanical', 'Electrical', 'Civil', 'Chemical Engineering']
  },
  {
    id: 'medicine',
    name: 'Medicine',
    icon: '🏥',
    color: 'bg-red-500',
    subcategories: ['Clinical Medicine', 'Pharmacology', 'Public Health', 'Medical Research']
  },
  {
    id: 'social-sciences',
    name: 'Social Sciences',
    icon: '👥',
    color: 'bg-indigo-500',
    subcategories: ['Psychology', 'Sociology', 'Anthropology', 'Political Science']
  }
]

export const mockQuestions: Question[] = [
  {
    id: '1',
    title: 'How to prove convergence of this infinite series?',
    content: 'I\'m working on proving the convergence of ∑(n=1 to ∞) 1/(n²+1). I\'ve tried the comparison test but I\'m stuck on finding the right comparison series...',
    category: 'mathematics',
    level: 'Graduate',
    author: {
      id: 'user1',
      name: 'Sarah Chen',
      institution: 'MIT',
      verified: true
    },
    answerCount: 3,
    bounty: '0.05 ETH',
    timestamp: Date.now() - 3600000, // 1 hour ago
    tags: ['analysis', 'series', 'convergence']
  },
  {
    id: '2',
    title: 'Best practices for training transformer models on small datasets?',
    content: 'I have a dataset of only 10k samples for text classification. What are the current best practices for fine-tuning transformer models like BERT on such small datasets?',
    category: 'computer-science',
    level: 'PhD',
    author: {
      id: 'user2',
      name: 'Dr. Alex Kumar',
      institution: 'Stanford University',
      verified: true
    },
    answerCount: 7,
    timestamp: Date.now() - 7200000, // 2 hours ago
    tags: ['machine-learning', 'nlp', 'transformers', 'fine-tuning']
  },
  {
    id: '3',
    title: 'Mechanism of SN2 reaction with tertiary substrates',
    content: 'Why do tertiary alkyl halides not undergo SN2 reactions? I understand steric hindrance is involved, but can someone explain the orbital overlap perspective?',
    category: 'chemistry',
    level: 'Undergraduate',
    author: {
      id: 'user3',
      name: 'Maria Rodriguez',
      institution: 'UC Berkeley',
      verified: true
    },
    answerCount: 2,
    timestamp: Date.now() - 14400000, // 4 hours ago
    tags: ['organic-chemistry', 'mechanisms', 'stereochemistry']
  },
  {
    id: '4',
    title: 'CRISPR-Cas9 off-target effects in clinical applications',
    content: 'What are the current strategies to minimize off-target effects when using CRISPR-Cas9 for therapeutic applications? Looking for recent developments in guide RNA design.',
    category: 'biology',
    level: 'Postdoc',
    author: {
      id: 'user4',
      name: 'Dr. James Wilson',
      institution: 'Harvard Medical School',
      verified: true
    },
    answerCount: 5,
    bounty: '0.1 ETH',
    timestamp: Date.now() - 21600000, // 6 hours ago
    tags: ['crispr', 'gene-editing', 'clinical-research']
  },
  {
    id: '5',
    title: 'Quantum entanglement in many-body systems',
    content: 'How does quantum entanglement scale in many-body quantum systems? I\'m particularly interested in entanglement entropy and its relationship to phase transitions.',
    category: 'physics',
    level: 'Faculty',
    author: {
      id: 'user5',
      name: 'Prof. Lisa Zhang',
      institution: 'Caltech',
      verified: true
    },
    answerCount: 4,
    timestamp: Date.now() - 28800000, // 8 hours ago
    tags: ['quantum-physics', 'many-body', 'entanglement', 'phase-transitions']
  }
]
