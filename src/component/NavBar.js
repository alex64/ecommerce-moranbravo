import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <h1 className="navbar_titulo">Tienda TGC</h1>
            <nav className="navbar_links">
                <a href="#" className="navbar_link">link 1</a>
                <a href="#" className="navbar_link">link 2</a>
                <a href="#" className="navbar_link">link 3</a>
            </nav>
            <CartWidget/>
        </>
    )
}

export default NavBar;