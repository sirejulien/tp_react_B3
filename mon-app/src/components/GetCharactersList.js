import { useState, useEffect } from 'react';

function GetCharactersList(props) {
    const [error, setError] = useState(null);
    const [statusCode, setStatusCode] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
      for (let i = 0; i < 150; i++) {
        fetch("https://api.disneyapi.dev/characters?page="+toString(i))
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setCharacters([...characters,
                            result.data]);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          })  
      }
      
    }, []) 
  
    if (error) {
      return <div>Erreur : {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {characters.map(character => (
            <li key={character._id}>
              {character.name}
            </li>
          ))}
        </ul>
      );
    }
  }

  export default GetCharactersList;