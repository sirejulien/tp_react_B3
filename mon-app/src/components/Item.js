
const Item=(props) => {

    return (
        <div className="characterCard">
            <img src={props.character.imageUrl} alt={props.character.name}></img>
            <h2>{props.character.name}</h2>
        </div>
    )
    }

export default Item