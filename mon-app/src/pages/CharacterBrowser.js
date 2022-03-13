import React, { useCallback, useEffect, useState } from 'react';
import CharacterCardsContainer from '../components/CharacterCardsContainer';
import * as characterService from '../services/characterService'

const CharacterBrowser = () => {
  const [numPage, setNumPage] = useState(1) //par défaut page 1 demandée

  const [characters, setCharacters] = useState([]) //création du state contenant les personnages affichés

  const fetchCharactersHandler = useCallback(async () => {
    const response = await characterService.getPage(numPage)  //appel de l'API pour la page demandée
    setCharacters(response.data)  //mis a jour des personnages affichés
    window.scrollTo(0,0)  //retour en haut de page lors du changement de page 
  }, [numPage])

  useEffect(() => { //appel de chargement des personnages lors de l'arrivée sur la page
    fetchCharactersHandler()
  }
    , [fetchCharactersHandler])

    //Fonctions gérant le changement de page. La dernière page (149) est écrite en dur mais il aurait été possible de faire un traitement pour rendre ce nombre dynamique en cas de changement de l'api
  function handleNextPage() {
    setNumPage((previousState) => {
      if (previousState === 149) {
        return 1
      } else {
        return previousState + 1
      }
    })
  }
  function handlePreviousPage() {
    setNumPage((previousState) => {
      if (previousState === 1) {
        return 149
      } else {
        return previousState - 1
      }
    })
  }
  function handleFirstPage() {
    setNumPage(1)
  }
  function handleLastPage() {
    setNumPage(149)
  }

  return (
    <div className='characterBrowserPage'>
      <h2>Characters Browser</h2>
      <CharacterCardsContainer characters={characters} /> {/* afichage du composant "Container" qui se charge d'appelé le composant "Card" pour chaque personnage*/}
      <div className='pagination'> {/*division contenant les boutons de changement de page de personnages*/}
        <button onClick={handleFirstPage}>&lt;&lt;</button>
        <button onClick={handlePreviousPage}>&lt;</button>
        <button>{numPage}</button>
        <button onClick={handleNextPage}>&gt;</button>
        <button onClick={handleLastPage}>&gt;&gt;</button>
      </div>
    </div>
  );
}
export default CharacterBrowser;