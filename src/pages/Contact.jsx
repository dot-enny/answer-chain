import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with us!</p>
      <div>
        <p>Email: contact@example.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Go to Home</Link>
        <Link to="/about">Go to About</Link>
      </nav>
    </div>
  )
}

export default Contact
