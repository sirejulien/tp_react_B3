import React, { useCallback, useEffect, useState } from 'react';
import CharacterCardsContainer from '../components/CharacterCardsContainer';
import * as characterService from '../services/characterService'

const CharacterBrowser = () => {
  const [numPage, setNumPage] = useState(1)

  const [characters, setCharacters] = useState([])

  const fetchCharactersHandler = useCallback(async () => {
    const response = await characterService.getPage(numPage)
    setCharacters(response.data)
    window.scrollTo(0,0)
  }, [numPage])

  useEffect(() => {
    fetchCharactersHandler()
  }
    , [fetchCharactersHandler])

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
      <CharacterCardsContainer characters={characters} />
      <div className='pagination'>
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