import React,  { useState } from 'react'
import { useContext } from 'react'
import { contexto } from "./CartContext"
import {db} from "../firebase"
import { Link } from 'react-router-dom'
import Form  from './Form'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const Checkout = () => {
  const [data, setData] = useState({ name: '', apellido: '', email: '', phone: '' });
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

  if(orderId !== ''){
    return (
      <div>
        <h2 className='subtitulo'>¡Muchas gracias por tu compra {(data.name).toUpperCase()}!</h2>
        <p className='subtitulo'>Te enviamos un mail a {(data.email).toLowerCase()} con tu orden de compra ID: {orderId}.</p>              
      </div>)
  }

  return (
    <>
      <div className='product-container'>
        <Link to='/'><button>Seguir comprando</button></Link>
      </div>
      <div className='product-container'>
        <p>Productos en total:{cartLenght()}</p>  
      </div>
      <div className='product-container'>
        <p>Importe Total: ${parseFloat(getTotal())}</p>
      </div>
      <div className='product-container'>
        <Link to="/"> <button onClick={vaciarCarrito}>Vaciar mi carrito y Volver al inicio</button></Link>
      </div>
      <div className='subtitulo'>
          <h2>Completar</h2> 
      </div>
      <div className='product-container'>
        <Form
          handleChange={handleChange}
          data={data}
          handleSubmit={handleSubmit}
        />
      </div>
    </> 
  )
}

export default Checkout