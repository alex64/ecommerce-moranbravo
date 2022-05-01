import ItemListContainer from "./component/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer";

const Main = () => {
    return (
        <>
            <main>Main</main>
            <ItemListContainer greeting="Bienvenido a la tienda"/>
            <ItemDetailContainer/>
        </>
    );
}

export default Main;