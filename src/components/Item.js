import React from 'react'
import {Link} from 'react-router-dom'

function Item({id, title, image, precio, descripcion}) {

  return (
    <article className="item">
        <img src={image} alt={id} />
        <h1>{title}</h1>
        <h2>{descripcion}</h2>
        <p>Precio : ${precio}</p>
        <Link to={`/detail/${id}`}>Ver Detalle</Link>
    </article>
  )
}

export default Item
