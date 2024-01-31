import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
const Home = () => {
  return (
    <div className="container">
      <h1 className="title">To-Do List</h1>

      <div className="button-container">
        <button className="button button-primary">
            <Link to={'/login'}>Login</Link></button>
        <button className="button button-secondary"><Link to={'/signup'}>SignUp</Link></button>
      </div>

      <p className="description">Welcome to our to-do list application! Get organized and stay productive.</p>
    </div>
  )
}

export default Home