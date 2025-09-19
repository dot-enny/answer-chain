import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <nav className="bg-slate-800 px-4 sm:px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="nav-brand">
            <Link 
              to="/" 
              className="text-white text-xl font-bold hover:text-blue-400 transition-colors"
            >
              My React App
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/" 
              className="text-white hover:bg-slate-700 px-3 py-2 rounded-md transition-colors text-center"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:bg-slate-700 px-3 py-2 rounded-md transition-colors text-center"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:bg-slate-700 px-3 py-2 rounded-md transition-colors text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <main className="flex-1 p-4 sm:p-8 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
