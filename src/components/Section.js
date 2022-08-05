import React from 'react'
import '../stylesheets/Section.css';
import axios from "./tools/axios";
import requests from "./tools/request";


export default function Section(props) {
  console.log(props.category)
  return (
    <div className='section'>
      <h1>{props.category}</h1>
      <div className='grid'>
        <div className='grid_item'>
          <div className='grid_img'></div>
        </div>
        <div className='grid_item'>
          <div className='grid_img'></div>
        </div>
        <div className='grid_item'>
          <div className='grid_img'></div>
        </div>
        <div className='grid_item'>
          <div className='grid_img'></div>
        </div>
        <div className='grid_item'>
          <div className='grid_img'></div>
        </div>
        <div className='grid_item'>
          <div className='grid_img'></div>
        </div>
        <div className='grid_item'>
          <div className='grid_img'></div>
        </div>
        <div className='grid_item'>
          <div className='grid_img'></div>
        </div>
        <div className='grid_item'>
          <div className='grid_img'></div>
        </div>
      </div>
    </div>
  )
}
