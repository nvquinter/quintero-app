import {useState} from 'react'
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';


const ItemDetail = ({product}) => {
    const [desaparecer, setDesaparecer] = useState(0);

    const onAdd = (cantidadSeleccionada) => {

        setDesaparecer(cantidadSeleccionada);

    }
    return (
        <div>
            <img src={product.image} alt={product.name} width="200" />
            <div>
                <h1>{product.title}</h1>
                <h2>{product.description}</h2>
                <h3>$ {product.precio}</h3>
                <h4>Stock: {product.stock}</h4>
                {desaparecer ? <Link to={"/cart"}>Terminar mi compra</Link> : <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>}
                
                 
               
               
            </div>
        </div>
    );
}


export default ItemDetail;