import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import QuestionCard from '@/components/QuestionCard'
import { academicCategories, Question } from '@/data/mockData'

interface QuestionsListProps {
  questions: Question[]
  selectedCategory: string | null
  searchQuery: string
}

function QuestionsList({ questions, selectedCategory, searchQuery }: QuestionsListProps) {
  const selectedCategoryData = selectedCategory 
    ? academicCategories.find(cat => cat.id === selectedCategory)
    : null

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">
          {selectedCategoryData ? `${selectedCategoryData.name} Questions` : 'Recent Questions'}
        </h2>
      </div>
      
      {questions.length > 0 ? (
        <div className="space-y-4">
          {questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            {searchQuery || selectedCategory 
              ? 'No questions found matching your criteria.' 
              : 'No questions yet.'}
          </div>
          <Button asChild variant="outline">
            <Link to="/ask">Ask the First Question</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

export default QuestionsList
