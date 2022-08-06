import React,{useEffect,useState} from 'react'
import '../stylesheets/Section.css';
import axios from "./tools/axios";


export default function Section(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetch);
      console.log(request.data);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetch]);
  
  const images = document.querySelectorAll('.grid_img');
  const content = document.querySelectorAll('.grid_content');
  images.forEach((image) => {
   for(let i=0;i<images.length;i++){
    images[i].addEventListener('mouseover', () => {
      content[i].style.display = 'block';
    });
    content[i].addEventListener('mouseover', () => {
      content[i].style.display = 'block';
      images[i].style.opacity = '0.5';
      images[i].style.transform = 'scale(1.1)';


    }
    );
    images[i].addEventListener('mouseout', () => {
      content[i].style.display = 'none';
      images[i].style.opacity = '1';
      images[i].style.transform = 'scale(1)';
    }
    )
    content[i].addEventListener('mouseout', () => {
      content[i].style.display = 'none';
      images[i].style.opacity = '1';
      images[i].style.transform = 'scale(1)';
    }
    )
    }
    
  } )
  const turncate = (text, length) => {
    if ((text.length||160) > length) {
      return text.substring(0, length) + '...';
    } else {
      return text;
    }
  }
  

  return (
    <div className='section'>
      <h1>{props.category}</h1>
      <div className='grid'>
        {movies.map((movie) => (
      <div className='grid_item' >
          <div className='grid_img'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
          </div>
          <div className='grid_content'>
            <h2>{movie.name || movie.title || movie.original_name || movie.original_title}</h2>
            <p>{turncate(movie.overview,130) || turncate(movie.description,130) || turncate(movie.synopsis,130)}</p>
            {/* <p>{movie.overview || movie.description}</p> */}
            <div className='additional_content'>
            <span>Release Date: {movie.release_date || movie.first_air_date}</span>
            <span>Rating: {String(movie.vote_average).slice(.2)}</span>
            </div>
            </div>
        </div>   
        ))}  
    </div>
  </div>
  )
}

