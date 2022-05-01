const ItemDetail = ({item}) => {


    return (
        <div className="itemDetailContainer">
                    <img className="itemDetailImage" src={item.pictureUrl}/>
                    <div className="itemDetail">
                        <h1 className="itemDetailTitle">{item.title}</h1>
                        <h2 className="itemDetailPrice">Price $ {item.price}</h2>
                        <div className="itemDetailDescription">
                            <p className="itemDetailDescSet">Set: {item.set}</p>
                            <p className="itemDetailDescRarity">Rarity: {item.rarity}</p>
                            <p className="itemDetailDescNumber">Number: {item.number}</p>
                            <p className="itemDetailDescType">Type: {item.type}</p>
                        </div>
                        <div className="itemDetailCategory">
                            {
                                item["category"]["map"]((category, index) => {
                                    return <p className="itemDetailCategoryItem" key={index}>{category}</p>
                                })
                            }
                        </div>
                        <div className="itemDetailPurchaseMenu">
                            <p className="itemDetailPurchaseStock">Stock: {item.stock}</p>
                        </div>
                    </div>
                </div>
        
    )
}

export default ItemDetail;