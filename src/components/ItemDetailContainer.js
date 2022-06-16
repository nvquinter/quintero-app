import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import {traerProducto} from '../productos';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        traerProducto()
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return <ItemDetail product={product} />;
};



export default ItemDetailContainer