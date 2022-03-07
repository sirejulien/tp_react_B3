import {useState} from 'react';

const Comp1 = (props) => {

    const [myState, setState] = useState('Salut les amis!')
    
    const handleClick = () => {
        setState('Hola gringos!')
        console.log('valeur de variable: ', myState)
    }

    const unBooleen = (props.maPremiereProps==='Salsifi')

    return (
      <div>
        <h1>Titre Composant</h1>
        {myState}
        <p>Ceci est un paragraphe</p>
        {[1,2,3,4,5].map(x => x*x).join(', ')}
        <br/>
        {unBooleen && 'Il y a un salsifi'}
        <br/>
        {!unBooleen && "Il n'y a pas de salsifi"}
        <br/>
        {props.maPremiereProps}
        <br/>
        <button onClick={handleClick}>Click me Daddy!</button>
      </div>
    );
  }
  
  export default Comp1;