import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import tgcList from "./tcgItems";

const getItem = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const cardElement = tgcList.filter((card) => {
                return Number(id) === card.id;
            })[0];
            resolve(cardElement);
        }, 2000);
    });
}

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState({});
    const [loaded, setLoaded] = useState(false);
    const {id} = useParams();



    useEffect(() => {
        getItem(id)
            .then((itemDet) => {
                console.log(itemDet);
                setItemDetail(itemDet);
                setLoaded(true);
            })
    }, []);

    let returnDetail;
    if(!loaded) {
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