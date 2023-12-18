/////////////////////////////////////////////////
// Standard Imports
/////////////////////////////////////////////////
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/////////////////////////////////////////////////
// Component Imports
/////////////////////////////////////////////////
import Home from './Components/Pages/Home/Home'
import Contact from './Components/Pages/Contact/Contact'
import Work from './Components/Pages/Work/Work'
import Live from './Components/Pages/Live/Live'
import Apparel from './Components/Pages/Apparel/Apparel'
import BlackWhite from './Components/Pages/BlackWhite/BlackWhite'
import EverettStudios from './Components/Pages/EverettStudios/EverettStudios'
import Posters from './Components/Pages/Posters/Posters'
import Resume from './Components/Pages/Resume/Resume'
import Portraits from './Components/Pages/Portraits/Portraits'


/////////////////////////////////////////////////
// Style Imports
/////////////////////////////////////////////////
import './App.css';


/////////////////////////////////////////////////
// Application Code
/////////////////////////////////////////////////

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/contact' exact Component={Contact} />
        <Route path='/work' exact Component={Work} />
        <Route path='/live' exact Component={Live} />
        <Route path='/apparel' exact Component={Apparel} />
        <Route path='/bw' exact Component={BlackWhite} />
        <Route path='/everettstudios' exact Component={EverettStudios} />
        <Route path='/posters' exact Component={Posters} />
        <Route path='/resume' exact Component={Resume} />
        <Route path='/portraits' exact Component={Portraits} />
      </Routes>
    </Router>

    // <Navbar />
  );
}

export default App;
