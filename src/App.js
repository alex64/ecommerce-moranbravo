
import { BrowserRouter } from "react-router-dom";

import Main from "./Main";
import CartContext from "./component/CartContext";
import NavBar from "./component/NavBar";
import WishListContext from "./component/WishListContext";

const App = () => {
    return (
        <BrowserRouter>
            <WishListContext>
                <CartContext>
                    <header className="header">
                        <NavBar name="Poke TCG"/>
                    </header>
                    <Main/>
                </CartContext>
            </WishListContext>
            <footer className="footer">
                <p>Copyright &copy; -2022</p>
            </footer>
        </BrowserRouter> 
    )
}

export default App;