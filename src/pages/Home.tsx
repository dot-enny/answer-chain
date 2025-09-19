import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Welcome to the Home Page
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        This is a React app with React Router and Tailwind CSS!
      </p>
      <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <Link 
          to="/about" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors text-center"
        >
          Go to About
        </Link>
        <Link 
          to="/contact"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors text-center"
        >
          Go to Contact
        </Link>
      </nav>
    </div>
  )
}

export default Home
