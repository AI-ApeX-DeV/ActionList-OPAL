// Home.js
"use client"
import { useState } from 'react'
import axios from 'axios'
import './app.css'  // Note the capitalized 'A' in 'App.css'

const Home = () => {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const permissionResponse = await axios.post('./api/permissions', { username })
      if (permissionResponse.data.allowed) {
        setMessage('You are authorized to perform this operation.')
      } else {
        setMessage('You are not authorized to perform this operation.')
      }
    } catch (error) {
      setMessage('Error checking permissions')
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>ActionList</h1>
      </header>
      <main className="main-content">
        <h2>Check User Permissions</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Check Permissions</button>
        </form>
        {message && <p className="message">{message}</p>}
      </main>
      <footer className="footer">
        <p>&copy; ActionList by Sharukhali Syed.</p>
      </footer>
    </div>
  )
}

export default Home
