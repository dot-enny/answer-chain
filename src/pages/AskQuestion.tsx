import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import QuestionTitle from '@/components/QuestionTitle'
import QuestionContent from '@/components/QuestionContent'
import CategorySelector from '@/components/CategorySelector'
import TagsInput from '@/components/TagsInput'
import BountyInput from '@/components/BountyInput'
import UserQuestionsList from '@/components/UserQuestionsList'


function AskQuestion() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [bounty, setBounty] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim() || !content.trim() || !selectedCategory) {
      alert('Please fill in all required fields')
      return
    }

    // Here you would typically send the data to your backend
    console.log('Submitting question:', {
      title,
      content,
      category: selectedCategory,
      tags,
      bounty: bounty || undefined,
    })

    // Reset form after submission
    setTitle('')
    setContent('')
    setSelectedCategory('')
    setTags([])
    setBounty('')
    
    alert('Question submitted successfully!')
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <PageHeader />
        
        <QuestionForm
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          tags={tags}
          setTags={setTags}
          bounty={bounty}
          setBounty={setBounty}
          onSubmit={handleSubmit}
        />
        
        <TipsSection />
        
        <RecentQuestionsSection />
      </div>
    </div>
  )
}

export default AskQuestion

function PageHeader() {
  return (
    <div className="mb-8">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Questions
      </Link>
      
      <h1 className="text-4xl font-bold text-foreground mb-2">Ask a Question</h1>
      <p className="text-xl text-muted-foreground">
        Get expert help from the academic community
      </p>
    </div>
  )
}

interface QuestionFormProps {
  title: string
  setTitle: (title: string) => void
  content: string
  setContent: (content: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  tags: string[]
  setTags: (tags: string[]) => void
  bounty: string
  setBounty: (bounty: string) => void
  onSubmit: (e: React.FormEvent) => void
}

function QuestionForm({
  title,
  setTitle,
  content,
  setContent,
  selectedCategory,
  setSelectedCategory,
  tags,
  setTags,
  bounty,
  setBounty,
  onSubmit
}: QuestionFormProps) {
  return (
    <div className="max-w-6xl">
      <form onSubmit={onSubmit} className="space-y-8">
        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Question */}
          <div className="lg:col-span-2 space-y-6">
            <QuestionTitle title={title} setTitle={setTitle} />
            <QuestionContent content={content} setContent={setContent} />
          </div>

          {/* Right Column - Category */}
          <div className="lg:col-span-1">
            <CategorySelector 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
          </div>
        </div>

        {/* Bottom Row - Tags and Bounty */}
        <div className="grid md:grid-cols-2 gap-6">
          <TagsInput tags={tags} setTags={setTags} />
          <BountyInput bounty={bounty} setBounty={setBounty} />
        </div>

        {/* Submit Section */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="text-sm text-muted-foreground">
              By submitting, you agree to our community guidelines and terms of service.
            </div>
            <Button 
              type="submit" 
              size="lg"
              className="bg-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/90 text-white px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Send className="w-5 h-5 mr-2" />
              Publish Question
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

function TipsSection() {
  return (
    <div className="max-w-4xl mt-12">
      <div className="p-6 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-4">Tips for Better Answers</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Be specific and clear in your question title</li>
          <li>• Include relevant context and what you've tried</li>
          <li>• Choose the most appropriate category</li>
          <li>• Add relevant tags to help others find your question</li>
          <li>• Consider offering a bounty for urgent questions</li>
        </ul>
      </div>
    </div>
  )
}

function RecentQuestionsSection() {
  return (
    <div className="max-w-4xl mt-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">Your Recent Questions</h3>
        <Link 
          to="/" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all questions →
        </Link>
      </div>
      
      <UserQuestionsList />
    </div>
  )
}
