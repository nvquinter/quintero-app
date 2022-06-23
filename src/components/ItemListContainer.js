import React, { useEffect, useState } from 'react'
import {customFetch, getProductsByCategory} from '../customFech'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) => {
  // const onAdd=() => {} 
  const [items, setItems] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {
    if(!categoryId) {
      customFetch()
      .then(response => {
        setItems(response)
      })
  } else {
      getProductsByCategory(categoryId)
        .then(response => {
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
        <div className='product-container'>
           {items?.length <= 0 ? <p>buscando productos...</p> : <ItemList products = {items}/>}
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer;
