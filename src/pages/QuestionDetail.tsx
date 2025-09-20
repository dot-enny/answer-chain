import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { mockQuestions, mockAnswers, academicCategories } from '@/data/mockData'
import { 
  ArrowLeft, 
  Clock, 
  Trophy, 
  CheckCircle, 
  ThumbsUp, 
  ThumbsDown, 
  Share, 
  Bookmark,
  MessageCircle,
  Calculator, 
  Atom, 
  Laptop, 
  TestTube, 
  Dna, 
  Settings, 
  Heart, 
  Users 
} from 'lucide-react'

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

function QuestionDetail() {
  const { id } = useParams<{ id: string }>()
  
  // Find the question by ID
  const question = mockQuestions.find(q => q.id === id)
  
  if (!question) {
    return (
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Question Not Found</h1>
        <p className="text-muted-foreground">The question you're looking for doesn't exist.</p>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    )
  }

  const category = academicCategories.find(cat => cat.id === question.category)
  const IconComponent = category ? iconMap[category.icon as keyof typeof iconMap] : null
  const timeAgo = getTimeAgo(question.timestamp)
  const questionAnswers = mockAnswers.filter(answer => answer.questionId === question.id)

  return (
    <div className="space-y-6">
      {/* Back Navigation */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Questions
          </Button>
        </Link>
      </div>

      {/* Main Question Card */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl font-bold text-foreground leading-tight">
                {question.title}
              </h1>
              
              {/* Question Metadata */}
              <div className="flex items-center gap-4 flex-wrap">
                {category && (
                  <Badge variant="secondary" className="text-sm">
                    {IconComponent && <IconComponent className="h-4 w-4 mr-2" />}
                    {category.name}
                  </Badge>
                )}
                <Badge variant="outline" className="text-sm">
                  {question.level}
                </Badge>
                {question.bounty && (
                  <Badge variant="default" className="text-sm bg-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/90 text-[var(--accent-orange-foreground)]">
                    <Trophy className="w-4 h-4 mr-2" />
                    {question.bounty}
                  </Badge>
                )}
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Asked {timeAgo}</span>
                </div>
              </div>
            </div>

            {/* Question Actions */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsDown className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Question Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-foreground leading-relaxed whitespace-pre-wrap">
              {question.content}
            </p>
          </div>

          <Separator />

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold">
                  {question.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{question.author.name}</span>
                  {question.author.verified && (
                    <CheckCircle className="w-4 h-4 text-[var(--accent-orange)]" />
                  )}
                </div>
                <span className="text-sm text-muted-foreground">{question.author.institution}</span>
              </div>
            </div>

            {/* Answer Count */}
            <div className="flex items-center gap-1 text-muted-foreground">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{questionAnswers.length} answer{questionAnswers.length !== 1 ? 's' : ''}</span>
            </div>
          </div>

          {/* Tags */}
          {question.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {question.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Answers Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground">
            {questionAnswers.length} Answer{questionAnswers.length !== 1 ? 's' : ''}
          </h2>
          <Button>
            Write an Answer
          </Button>
        </div>

        {questionAnswers.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No answers yet</h3>
              <p className="text-muted-foreground mb-4">Be the first to answer this question!</p>
              <Button>Write an Answer</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {questionAnswers
              .sort((a, b) => {
                // Sort by verified first, then by citations, then by timestamp
                if (a.verified && !b.verified) return -1
                if (!a.verified && b.verified) return 1
                if (a.citations !== b.citations) return b.citations - a.citations
                return b.timestamp - a.timestamp
              })
              .map((answer) => (
                <Card key={answer.id} className={answer.verified ? 'border-green-200 dark:border-green-800' : ''}>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {/* Answer Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-semibold text-sm">
                              {answer.author.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground">{answer.author.name}</span>
                              {answer.author.verified && (
                                <CheckCircle className="w-4 h-4 text-[var(--accent-orange)]" />
                              )}
                              {answer.verified && (
                                <Badge variant="outline" className="text-xs border-green-500 text-green-700 dark:text-green-400">
                                  ✓ Verified Answer
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{answer.author.institution}</span>
                              <span>{getTimeAgo(answer.timestamp)}</span>
                              <span>{answer.citations} citation{answer.citations !== 1 ? 's' : ''}</span>
                            </div>
                          </div>
                        </div>

                        {/* Answer Actions */}
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Answer Content */}
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        <div className="text-foreground leading-relaxed whitespace-pre-wrap">
                          {answer.content}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        )}
      </div>
    </div>
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

export default QuestionDetail