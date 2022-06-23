import Nav from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
        <Nav />
       <Routes>
         <Route path="/" element= {<ItemListContainer />} />
         <Route path="/detail/:id" element= {<ItemDetailContainer />} />
         <Route path="/category/:categoryId" element= {<ItemListContainer />} />
       </Routes>
    </BrowserRouter>
  );
}  

export default App;