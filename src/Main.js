import { Routes, Route } from 'react-router-dom';

import ItemListContainer from "./component/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda TGC"/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
    );
}

export default Main;