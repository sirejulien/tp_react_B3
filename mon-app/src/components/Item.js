
const Item=(props) => {

    return (
        <div>
            <img src={props.item.image} alt={"image principale "+props.item.titre}></img>
            <h3>{props.item.titre}</h3>
            <p>{props.item.description}</p>
            <p>{props.item.prix}</p>
        </div>
    )
    }

export default Item