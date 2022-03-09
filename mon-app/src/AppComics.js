import { useState } from 'react';
import './AppComics.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CharacterBrowser from './pages/CharacterBrowser';

const AppComics = () => {

  return (
        <div className='AppComics'>
            <h1>AppComics</h1>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Browse' element={<CharacterBrowser />} />
                </Routes>       
        </div>
  )
}

export default AppComics;
