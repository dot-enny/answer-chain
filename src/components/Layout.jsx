import { Outlet, Link } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">My React App</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
