import Item from "./Item";

const ItemList = ({productList}) => {
    return (
        <div className="itemList">
            { 
                productList.map((item) => {
                    return <Item key={item.id} product={item}/>
                })
            }
        </div>
    )
}

export default ItemList;