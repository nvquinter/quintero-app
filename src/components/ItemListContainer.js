import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import { collectionProductos} from "../firebase"
import { getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = (props) => { 
  const [items, setItems] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {

   const ref = categoryId
          ? query(collectionProductos, where('category', '==', categoryId))
          : collectionProductos;

        getDocs(ref).then((response) => {
          const products = response.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
          });

      setItems(products)

    })

    .catch((error) => {
      console.log(error)
    })

  },[categoryId])

  return (
    <div className="container">
      <div className="row">
        <div className='col-12'>
          <p className='subtitulo bg-dark text-white'>{props.greeting}</p>
        </div>
        <div className='product-container'>
        {items?.length <= 0 ? <p>Buscando Productos...</p> : <ItemList products = {items}/>}
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer;
