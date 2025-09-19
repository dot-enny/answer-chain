import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a React app with React Router!</p>
      <nav>
        <Link to="/about" style={{ marginRight: '1rem' }}>Go to About</Link>
        <Link to="/contact">Go to Contact</Link>
      </nav>
    </div>
  )
}

export default Home
