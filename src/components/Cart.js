import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from "./CartContext"

const Cart = () => {
  const {carrito, getSubtotal, cartLenght, getTotal, vaciarCarrito} = useContext(contexto)

  return (
    <>
      {cartLenght() === 0 ? (
        <div>
          <div>
            <p>Oops! Tu carrito está vacío. Por favor, agregá algún producto para poder continuar.</p>
            <Link to='/'>volver al inicio</Link>
            </div>
        </div>
      ) : (
            <div className='product-container'>
              {carrito.map((product) =>(
                <div key={product.id}>
                  <img src={product.image} alt={product.title} width="200"/>
                  <h1>{product.title}</h1>
                  <h2>Stock:{product.stock}</h2> 
                  <h3>${product.precio}.-</h3>
                  <p>Cantidad total: {product.cantidad}</p>
                <div>
                    <p>Importe Subtotal: ${parseFloat(getSubtotal(product.precio, product.cantidad))}</p>
                  </div>
                  <div>
                  <p>Importe Total: ${parseFloat(getTotal())}</p>
                </div>
                <div>
                  <button onClick={vaciarCarrito}> Vaciar Carrito </button>
                </div>
                <div>
                  <Link to="/checkout">Finalizar la Compra</Link>    
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