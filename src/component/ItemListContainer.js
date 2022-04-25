import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {

    const onAdd = (count) => {
        console.log(`Adding ${count} items`);
    }

    return (
        <>
            <p className="itemContainerGreeting">{greeting}</p>
            <ItemCount name="Laptop 1" init={1} stock={10} onAdd={onAdd} />
        </>
        
    )
}

export default ItemListContainer;