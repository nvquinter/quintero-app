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

         const isInCart = (id) => {
             return carrito.some((item) => (item.id === id))
          }

         const eliminarProducto = (id) => {
            setCarrito (carrito.filter((item) => (item.id !== id)))
        
        }
        const vaciarCarrito = () => { 
            setCarrito ([])
        }

    return(
        <Provider value={{carrito, agregarProducto,isInCart, eliminarProducto, vaciarCarrito}}>
            {children}
        </Provider>
    )
}
}
export default MiProvider;
