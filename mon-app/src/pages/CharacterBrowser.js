import React, { useCallback, useEffect, useState } from 'react';
import ItemContainer from '../components/ItemContainer';
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

  return (
    <div>
      <p>Wow so much cool characters!</p>
      <ItemContainer characters={characters} />
      <div className='pagination'>
        <button onClick={handlePreviousPage}>&laquo;</button>
        <button>{numPage}</button>
        <button onClick={handleNextPage}>&raquo;</button>
      </div>
    </div>
  );
}
export default CharacterBrowser;