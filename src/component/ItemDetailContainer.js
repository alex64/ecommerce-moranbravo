import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import poke1 from "../images/en_US-SWSH9-032-corphish-1.webp"

const itemDescription = {
        id: 1,
        title: "Corphis",
        set: "Brilliant Stars",
        rarity: "Common",
        number: "31/172",
        pictureUrl: poke1,
        stock: 10,
        type: "Basic Pokemon",
        price: 0.02,
        cardText: "No matter how dirty the water in the river, it will adapt and thrive. It has a strong will to survive.",
        category: ["Pokemon", "Common"]
}

const getItem = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(itemDescription);
    }, 2000);
});

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState({});

    useEffect(() => {
        getItem
            .then((itemDet) => {
                console.log(itemDet);
                setItemDetail(itemDet);
            })
    }, []);

    let returnDetail;
    if(Object.keys(itemDetail).length === 0 && itemDetail.constructor === Object) {
        returnDetail = <p>Loading...</p>
    }
    else {
        returnDetail = <ItemDetail item={itemDetail}/>
    }
    
    return (
        returnDetail
    )
}

export default ItemDetailContainer;