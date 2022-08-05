import React,{useEffect,useState} from 'react'
import '../stylesheets/Section.css';
import axios from "./tools/axios";
import requests from "./tools/request";


export default function Section(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // if [], run once when row loads, and don't run again
    // if variable passed [movies] dependency whenever movies changes so this runs

    async function fetchData() {
      const request = await axios.get(props.fetch);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetch]);
  const handleClick = (id)=>{
    const movie = movies.find(movie => movie.id === id);
    console.log(movie);
    
  
  }
  return (
    <div className='section'>
      <h1>{props.category}</h1>
      <div className='grid'>
        {movies.map((movie) => (
      <div className='grid_item' onClick={handleClick(movie.id)}>
          <div className='grid_img'>
            <img  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
          </div>
        </div>   
        ))}  
    </div>
  </div>
  )
}

