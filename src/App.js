import Nav from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <BrowserRouter>
        <Nav />
       <Routes>
         <Route path="/" element= {<ItemListContainer />} />
         <Route path="/detail/:id" element= {<ItemDetailContainer />} />
         <Route path="/category/:categoryId" element= {<ItemListContainer />} />
         <Route path="/carrito/" element= {<Carrito />} />
         <Route path="/checkout/" element= {<Checkout />} />
       </Routes>
    </BrowserRouter>
  );
}  

export default App;