import { useState, useEffect } from 'react';
import axios from 'axios';

function GetCharactersList() {
    const [error, setError] = useState(null);
    const [statusCode, setStatusCode] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
      fetch("https://comicvine.gamespot.com/api/characters/?api_key=adff6e198db93a38ac3620b23b580ab09e7e2332&format=json&field_list=aliases,api_detail_url,birth,deck,gender,id,image,name,origin,publisher,real_name",
      {
        method:'GET',
        mode: "no-cors",
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(
          (results) => {
            setIsLoaded(true);
            setCharacters(results);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          },
          (status_code) => {
            setIsLoaded(true);
            setStatusCode(status_code);
          }
        ) 
    }, []) 
  
    if (error) {
      return <div>Erreur : {error}, Status : {statusCode}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        /*<ul>
          {characters.map(character => (
            <li key={character.id}>
              {character.name}
            </li>
          ))}
        </ul>*/
        <p>Status : {statusCode} - Pas d'erreurs</p>
      );
    }
  }

  export default GetCharactersList;