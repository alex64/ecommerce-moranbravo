import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebase";
import ItemList from "./ItemList";
import ErrorDetail from "./ErrorDetail";

const ItemListContainer = ({greeting}) => {
    const [loaded, setLoaded] = useState(false);
    const [productList, setProductList] = useState([]);
    const [ errorData, setErrorData ] = useState({});
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
            .catch((queryError) => {
                console.log(queryError);
                setErrorData( {
                    id: 'I102',
                    message: queryError.message
                });
            });
        
    }, [categoryId]);

    return (        
        <div>
            <p className="itemContainerGreeting">{greeting}</p>

            {
                Object.keys(errorData).length > 0 && errorData.constructor === Object
                ? 
                    <ErrorDetail errorData={errorData} disableHomeButton={categoryId===undefined}/> 
                :
                    !loaded
                    ?
                        <p>Loading...</p>
                    :
                        <ItemList productList={productList}/>
            }
        </div>
    )
}

export default ItemListContainer;