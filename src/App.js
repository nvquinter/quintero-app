import Nav from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import MiProvider from "./components/CartContext";
import Cart from "./components/Cart"


const App = () => {
  return (
    <MiProvider>
    <BrowserRouter>
        <Nav />
       <Routes>
         <Route path="/" element= {<ItemListContainer />} />
         <Route path="/detail/:id" element= {<ItemDetailContainer />} />
         <Route path="/category/:categoryId" element= {<ItemListContainer />} />
         <Route path={"/cart"} element={<Cart/>}/>
       </Routes>
    </BrowserRouter>
    </MiProvider>
  );
}  

export default App;