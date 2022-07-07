import { createContext, useState } from "react";

export const contexto = createContext()
const Provider = contexto.Provider

const MiProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])


    const agregarProducto = (item, cantidad) => {
        if (isInCart(item.id)) {
            sumarCantidad(item, cantidad);
        } else {
            setCarrito([...carrito, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return carrito.some((item) => (item.id === id))
    }

    const sumarCantidad = (item, cantidad) => {
        const newProducts = carrito.map((prod) => {
            if (prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        
        setCarrito(newProducts);
    };

    const vaciarCarrito = () => { 
        setCarrito ([])
    }

    const cartLenght = () => {
            let quantity = 0
            carrito.forEach((item) => {
            quantity = quantity + item.cantidad
        })
        return quantity
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

    const eliminarProducto = (id) => {
        setCarrito (carrito.filter((item) => (item.id !== id)))
    }

    return(
        <Provider value={{carrito, agregarProducto, isInCart, sumarCantidad, cartLenght, vaciarCarrito, getSubtotal, getTotal, eliminarProducto}}>
            {children}
        </Provider>
    )
}

export default MiProvider;
