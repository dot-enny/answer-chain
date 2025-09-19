import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link 
        to="/"
        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md transition-colors font-medium"
      >
        Go back to Home
      </Link>
    </div>
  )
}

export default NotFound
