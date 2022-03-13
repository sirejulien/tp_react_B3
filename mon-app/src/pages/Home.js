import React from 'react';

//page d'accueil, affiche une image stockée localement et un message de bienveu
const Home = () =>{
  return (
    <div className='homePage'>
      <img src="/img/mickey_welcome.png"/>
      <h2>Welcome to Disney Characters Browser!</h2>
    </div>
  );
}
export default Home;