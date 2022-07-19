import React from 'react'
import { useContext } from 'react'
import { contexto } from "./CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {

  const {carrito, cartLenght, getTotal, vaciarCarrito, eliminarProducto} = useContext(contexto)

  return (
    <>
    {cartLenght() === 0 ? (
        <div>
          <div>
            <p className='empty'>Tu carrito está vacío.</p>
            <Link className='empty' to='/'>volver al inicio</Link>
          </div>
        </div>
      ) : (
          <>
              <div className='cart'>
                  {carrito.map((product) =>(
                    <div className="infoCart" key={product.id}>
                      <img src={product.image} alt={product.title} width="80px"/>
                      <h1>{product.title}</h1>
                      <p>Precio: ${product.precio}.-</p>
                      <p>Cantidad total: {product.cantidad}</p>
                      <button onClick={() => eliminarProducto(product.id)}>
                        Eliminar Item
                      </button>  
                    </div>
                  ))}
                  <div className="cartBtn">    
                  <h2>Importe Total: ${parseFloat(getTotal())}</h2>
                    <button onClick={vaciarCarrito}> Vaciar Carrito </button>
                    <Link to="/checkout"><button> Confirmar Compra</button> </Link>
                  </div> 
              </div>
          </>
        )}
    </>
  )
}

export default Cart