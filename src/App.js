import Nav from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
    return (
        <>
            <Nav />
            <ItemListContainer greeting="Bienvenidos a Sigrid Marroquineria!"/>
            <section className="product-container">
            <ItemDetailContainer />
            </section>
        </> 
    );
}

export default App