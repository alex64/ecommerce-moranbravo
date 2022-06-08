import { useContext, useState, useCallback } from "react";
import { cartContext } from "./CartContext";
import CartList from "./CartList";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import ErrorDetail from "./ErrorDetail";

const Cart = () => {

    const [ orderId, setOrder ] = useState('');
    const [ errorData, setErrorData ] = useState({});
    const [ name, setName ] = useState('default_user');
    const [ phone, setPhone ] = useState('1234');
    const [ email, setEmail ] = useState('default@default.com');
    const navigate = useNavigate();
    const { cart, totalPrice, totalQuantity, removeItem, clearCart } = useContext(cartContext);
    
    const handleBuyItem = () => {
        navigate('/');
    }

    const deleteCartItem = useCallback((productId) => {
        removeItem(productId);
    }, [removeItem]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const completePurchaseAction = () => {
        const order = {
            "buyer": {
                name,
                phone,
                email
            },
            "items": cart,
            "date": Date.now(),
            "total": totalPrice
        }
        const tgcOrderCollection = collection(db, "tgcorder"); 
        const addQuery = addDoc(tgcOrderCollection, order);
        addQuery
            .then((orderId) => {
                setOrder(orderId.id);
                clearCart();
            })
            .catch((queryError) => {
                const errorMessage = `${queryError.message}. Try again later or contact administrator.`
                setErrorData( {
                    id: 'P101',
                    message: errorMessage
                });
            });
        
    }

    let cartTextQZ;
    let cartActionQZ;
    if(orderId === '') {
        cartTextQZ = <p>Cart is Empy</p>;
        cartActionQZ = 'Buy Items';
    }
    else {
        cartTextQZ = <p>Thank you, {name}!. Your order is {orderId}</p> 
        cartActionQZ = 'Continue buying';
    }

    return (
        totalQuantity === 0 
        ?
            <div className="cartNoItem">
                {cartTextQZ}
                <button onClick={handleBuyItem}>{cartActionQZ}</button>
            </div> 
        :
            <div className="cart">
                <CartList cartList={cart} deleteElement={deleteCartItem}/>
                <div className="cartPrice">
                    <h2>Total Price: ${totalPrice}</h2>
                    <h3>Items: {totalQuantity}</h3>
                    <div className="cartForm">
                        Name: <input className="formText" type="text" onChange={handleNameChange} placeholder={name}/>
                        Phone: <input className="formText" type="text" onChange={handlePhoneChange} placeholder={phone}/>
                        E-mail: <input className="formText" type="text" onChange={handleEmailChange} placeholder={email}/>
                        <button onClick={completePurchaseAction}>Complete Purchase</button>
                    </div>
                    {
                        Object.keys(errorData).length > 0 && errorData.constructor === Object ? <ErrorDetail errorData={errorData} disableHomeButton={true}/>:<></>
                    }
                </div>
            </div>
    )
}

export default Cart;