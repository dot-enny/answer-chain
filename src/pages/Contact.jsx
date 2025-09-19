import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Contact Us
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Get in touch with us!
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg space-y-3">
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Email:</span> contact@example.com
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Phone:</span> (555) 123-4567
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
          to="/about"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors text-center"
        >
          Go to About
        </Link>
      </nav>
    </div>
  )
}

export default Contact
