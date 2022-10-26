import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header'
import Trending from './components/Trending'
import Superhero from './components/Superhero'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <div className='bgc'>
        <Trending />
        <Superhero />
      </div>
      <Footer />
    </>
  );
}

export default App;
