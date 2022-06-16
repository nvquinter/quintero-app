import React, { useEffect, useState } from 'react'
import customFetch from '../customFech'
import productos from '../productos'
import ItemList from './ItemList'



const ItemListContainer = (props) => {
  // const onAdd=() => {} 
    const [items, setItems] = useState([])
  
    useEffect(() => {
        customFetch(2000, productos)
        .then(r => setItems(r))
    }, [items])
  return (
    <div className="container">
      <div className="row">
        <div className='col-12'>
          <p className='subtitulo bg-dark text-white'>{props.greeting}</p>
        </div>
        <main className='main'>
          <ItemList products= {items}/>
        </main> 
      </div>
    </div>
  )
}

export default ItemListContainer
