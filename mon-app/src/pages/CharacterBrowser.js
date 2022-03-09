import React from 'react';
import GetCharactersList from '../components/GetCharactersList';
import ItemContainer from '../components/ItemContainer';

const CharacterBrowser = (props) =>{
  return (
    <div>
      <p>Wow so much cool characters!</p>
      <div>
          <GetCharactersList />
      </div>
    </div>
  );
}
export default CharacterBrowser;