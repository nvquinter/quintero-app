import React from 'react'
import { Link } from 'react-router-dom'

const Carrito = () => {
  return (
    <div>
        <h1>Carrito</h1>
        <Link to="/chekout">Confirmar Compra</Link>
    </div>
  )
}

export default Carrito