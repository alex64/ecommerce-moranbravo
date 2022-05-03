
import { BrowserRouter } from "react-router-dom";

import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
            </BrowserRouter> 
        </>
    )
}

export default App;