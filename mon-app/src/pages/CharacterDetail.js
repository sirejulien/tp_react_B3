import { useLocation } from "react-router-dom"

const CharacterDetail = () => {
    const location = useLocation()
    const { character } = location.state

    return (
        <div className="characterDetail">
            <h2>{character.name}</h2>
            <img src={character.imageUrl} alt={character.name} />
            <p>This would be the character description but the API doesn't provide one...</p>
        </div>
    )
}

export default CharacterDetail