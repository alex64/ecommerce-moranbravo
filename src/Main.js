import { Routes, Route } from 'react-router-dom';

import ItemListContainer from "./component/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer";
import Cart from './component/Cart';
import NotFound from './component/NotFound';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda TGC"/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default Main;