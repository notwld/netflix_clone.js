import React, {useState, useEffect  } from 'react'
import '../stylesheets/Nav.css';
import netflix_logo from '../assets/netflix_logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav() {
  const [navbar,setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY)
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
    // 
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
            <li>Profile</li>
          </ul>
        </div>
      </header>
  )
}

