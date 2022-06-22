import React, { useEffect, useState } from 'react'
import {customFetch, getProductsByCategory} from '../customFech'
import productos from '../productos'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'



const ItemListContainer = (props) => {
  // const onAdd=() => {} 
    const [items, setItems] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        customFetch(2000, productos)
        .then(r => setItems(r))
    }, [items])

    useEffect(() => {
      if(!categoryId) {
        customFetch().then(response => {
          setItems(response)
          })
      } else {
          getProductsByCategory(categoryId).then(response => {
            setItems(response)
          })
      }
  }, [categoryId])

  return (
    <div className="container">
      <div className="row">
        <div className='col-12'>
          <p className='subtitulo bg-dark text-white'>{props.greeting}</p>
        </div>
        <main className='main'>
          <ItemList products={items} />
        </main> 
      </div>
    </div>
  )
}

export default ItemListContainer
