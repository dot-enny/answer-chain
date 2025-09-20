import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Question, academicCategories } from '@/data/mockData'
import { MessageCircle, Trophy, Clock, CheckCircle } from 'lucide-react'

interface QuestionCardProps {
  question: Question
}

function QuestionCard({ question }: QuestionCardProps) {
  const category = academicCategories.find(cat => cat.id === question.category)
  const timeAgo = getTimeAgo(question.timestamp)
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <Link 
              to={`/questions/${question.id}`}
              className="text-lg font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 question-title"
            >
              {question.title}
            </Link>
            <div className="flex items-center gap-2 flex-wrap">
              {category && (
                <Badge variant="secondary" className="text-xs">
                  <span className="mr-1">{category.icon}</span>
                  {category.name}
                </Badge>
              )}
              <Badge variant="outline" className="text-xs">
                {question.level}
              </Badge>
              {question.bounty && (
                <Badge variant="default" className="text-xs bg-emerald-600 hover:bg-emerald-700">
                  <Trophy className="w-3 h-3 mr-1" />
                  {question.bounty}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 academic-content">
          {question.content}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <span>{question.answerCount} answers</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{timeAgo}</span>
          </div>
          
          <div className="flex items-center gap-1 ml-auto">
            {question.author.verified && (
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            )}
            <span className="font-medium text-foreground">{question.author.name}</span>
            <span className="text-xs">• {question.author.institution}</span>
          </div>
        </div>
        
        {question.tags.length > 0 && (
          <div className="flex gap-1 mt-3 flex-wrap">
            {question.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function getTimeAgo(timestamp: number): string {
  const now = Date.now()
  const diff = now - timestamp
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  
  if (days > 0) return `${days}d ago`
  if (hours > 0) return `${hours}h ago`
  if (minutes > 0) return `${minutes}m ago`
  return 'Just now'
}

export default QuestionCard
