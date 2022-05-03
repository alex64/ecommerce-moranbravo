import { useNavigate } from "react-router-dom";

const Item = ({product}) => {

    const navigate = useNavigate();

    const handleSeeDetail = () => {
        navigate(`/item/${product.id}`);
    }

    return (
        <div className="item">
            <h3 className="itemTitle">{product.title}</h3>
            <div className="itemDetails">
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                <img className="itemImage" src={product.pictureUrl}/>
                <p>Stock: {product.stock}</p>

                <button onClick={handleSeeDetail}>See Detail</button>
            </div>
            
        </div>
        

    )
}

export default Item;