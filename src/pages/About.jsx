import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our React application.</p>
      <p>Built with Vite and React Router!</p>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Go to Home</Link>
        <Link to="/contact">Go to Contact</Link>
      </nav>
    </div>
  )
}

export default About
