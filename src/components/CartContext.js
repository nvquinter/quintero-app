import { createContext, useState } from "react";

export const contexto = createContext()
const Provider = contexto.Provider

const MiProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])

    const agregarProducto = (producto, cantidad) => {
        if(isInCart(producto.id)){
            let copia = carrito.findIndex((copia) => (copia.id === producto.id))
            let nuevo_producto = [...carrito]
            nuevo_producto[copia].cantidad += cantidad
            setCarrito(nuevo_producto)            
        } else {
            const itemToAdd = {...producto, cantidad}
            setCarrito([...carrito, itemToAdd])
        }
    }

    const isInCart = (id) => {
        return carrito.some((item) => (item.id === id))
    }

    const vaciarCarrito = () => { 
        setCarrito ([])
    }

    const cartLenght = () => {
            let quantity = 0
            carrito.forEach((item) => {
            quantity = quantity + item.cantidad
        })
    }
    
    const getSubtotal = (precio, cantidad) => {
            let subtotal = 0
            subtotal = subtotal + (precio * cantidad)
        return Number(subtotal)
    }
    
    const getTotal = () => {
        let total = 0
        carrito.forEach((item) => {
            total = total + (item.cantidad * item.precio)
        })
        return Number(total)
    }
    
    return(
        <Provider value={{carrito, agregarProducto, isInCart,  cartLenght, vaciarCarrito, getSubtotal, getTotal}}>
            {children}
        </Provider>
    )
}

export default MiProvider;
