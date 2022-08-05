import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Section category='Trending' />
      <Section category='Movies' />
      <Section category='Anime' />
      <Section category='Top 10' />
    </div>
  );
}

export default App;
