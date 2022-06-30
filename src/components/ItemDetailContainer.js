import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import { getProductsById } from '../customFech'


const ItemDetailContainer = () => {
    const [item, setProduct] = useState({});
    const {id} = useParams()

    useEffect(() => {
        getProductsById((id))
        .then(response => {
            setProduct(response)
        })
    }, [id])

    return <ItemDetail  item = { item } />;
};

export default ItemDetailContainer;