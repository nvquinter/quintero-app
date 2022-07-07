import React from 'react'
import { useContext } from 'react'
import { contexto } from "./CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {

  const {carrito, getSubtotal, cartLenght, getTotal, vaciarCarrito, eliminarProducto} = useContext(contexto)

  return (
    <>
      {cartLenght() === 0 ? (
          <div className='empty'>Tu carrito está vacío.</div>
      ) : (
            // <div className='product-container'>
            <div className='cart'>
              {carrito.map((product) =>(
                <div key={product.id}>
                  <img src={product.image} alt={product.title} width="200"/>
                  <h1>{product.title}</h1>
                  <h2>Stock:{product.stock}</h2> 
                  <h3>${product.precio}.-</h3>
                  <p>Cantidad total: {product.cantidad}</p>
                  <p>Importe Subtotal: ${parseFloat(getSubtotal(product.precio, product.cantidad))}</p>
                  <p>Importe Total: ${parseFloat(getTotal())}</p>
                <div className="cartBtn">
                  <button onClick={() => eliminarProducto(product.id)}>Eliminar Item</button>
                  <button onClick={vaciarCarrito}> Vaciar Carrito </button>
                  <Link to="/checkout"> Confirmar Compra </Link>
                </div> 
            </div> 
          )     
            )}
        </div>
      )}
    </>
  )
}

export default Cart