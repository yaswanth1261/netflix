import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Dashboard from './Components/Dashboard';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './Components/Pages/Movies';
import Moviedetails from './Components/Details/Moviedetails';
import Playlist from './Components/Pages/Playlist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/netflix' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:Id' element={<Moviedetails/>}/>
        <Route path='/playlist' element={<Playlist/>}/>
    
        

      </Routes>
    </Router>
  
  )
}

export default App


