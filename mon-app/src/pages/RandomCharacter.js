import React, { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import * as characterService from '../services/characterService'

const RandomCharacter = () =>{
    
    const minId=1
    const maxId=7526  //idMax écrit en dur un traitement pour le rendre dynamique aurait été une meilleure solution

    const[randomCharacter,setRandomCharacter] = useState([])

   async function handleRandomCharacter() {
       const randomId = Math.floor(Math.random() * (maxId - minId +1)) + minId  //génération d'un nombre entier aléatoire entre l'id min et l'id max
       setRandomCharacter(await characterService.getOne(randomId))  //récupération du personnage correspondant à l'id aléatoire
   }
  
   useEffect(() => {
    handleRandomCharacter()
  }
    , [])
  
    return (
    <div className='randomCharacterPage'>
      <h2>Random Character</h2>
      <button onClick={handleRandomCharacter}>Get a random character!</button> {/*bouton permettant de génére un nouvel id aléatoire*/}
      <CharacterCard character={randomCharacter}/> {/*affichage de la carte du personnage aléatoire*/}
    </div>
  );
}
export default RandomCharacter;