import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import {db} from "../firebase"
import { getDocs, collection } from 'firebase/firestore'


const ItemListContainer = (props) => { 
  const [items, setItems] = useState([])
  const { categoryId } = useParams()
 

  useEffect(() => {

   const collectionproductos= collection (db, "productos")
   const consulta = getDocs(collectionproductos)
   consulta
   .then((resultado)=>{
    const productos_mapeados = resultado.docs.map(referencia =>{
      const aux = referencia.data()
      aux.id = referencia.id
      return aux
    })
    setItems(productos_mapeados)

    })
   .catch((error) => {
    console.log(error)
    })

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
