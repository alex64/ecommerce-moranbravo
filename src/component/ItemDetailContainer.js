import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase";

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState({});
    const [loaded, setLoaded] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        const getTCGItemCollection = collection(db, "tgclist");
        const tcgItem = doc(getTCGItemCollection, id);
        const tgcQuery = getDoc(tcgItem);

        tgcQuery
            .then((itemDetail) => {
                const data = itemDetail.data();
                data.id = itemDetail.id;
                setItemDetail(data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
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