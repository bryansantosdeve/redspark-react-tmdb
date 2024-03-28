import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './views/MainMenu';
import MovieDetails from './views/MovieDetails';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={MainMenu} />
          <Route path='/content/:contentId' Component={MovieDetails} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
