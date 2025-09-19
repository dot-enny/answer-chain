import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        About Us
      </h1>
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This is the about page of our React application.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Built with Vite, React Router, and Tailwind CSS!
        </p>
      </div>
      <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <Link 
          to="/" 
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors text-center"
        >
          Go to Home
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

export default About
