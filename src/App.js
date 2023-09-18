import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import Home from './Components/Home/Home';
import PageNotfound from './Components/PageNotfound/PageNotfound';
import Footer from './Components/Footer/Footer';
import "./App.scss"
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
          <Route  element={<PageNotfound/>}/>
        </Routes>
      </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
