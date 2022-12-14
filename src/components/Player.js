import React from 'react'
import '../stylesheets/Player.css';
import ReactPlayer from 'react-player'
export default function Player() {
    

  return (
    <div className='player'>
     

        <ReactPlayer 
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width='100%'
            height='100%'
            controls
            playing
            loop
            volume={1}
            />
    </div>
  )
}
