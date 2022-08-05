import React from 'react'
import '../stylesheets/Banner.css';
import broly_logo from '../assets/broly_logo.png';

export default function Banner() {
    // const [count, handlecount] = useState(0);
    // const increment=()=>{
    //     handlecount(count+1)
    //     console.log(count)
    // }
  return (
    <div className='banner'>

        <div className='banner_content'>
            <div className='banner_details'>
            <img 
                src={broly_logo}
                alt="broly_logo"
            />
            <span>
            Earth is at peace after The Tournament of Power but Goku continues to train, knowing there are ever-stronger forces in the universe. With the arrival of a Saiyan warrior named Broly, Goku and Vegeta face their most dangerous challenge yet.
            </span>
            </div>
            <div className='banner_btn'>
               <div className='left-btn'>
                    <button>Play</button>
                    <button id='secondary-btn'>More Info</button>
               </div>
               <div className='right-btn'>
                    <button >16</button>
               </div>
            </div>
        </div>
        <div className="banner--fadeBottom"></div>
    </div>
            
  )
}
