import Item from "./Item"

const ItemContainer=(props) => {

    return (
        <div>
            <h2>ItemContainer</h2>
            {props.listItem.map(i => 
                <Item key={i.id} item={i}> </Item>
                )}
        </div>
    )
    }

export default ItemContainer