import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
// import {traerProducto} from '../productos';
import { useParams } from 'react-router-dom'
import { getProductsById } from '../customFech'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams()

    useEffect(() => {
        getProductsById(parseInt(id))
        .then(response => {
            setProduct(response)
        })
    }, [id])

    return <ItemDetail {...product} />;
};


export default ItemDetailContainer;