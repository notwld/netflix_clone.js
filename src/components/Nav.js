import React, {useState, useEffect  } from 'react'
import '../stylesheets/Nav.css';
import netflix_logo from '../assets/netflix_logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav() {
  const [show, handleShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });

  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);
  return (
    // 
    <header className={`.transparent`}> 
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

