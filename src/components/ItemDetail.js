import React from 'react'
import ItemCount from "./ItemCount"

const ItemDetail = ({product}) => {
    return (
        <div>
            <img src={product.image} alt={product.name} width="200" />
            <div>
                <h1>{product.title}</h1>
                <h2>{product.description}</h2>
                <h3>$ {product.precio}</h3>
                <h4>Stock: {product.stock}</h4>
               <ItemCount stock={product.stock} initial={1} /> 
            </div>
        </div>
    );
};


export default ItemDetail