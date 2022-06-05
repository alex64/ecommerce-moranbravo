
import { BrowserRouter } from "react-router-dom";

import Main from "./Main";
import CartContext from "./component/CartContext";
import NavBar from "./component/NavBar";

const App = () => {
    return (
        <BrowserRouter>
            <CartContext>
                <header className="header">
                    <NavBar name="Poke TGC"/>
                </header>
                <Main/>
            </CartContext>
            <footer>
                <p>Copyright &copy; -2022</p>
            </footer>
        </BrowserRouter> 
    )
}

export default App;