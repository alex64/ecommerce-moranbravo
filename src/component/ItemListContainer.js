import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import tgcList from "./tcgItems";

const getItemList = (selectedCategory) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(selectedCategory === undefined) {
                resolve(tgcList);
            }
            else {
                const categoryCards = tgcList.filter((card) => {
                    const categoryResult = card.category.filter((indiviualCategory) => {
                        //console.log(indiviualCategory);
                        return indiviualCategory.toLowerCase() === selectedCategory.toLowerCase();
                    });
                    return categoryResult.length > 0;
                });
                resolve(categoryCards);
            }
        }, 2000);
    });
}

const ItemListContainer = ({greeting}) => {
    const [loaded, setLoaded] = useState(false);
    const [productList, setProductList] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        setProductList([]);
        setLoaded(false);
        getItemList(id)
            .then((productArray) => {
                setProductList(productArray);
                setLoaded(true);
            })
            /*.catch((err) => {
                console.log(err);
            });*/
        
    }, [id]);

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