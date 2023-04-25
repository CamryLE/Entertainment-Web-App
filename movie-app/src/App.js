import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import movies from './movies.json'
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <Routes>
          <Route index element={<Home movies={movies} />} /> 
          <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
