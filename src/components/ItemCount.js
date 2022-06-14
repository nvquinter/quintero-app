import {useState} from "react"
 import swal from "sweetalert"

 const ItemCount = ({ stock, initial, onAdd }) => {

  const [contador, setContador] = useState(initial)

  const aumentarContador = () => {
     if (contador < stock) {
      setContador(contador + 1)
     }else{
         swal({
           title:"Lo sentimos",
           text:"El stock disponible de este producto es de"+stock,
         icon:"error",
        })
    }    
   }
   const bajarContador = () => {
     if (contador > 0) {
     setContador(contador - 1)
     }
  }
   return (
     <div >
         <p>{contador}</p>
          <button onClick={aumentarContador}>+</button>
          <button onClick={bajarContador}>-</button> 
          <button>Agregar al carrito</button>
        </div>
   
   )
 }
 export default ItemCount

