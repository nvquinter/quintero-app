import Nav from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
        <Nav />
     <Routes>
       <Route path='./' element={<ItemListContainer greeting="Bienvenidos a Sigrid Marroquineria!"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
       <Route path='/detail/:id' element={<ItemDetailContainer />} />
     </Routes>
    </BrowserRouter>
  );
}  

export default App;