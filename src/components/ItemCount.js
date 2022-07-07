import {useState} from "react"


 const ItemCount = ({stock, initial, onAdd }) => {

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

    const confirmarContador = () => {
     onAdd(contador)
     return contador
    }

   return (
      <div className="count">
        <div className="buttons">
          <button  onClick={bajarContador}> - </button> 
          <p> {contador} </p>
          <button onClick={aumentarContador}> + </button>
        </div>
        <div className="add-cart">
          <button onClick={confirmarContador}> Agregar </button>
        </div>
      </div>
   )
 }
 export default ItemCount

