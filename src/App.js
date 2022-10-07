import './App.css';
import AllMovies from './Components/AllMovies';
import Footer from './Shared/Footer/Footer';
import NavBar from './Shared/Header/NavBar';

function App() {
  return (
    <div className="App bg-ghost">
      <NavBar/>
      <AllMovies/>
      <Footer/>
    </div>
  );
}

export default App;
