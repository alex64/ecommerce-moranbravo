import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import ItemDetail from "./ItemDetail";
import ErrorDetail from "./ErrorDetail";


const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [ errorData, setErrorData ] = useState({});
    const {itemId} = useParams();

    useEffect(() => {
        const getTCGItemCollection = collection(db, "tgclist");
        const tcgItem = doc(getTCGItemCollection, itemId);
        const tgcQuery = getDoc(tcgItem);

        

        tgcQuery
            .then((itemDetail) => {
                const data = itemDetail.data();
                data.id = itemDetail.id;
                setItemDetail(data);
                setLoaded(true);
            })
            .catch((queryError) => {                
                setErrorData( {
                    id: 'I101',
                    message: queryError.message
                });
            });
    }, [itemId]);    
    return (
        Object.keys(errorData).length > 0 && errorData.constructor === Object
        ? 
            <ErrorDetail errorData={errorData}/> 
        :
            !loaded
            ?
                <p>Loading...</p>
            :
                <ItemDetail item={itemDetail}/>
    )
}

export default ItemDetailContainer;