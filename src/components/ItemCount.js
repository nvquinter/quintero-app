import {useState} from "react"


 const ItemCount = ({ stock, initial, onAdd }) => {

  const [contador, setContador] = useState(initial)
 
  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1)
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
         <div >
          <button onClick={aumentarContador}> + </button>
          <button onClick={bajarContador}> - </button> 
          <div>
          <button>Agregar al carrito</button>
          </div>
        </div>
        </div>
   
   )
 }
 export default ItemCount

