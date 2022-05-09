
import { BrowserRouter } from "react-router-dom";

import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import CartContext from "./component/CartContext";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <CartContext>
                    <Header/>
                    <Main/>
                </CartContext>
                <Footer/>
            </BrowserRouter> 
        </>
    )
}

export default App;