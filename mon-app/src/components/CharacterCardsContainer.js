import CharacterCard from "./CharacterCard"

const CharacterCardsContainer=(props) => {

    //affichage des cartes des personnages
    //ce composant permet la mise en forme du "tableau"
    return (
        <div className="characterCardsContainer">
            {props.characters.map(c => 
                <CharacterCard key={c._id} character={c}/>
                )}
        </div>
    )
    }

export default CharacterCardsContainer