import React from 'react'
 import {Link} from 'react-router-dom'

function Item({id, title, image, precio, descripcion}) {
  return (
    <div className="item">
      <img src={image} alt={id} />
      <h1>{title}</h1>
      <h2>{descripcion}</h2>
      <p>Precio : $ {precio}</p>        
      <Link to={`/detail/${id}`}>Ver Detalle</Link> 
    </div>
  )
}

export default Item;