import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import ItemList from "./ItemList";
import { db } from "../firebase";

const ItemListContainer = ({greeting}) => {
    const [loaded, setLoaded] = useState(false);
    const [productList, setProductList] = useState([]);
    const {categoryId} = useParams();
    
    useEffect(() => {
        const getTCGItemCollection = collection(db, "tgclist");
        let tgcQuery;
        if(categoryId === undefined) {
            tgcQuery = getDocs(getTCGItemCollection);
        } else {
            const categoryFilter = query(getTCGItemCollection, where("category", "array-contains", categoryId));
            tgcQuery = getDocs(categoryFilter);
        }

        tgcQuery
            .then((productArray) => {
                const productData = productArray.docs.map((doc)=> {
                    const data = doc.data();
                    data.id = doc.id;
                    return data;
                  });

                setProductList(productData);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
        
    }, [categoryId]);

    const greetingMessage = <p className="itemContainerGreeting">{greeting}</p>;
    let returnList
    if(!loaded) {
        returnList = <p>Loading...</p>
    }
    else {
        returnList = <ItemList productList={productList}/>
    }

    return (
        <>
            {greetingMessage}
            {returnList}
        </>
    )
}

export default ItemListContainer;