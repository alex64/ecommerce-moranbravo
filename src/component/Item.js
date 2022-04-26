const Item = ({product}) => {
    return (
        <div className="item">
            <h3 className="itemTitle">{product.title}</h3>
            <div className="itemDetails">
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                <img className="itemImage" src={product.pictureUrl}/>
                <p>Stock: {product.stock}</p>
            </div>
            
        </div>
        

    )
}

export default Item;