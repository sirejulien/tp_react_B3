import './AppDisney.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CharacterBrowser from './pages/CharacterBrowser';
import RandomCharacter from './pages/RandomCharacter';
import CharacterDetail from './pages/CharacterDetail';

//Composant principal de l'application, il est appelé par l'index.js et contient la barre de titre, la navbar et la page affichée.
const AppDisney = () => {

  return (
        <div className='AppDisney'>
          <div className='titleBar'>
          <h1>Disney Characters Browser</h1>
          </div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Browse' element={<CharacterBrowser />} />
                    <Route path='/Random' element={<RandomCharacter />} />
                    <Route path='/Detail' element={<CharacterDetail />} />
                </Routes>       
        </div>
  )
}

export default AppDisney;
