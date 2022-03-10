import Item from "./Item"

const ItemContainer=(props) => {

    return (
        <div className="itemContainer">
            {props.characters.map(c => 
                <Item key={c._id} character={c}/>
                )}
        </div>
    )
    }

export default ItemContainer