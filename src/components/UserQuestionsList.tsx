import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { academicCategories, mockQuestions, mockAnswers } from '@/data/mockData'
import { Calculator, Atom, Laptop, TestTube, Dna, Settings, Heart, Users, Trophy, MessageCircle, ExternalLink } from 'lucide-react'

// Map icon names to Lucide icon components
const iconMap = {
  Calculator,
  Atom,
  Laptop,
  TestTube,
  Dna,
  Settings,
  Heart,
  Users,
}

interface UserQuestionsListProps {
  currentUserId?: string // In a real app, you'd get this from auth context
}

function UserQuestionsList({ currentUserId = "current-user" }: UserQuestionsListProps) {
  // Filter questions by current user (for demo, we'll show first 3 questions)
  const userQuestions = mockQuestions.slice(0, 3)
  
  const getTimeAgo = (timestamp: number): string => {
    const now = Date.now()
    const diff = now - timestamp
    const days = Math.floor(diff / 86400000)
    const hours = Math.floor(diff / 3600000)
    
    if (days > 0) return `${days}d ago`
    if (hours > 0) return `${hours}h ago`
    return 'Recently'
  }

  if (userQuestions.length === 0) {
    return (
      <div className="text-center py-8">
        <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">You haven't asked any questions yet.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {userQuestions.map((question) => {
        const questionAnswers = mockAnswers.filter(answer => answer.questionId === question.id)
        const category = academicCategories.find(cat => cat.id === question.category)
        const IconComponent = category ? iconMap[category.icon as keyof typeof iconMap] : null
        
        return (
          <div key={question.id} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <Link 
                  to={`/question/${question.id}`}
                  className="font-medium text-foreground hover:text-[var(--accent-orange)] transition-colors line-clamp-2"
                >
                  {question.title}
                </Link>
                
                <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                  {category && (
                    <div className="flex items-center gap-1">
                      {IconComponent && <IconComponent className="h-3 w-3" />}
                      <span>{category.name}</span>
                    </div>
                  )}
                  <span>•</span>
                  <span>{getTimeAgo(question.timestamp)}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    <span>{questionAnswers.length} answer{questionAnswers.length !== 1 ? 's' : ''}</span>
                  </div>
                  {question.bounty && (
                    <>
                      <span>•</span>
                      <div className="flex items-center gap-1 text-[var(--accent-orange)]">
                        <Trophy className="h-3 w-3" />
                        <span>{question.bounty}</span>
                      </div>
                    </>
                  )}
                </div>
                
                {question.tags.length > 0 && (
                  <div className="flex gap-1 mt-2 flex-wrap">
                    {question.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {question.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{question.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                )}
              </div>
              
              <Link 
                to={`/question/${question.id}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UserQuestionsList
