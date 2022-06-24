import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import { getProductsById } from '../customFech'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams()

    useEffect(() => {
        getProductsById((id))
        .then(response => {
            setProduct(response)
        })
    }, [id])

    return <ItemDetail  product = { product } />;
};

export default ItemDetailContainer;