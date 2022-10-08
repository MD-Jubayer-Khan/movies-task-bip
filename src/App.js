import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllMovies from './Components/AllMovies';
import MovieDetails from './Components/MovieDetails';
import Footer from './Shared/Footer/Footer';
import NavBar from './Shared/Header/NavBar';
import NotFound from './Shared/NotFound';

function App() {
  return (
    <div className="App bg-ghost bg-[url('../src/mesh-gradient.png')]">
      <NavBar/>
      <Routes>
        <Route path='/' element={<AllMovies></AllMovies>}></Route>
        <Route path='/movie/:Id' element={<MovieDetails></MovieDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
