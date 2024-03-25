import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './views/MainMenu';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={MainMenu} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
