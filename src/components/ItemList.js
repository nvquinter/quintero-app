import React from 'react'
import Item from './Item'

function ItemList({products}) {
  return (
    products.map(p => 
    <section className='products-container'>
      <Item
        id={p.id} 
        title={p.title}
        descripcion={p.descripcion}
        precio={p.precio}
        image={p.image}
        key={p.id}
      />
    </section>
    )
  )
}

export default ItemList;