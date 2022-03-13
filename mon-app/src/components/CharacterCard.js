import { Link } from "react-router-dom"

//Carte d'un personnage
//La carte est elle meme un lien vers la page de detail du personnage
const CharacterCard=(props) => {

    return (
        <Link to={"/Detail"} className="linkCharacterCard" state={{character: props.character}}>
        <div className="characterCard">
            <img src={props.character.imageUrl} alt={props.character.name}></img>
            <h2>{props.character.name}</h2>
        </div>
        </Link>
    )
    }

export default CharacterCard