import React,  { useState } from 'react'
import { useContext } from 'react'
import { contexto } from "./CartContext"
import {db} from "../firebase"
import { Link } from 'react-router-dom'
import Form  from './Form'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const Checkout = () => {
  const [data, setData] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState('');

  const {carrito, cartLenght, getTotal, vaciarCarrito} = useContext(contexto)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
        ...data,
        [name]: value,
    });
};

const handleSubmit = (e) => {

    e.preventDefault();
    const objOrden = {
        buyer: {
            name: data.name,
            apellido: data.apellido,
            phone: data.phone,
            email: data.email,
        },
        carrito,
        total: getTotal(),
        date: serverTimestamp(),
    };

    const ref = collection(db, 'orders');
    addDoc(ref, objOrden).then((response) => {
        setOrderId(response.id);
        vaciarCarrito();
    });
  };

  if (orderId !== '') {
    return <h1>Gracias por tu compra, tu número de envío es: {orderId}</h1>;
  }
  return (
    <div className='product-container'>
      {carrito.map((product) =>(
          <div key={product.id}>
            <img src={product.image} alt={product.title} width="200"/>
            <h1>{product.title}</h1>
            <Link to='/'><button>Seguir comprando</button></Link>
            <p>Cantidad de items en total:{cartLenght()}</p>  
            <p>Importe Total: ${parseFloat(getTotal())}</p>
            <Link to="/"> <button onClick={vaciarCarrito}>Vaciar carro y Volver al inicio</button></Link>
            <div className='subtitulo'>
            <h2>Complete con sus datos</h2> 
            </div>
            <div className='product-container'>
                <Form
                  handleChange={handleChange}
                  data={data}
                  handleSubmit={handleSubmit}
                />
                </div>
            <div>
              <Link to="/"><button>Finalizar Compra</button></Link>   
            </div>
          </div>
        )) 
      } 
    </div>    
  )
}

export default Checkout