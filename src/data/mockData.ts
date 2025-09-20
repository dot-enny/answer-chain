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
    icon: 'Calculator',
    color: 'bg-blue-500',
    subcategories: ['Algebra', 'Calculus', 'Statistics', 'Discrete Math']
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: 'Atom',
    color: 'bg-purple-500',
    subcategories: ['Quantum Physics', 'Mechanics', 'Thermodynamics', 'Electromagnetism']
  },
  {
    id: 'computer-science',
    name: 'Computer Science',
    icon: 'Laptop',
    color: 'bg-green-500',
    subcategories: ['Algorithms', 'Machine Learning', 'Software Engineering', 'Cybersecurity']
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: 'TestTube',
    color: 'bg-orange-500',
    subcategories: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Biochemistry']
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: 'Dna',
    color: 'bg-emerald-500',
    subcategories: ['Molecular Biology', 'Genetics', 'Ecology', 'Neuroscience']
  },
  {
    id: 'engineering',
    name: 'Engineering',
    icon: 'Settings',
    color: 'bg-gray-500',
    subcategories: ['Mechanical', 'Electrical', 'Civil', 'Chemical Engineering']
  },
  {
    id: 'medicine',
    name: 'Medicine',
    icon: 'Heart',
    color: 'bg-red-500',
    subcategories: ['Clinical Medicine', 'Pharmacology', 'Public Health', 'Medical Research']
  },
  {
    id: 'social-sciences',
    name: 'Social Sciences',
    icon: 'Users',
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
  },
  {
    id: '6',
    title: 'Structural analysis of reinforced concrete beams',
    content: 'How do I calculate the moment capacity of a doubly reinforced concrete beam using the strain compatibility method? Looking for step-by-step approach.',
    category: 'engineering',
    level: 'Graduate',
    author: {
      id: 'user6',
      name: 'Michael Torres',
      institution: 'Georgia Tech',
      verified: true
    },
    answerCount: 2,
    timestamp: Date.now() - 32400000, // 9 hours ago
    tags: ['structural-engineering', 'concrete', 'design']
  },
  {
    id: '7',
    title: 'Drug metabolism pathways and CYP450 enzymes',
    content: 'Can someone explain the role of different CYP450 isoforms in drug metabolism? Particularly interested in drug-drug interactions.',
    category: 'medicine',
    level: 'PhD',
    author: {
      id: 'user7',
      name: 'Dr. Rachel Kim',
      institution: 'Johns Hopkins',
      verified: true
    },
    answerCount: 6,
    bounty: '0.08 ETH',
    timestamp: Date.now() - 36000000, // 10 hours ago
    tags: ['pharmacology', 'metabolism', 'drug-interactions']
  },
  {
    id: '8',
    title: 'Linear algebra: eigenvalues of symmetric matrices',
    content: 'Why are all eigenvalues of a real symmetric matrix always real? I need a proof that doesn\'t rely on the spectral theorem.',
    category: 'mathematics',
    level: 'Undergraduate',
    author: {
      id: 'user8',
      name: 'Emma Johnson',
      institution: 'University of Michigan',
      verified: true
    },
    answerCount: 3,
    timestamp: Date.now() - 43200000, // 12 hours ago
    tags: ['linear-algebra', 'eigenvalues', 'matrices']
  },
  {
    id: '9',
    title: 'Cognitive biases in decision-making research',
    content: 'What are the most significant cognitive biases that affect human decision-making in economic contexts? Looking for recent meta-analyses.',
    category: 'social-sciences',
    level: 'Postdoc',
    author: {
      id: 'user9',
      name: 'Dr. David Chen',
      institution: 'Yale University',
      verified: true
    },
    answerCount: 4,
    timestamp: Date.now() - 50400000, // 14 hours ago
    tags: ['psychology', 'behavioral-economics', 'decision-making']
  },
  {
    id: '10',
    title: 'Algorithm complexity: dynamic programming optimization',
    content: 'How can I optimize this dynamic programming solution for the longest common subsequence problem? Currently getting O(n²) space complexity.',
    category: 'computer-science',
    level: 'Graduate',
    author: {
      id: 'user10',
      name: 'Carlos Martinez',
      institution: 'CMU',
      verified: true
    },
    answerCount: 5,
    timestamp: Date.now() - 57600000, // 16 hours ago
    tags: ['algorithms', 'dynamic-programming', 'optimization']
  }
]

export const mockAnswers: Answer[] = [
  {
    id: 'a1',
    questionId: '1',
    content: 'You can use the comparison test with 1/n². Since 1/(n²+1) < 1/n² for all n ≥ 1, and ∑(1/n²) converges (p-series with p=2 > 1), then ∑(1/(n²+1)) also converges by the comparison test.\n\nAlternatively, you can use the limit comparison test: lim(n→∞) [1/(n²+1)] / [1/n²] = lim(n→∞) n²/(n²+1) = 1, which is finite and positive, so both series have the same convergence behavior.',
    author: {
      id: 'user_ans1',
      name: 'Dr. Sarah Chen',
      institution: 'MIT',
      verified: true
    },
    verified: true,
    citations: 12,
    timestamp: Date.now() - 14400000 // 4 hours ago
  },
  {
    id: 'a2',
    questionId: '1',
    content: 'Another approach is to use the integral test. Consider f(x) = 1/(x²+1). The integral ∫[1,∞] 1/(x²+1) dx = [arctan(x)]₁^∞ = π/2 - π/4 = π/4, which converges.\n\nSince f(x) is positive, continuous, and decreasing for x ≥ 1, the series ∑(1/(n²+1)) converges by the integral test.',
    author: {
      id: 'user_ans2',
      name: 'Prof. Michael Johnson',
      institution: 'Harvard',
      verified: true
    },
    verified: false,
    citations: 8,
    timestamp: Date.now() - 18000000 // 5 hours ago
  },
  {
    id: 'a3',
    questionId: '1',
    content: 'You could also note that 1/(n²+1) ≤ 1/n² and use the fact that the Basel problem shows ∑(1/n²) = π²/6. This gives an upper bound for the partial sums.',
    author: {
      id: 'user_ans12',
      name: 'Prof. Lisa Wang',
      institution: 'Caltech',
      verified: true
    },
    verified: false,
    citations: 4,
    timestamp: Date.now() - 21600000 // 6 hours ago
  },
  {
    id: 'a4',
    questionId: '2',
    content: 'For small datasets with transformers, I recommend:\n\n1. **Start with a smaller model**: Use DistilBERT or ALBERT instead of full BERT\n2. **Gradual unfreezing**: Freeze most layers initially, then gradually unfreeze\n3. **Lower learning rates**: Use 1e-5 to 5e-5 for fine-tuning\n4. **Data augmentation**: Use techniques like back-translation or paraphrasing\n5. **Early stopping**: Monitor validation loss closely\n6. **Few-shot learning**: Consider using prompt-based approaches or adapters\n\nWith 10k samples, you should be able to get decent results, but be careful of overfitting.',
    author: {
      id: 'user_ans4',
      name: 'Dr. Alex Rodriguez',
      institution: 'Stanford',
      verified: true
    },
    verified: true,
    citations: 15,
    timestamp: Date.now() - 10800000 // 3 hours ago
  },
  {
    id: 'a5',
    questionId: '2',
    content: 'I\'d add to the previous answer: consider using task-adaptive pretraining if you have unlabeled data in your domain. Also, regularization techniques like dropout and weight decay are crucial with small datasets.',
    author: {
      id: 'user_ans5',
      name: 'Maria Kim',
      institution: 'Google Research',
      verified: true
    },
    verified: false,
    citations: 7,
    timestamp: Date.now() - 12600000 // 3.5 hours ago
  },
  {
    id: 'a6',
    questionId: '2',
    content: 'Don\'t forget about cross-validation! With only 10k samples, proper validation strategy is crucial. Use stratified k-fold to ensure balanced splits.',
    author: {
      id: 'user_ans6',
      name: 'Prof. David Chen',
      institution: 'MIT',
      verified: true
    },
    verified: false,
    citations: 3,
    timestamp: Date.now() - 16200000 // 4.5 hours ago
  },
  {
    id: 'a7',
    questionId: '2',
    content: 'Consider using simpler models as baselines first. Sometimes a well-tuned LSTM or even classical ML approaches perform surprisingly well on small datasets.',
    author: {
      id: 'user_ans7',
      name: 'Dr. Jennifer Liu',
      institution: 'UC Berkeley',
      verified: false
    },
    verified: false,
    citations: 2,
    timestamp: Date.now() - 19800000 // 5.5 hours ago
  },
  {
    id: 'a8',
    questionId: '2',
    content: 'Ensemble methods can help too - train multiple models with different random seeds and average their predictions.',
    author: {
      id: 'user_ans8',
      name: 'Sam Wilson',
      institution: 'OpenAI',
      verified: true
    },
    verified: false,
    citations: 5,
    timestamp: Date.now() - 23400000 // 6.5 hours ago
  },
  {
    id: 'a9',
    questionId: '2',
    content: 'If you\'re doing text classification, consider using sentence transformers for feature extraction followed by a simple classifier. Sometimes this works better than full fine-tuning.',
    author: {
      id: 'user_ans9',
      name: 'Dr. Robert Zhang',
      institution: 'Carnegie Mellon',
      verified: true
    },
    verified: false,
    citations: 6,
    timestamp: Date.now() - 25200000 // 7 hours ago
  },
  {
    id: 'a10',
    questionId: '2',
    content: 'Meta-learning approaches like MAML can be effective for few-shot scenarios if you have related tasks.',
    author: {
      id: 'user_ans10',
      name: 'Dr. Emily Brown',
      institution: 'DeepMind',
      verified: true
    },
    verified: false,
    citations: 4,
    timestamp: Date.now() - 27000000 // 7.5 hours ago
  },
  {
    id: 'a11',
    questionId: '3',
    content: 'Tertiary carbons have three alkyl groups attached, creating severe steric hindrance. In SN2 reactions, the nucleophile must approach from the backside (opposite to the leaving group) to achieve the required orbital overlap for bond formation.\n\nWith tertiary substrates, the three bulky alkyl groups block this backside approach, making the SN2 mechanism impossible. The HOMO-LUMO interaction between the nucleophile and the σ* orbital of the C-X bond cannot occur due to steric obstruction.\n\nThis is why tertiary substrates favor SN1 mechanisms instead, where the reaction proceeds through a carbocation intermediate.',
    author: {
      id: 'user_ans11',
      name: 'Dr. Maria Rodriguez',
      institution: 'UC Berkeley',
      verified: true
    },
    verified: true,
    citations: 9,
    timestamp: Date.now() - 28800000 // 8 hours ago
  },
  {
    id: 'a12',
    questionId: '3',
    content: 'To add to the previous answer: you can visualize this with molecular models. The three substituents on a tertiary carbon create a "cone of blocking" that prevents nucleophilic attack from the required 180° angle.',
    author: {
      id: 'user_ans13',
      name: 'Prof. James Wilson',
      institution: 'Harvard',
      verified: true
    },
    verified: false,
    citations: 4,
    timestamp: Date.now() - 32400000 // 9 hours ago
  }
]
