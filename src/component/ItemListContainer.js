import { useEffect, useState } from "react";
//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import poke1 from "../images/en_US-SWSH9-032-corphish-1.webp"
import poke2 from "../images/en_US-SWSH9-049-shinx.webp"
import poke3 from "../images/en_US-SWSH9-074-trapinch.webp"

const productsArray = [
    {
        id: 1,
        title: "Corphis",
        description: "SWSH09: Brilliant Stars",
        price: 0.02,
        pictureUrl: poke1,
        stock: 10
    },
    {
        id: 2,
        title: "Shinx",
        description: "SWSH09: Brilliant Stars",
        price: 0.13,
        pictureUrl: poke2,
        stock: 5
    },
    {
        id: 3,
        title: "Trapinch",
        description: "SWSH09: Brilliant Stars",
        price: 0.02,
        pictureUrl: poke3,
        stock: 15
    }
];

const serverCall = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(productsArray);
    }, 2000);
});

const ItemListContainer = ({greeting}) => {

    /*const onAdd = (count) => {
        console.log(`Adding ${count} items`);
    }*/

    const [productList, setProductList] = useState([]);
    
    useEffect(() => {
        serverCall
            .then((productArray) => {
                setProductList(productArray);
            })
            /*.catch((err) => {
                console.log(err);
            });*/
        
    }, []);

    return (
        <>
            <p className="itemContainerGreeting">{greeting}</p>
            {/* <ItemCount name="Laptop 1" init={1} stock={10} onAdd={onAdd} /> */}
            <ItemList productList={productList}/>
        </>
        
    )
}

export default ItemListContainer;