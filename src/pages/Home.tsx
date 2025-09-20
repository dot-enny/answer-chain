import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import QuestionCard from '@/components/QuestionCard'
import { academicCategories, mockQuestions } from '@/data/mockData'
import { Search, Filter } from 'lucide-react'

function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const selectedCategory = searchParams.get('category')

  const filteredQuestions = useMemo(() => {
    let filtered = mockQuestions

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(q => q.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(q => 
        q.title.toLowerCase().includes(query) ||
        q.content.toLowerCase().includes(query) ||
        q.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [selectedCategory, searchQuery])

  const handleCategoryFilter = (categoryId: string | null) => {
    if (categoryId) {
      setSearchParams({ category: categoryId })
    } else {
      setSearchParams({})
    }
  }

  const selectedCategoryData = selectedCategory 
    ? academicCategories.find(cat => cat.id === selectedCategory)
    : null

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground font-serif tracking-tight">
          Ask a question. Get a verifiable answer.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif leading-relaxed">
          Connect with experts and get verified answers to your questions through blockchain-powered verification.
        </p>
        <div className="pt-4">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link to="/ask">Ask a New Question</Link>
          </Button>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground font-serif">Academic Categories</h2>
          {selectedCategory && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleCategoryFilter(null)}
            >
              Clear Filter
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {academicCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryFilter(category.id)}
              className="justify-start h-auto p-3"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{category.icon}</span>
                <div className="text-left">
                  <div className="font-medium text-sm">{category.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {category.id === 'mathematics' ? '12 questions' : 
                     category.id === 'computer-science' ? '18 questions' :
                     category.id === 'physics' ? '8 questions' :
                     category.id === 'chemistry' ? '6 questions' :
                     category.id === 'biology' ? '14 questions' : 
                     category.id === 'engineering' ? '9 questions' :
                     category.id === 'medicine' ? '7 questions' : '5 questions'}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {filteredQuestions.length} question{filteredQuestions.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {selectedCategoryData && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Filtering by:</span>
            <Badge variant="default" className="gap-1">
              <span>{selectedCategoryData.icon}</span>
              {selectedCategoryData.name}
            </Badge>
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground font-serif">
            {selectedCategoryData ? `${selectedCategoryData.name} Questions` : 'Recent Questions'}
          </h2>
        </div>
        
        {filteredQuestions.length > 0 ? (
          <div className="space-y-4">
            {filteredQuestions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4 font-serif">
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
    </div>
  )
}

export default Home
