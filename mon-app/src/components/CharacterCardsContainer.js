import CharacterCard from "./CharacterCard"

const CharacterCardsContainer=(props) => {

    return (
        <div className="characterCardsContainer">
            {props.characters.map(c => 
                <CharacterCard key={c._id} character={c}/>
                )}
        </div>
    )
    }

export default CharacterCardsContainer