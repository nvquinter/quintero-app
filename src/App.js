import Nav from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
    return (
    <BrowserRouter>
        <Nav />
    <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Sigrid Marroquineria!"/>}/>
         <Route path="/category/:category" element={<ItemListContainer />} /> 
         <section className="product-container">
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>} />
        </section>
    </Routes>
    </BrowserRouter>
    
    
   
     
    
    );
}


export default App;

