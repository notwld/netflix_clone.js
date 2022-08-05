import React, {useState, useEffect  } from 'react'
import '../stylesheets/Nav.css';
import netflix_logo from '../assets/netflix_logo.png';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Player from './Player';

export default function Nav() {
  const [navbar,setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })
  
  return (
    <Router>
    <header className={navbar ? "dark" : ""}> 
        <nav>
          <img
          src={netflix_logo}
          alt='logo'
          />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </ul>
        </nav>
        <div className='secondary-nav'>
          <ul>
            <li>Search</li>
            <li>Bell</li>
            <li><Link to='/player'>Profile</Link></li>
            <Routes>
            <Route path='/player' element={<Player/>} />        
            </Routes>
            
          </ul>
        </div>
      </header>
      </Router>
  )
}

