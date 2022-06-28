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
      <div>
        <button className="button" onClick={bajarContador}> - </button> 
        <span className="contador">{contador}</span>
        <button className="button" onClick={aumentarContador}> + </button>
        {contador > 0 ?  <button  onClik={confirmarContador(contador)}> Agregar al Carrito </button>: <></>}
        
       
      </div>
   )
 }
 export default ItemCount

