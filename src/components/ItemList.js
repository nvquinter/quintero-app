import React from 'react'
import Item from './Item'

function ItemList({products}) {
  return (
    products.map(p => 
    <div className='products-container'>
      <Item
        id={p.id} 
        title={p.title}
        descripcion={p.descripcion}
        precio={p.precio}
        image={p.image}
        key={p.id}
      />
    </div>
    )
  )
}

export default ItemList;