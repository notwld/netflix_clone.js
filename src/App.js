import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Section from './components/Section';
import request from './components/tools/request';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Section category='Netflix Orignals' fetch={request.fetchNetflixOriginals}/>
      <Section category='Trending' fetch={request.fetchTrending}/>
      <Section category='Top 10' fetch={request.fetchTopRated}/>
      <Section category='Horror' fetch={request.fetchHorrorMovies}/>
      <Section category='Comedy' fetch={request.fetchComedyMovies}/>
    </div>
  );
}

export default App;
