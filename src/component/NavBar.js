import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

const NavBar = ({name}) => {
    return (
        <>
            <Link to="/">
                <h1 className="navbar_titulo">{name}</h1>
            </Link>
            <nav className="navbar_links">
                <Link to="/category/common" className="navbar_link">Common</Link>
                <Link to="/category/rare" className="navbar_link">Rare</Link>
                <Link to="/category/ultrarare" className="navbar_link">Ultra Rare</Link>
            </nav>
            <Link to="wishlist" className="navbar_link">WishList</Link>
            <CartWidget/>
        </>
    )
}

export default NavBar;