import React, { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import * as characterService from '../services/characterService'

const RandomCharacter = () =>{
    
    const minId=1
    const maxId=7526

    const[randomCharacter,setRandomCharacter] = useState([])

   async function handleRandomCharacter() {
       const randomId = Math.floor(Math.random() * (maxId - minId +1)) + minId
       setRandomCharacter(await characterService.getOne(randomId))
   }
  
   useEffect(() => {
    handleRandomCharacter()
  }
    , [])
  
    return (
    <div className='randomCharacterPage'>
      <h2>Random Character</h2>
      <button onClick={handleRandomCharacter}>Get a random character!</button>
      <CharacterCard character={randomCharacter}/>
    </div>
  );
}
export default RandomCharacter;