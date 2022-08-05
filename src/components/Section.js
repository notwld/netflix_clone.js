import React,{useEffect,useState} from 'react'
import '../stylesheets/Section.css';
import axios from "./tools/axios";


export default function Section(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetch);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetch]);
  

  return (
    <div className='section'>
      <h1>{props.category}</h1>
      <div className='grid'>
        {movies.map((movie) => (
      <div className='grid_item' >
          <div className='grid_img'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
          </div>
        </div>   
        ))}  
    </div>
  </div>
  )
}

