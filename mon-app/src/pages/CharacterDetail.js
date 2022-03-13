import { useLocation } from "react-router-dom"

const CharacterDetail = () => {
    const location = useLocation()  //utilisation de useLocation() pour permettre de récupérer un objet (ici un personnage) par un Link (voir CharacterCard.js)
    const { character } = location.state

    //page permettant d'afficher le detail des personnages. Elle est accessible en cliquant sur la carte d'un personnage
    //elle mets en forme les infos du personnage récupérer par le Link
    return (
        <div className="characterDetail">
            <img src={character.imageUrl} alt={character.name} /> 
            <div className="characterDetailInfos">
            <h2>{character.name}</h2>
            <p>This would be the character description but the API doesn't provide one...</p>
            <h3>Appearances</h3>
            <span><b>•Films: </b>{character.films.join(", ")}</span><br/>
            <span><b>•Short Films: </b>{character.shortFilms.join(", ")}</span><br/>
            <span><b>•TV Shows: </b>{character.tvShows.join(", ")}</span><br/>
            <span><b>•Video Games: </b>{character.videoGames.join(", ")}</span><br/>
            <span><b>•Park Attractions: </b>{character.parkAttractions.join(", ")}</span><br/>
            </div>
        </div>
    )
}

export default CharacterDetail