import { useState } from 'react';
import './AppDisney.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CharacterBrowser from './pages/CharacterBrowser';

const AppDisney = () => {

  return (
        <div className='AppDisney'>
            <h1>AppDisney</h1>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Browse' element={<CharacterBrowser />} />
                </Routes>       
        </div>
  )
}

export default AppDisney;
