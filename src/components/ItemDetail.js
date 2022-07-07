import {useState, useContext} from 'react'
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';
import {contexto} from "./CartContext"

const ItemDetail = ({item}) => {  

    const {agregarProducto} = useContext(contexto)
    const [confirm, setConfirm] = useState(true)

    const onAdd = (cantidadSeleccionada) =>{    
      if (cantidadSeleccionada >= 1){
        console.log(cantidadSeleccionada);
        agregarProducto (item, cantidadSeleccionada)
        setConfirm(false);
      } else {
        return null;
        }
    }
    
    return (
        <div className='product-container'>
            <img src={item.image} alt={item.name} width="300" />
            <div>
                <h1>{item.title}</h1>
                <h2>{item.description}</h2>
                <h3>$ {item.precio}</h3>
                <h4>Stock: {item.stock}</h4> 
                <div>       
                {confirm ? <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>: <div><div><Link to={`/cart`}>Agregar al Carrito</Link></div> <div><Link to='/'>Continuar comprando</Link></div></div> }        
                </div>
            </div> 
        </div>
    );
}


export default ItemDetail;