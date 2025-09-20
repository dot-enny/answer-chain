import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { mockQuestions } from '@/data/mockData'
import HeroSection from '@/components/HeroSection'
import CategoryFilters from '@/components/CategoryFilters'
import SearchAndFilter from '@/components/SearchAndFilter'
import QuestionsList from '@/components/QuestionsList'

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

  return (
    <div className="space-y-8">
      <HeroSection />
      
      <CategoryFilters 
        selectedCategory={selectedCategory}
        onCategoryFilter={handleCategoryFilter}
      />
      
      <SearchAndFilter 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        filteredQuestionsCount={filteredQuestions.length}
      />
      
      <QuestionsList 
        questions={filteredQuestions}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
    </div>
  )
}

export default Home
