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
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-danger" onClick={bajarContador}> - </button> 
        <spam className= "btn btn-danger"> {contador} </spam>
        <button type="button" className="btn btn-danger" onClick={aumentarContador}> + </button>
      </div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-danger" onClick={confirmarContador}> Agregar </button>
      </div>
    </> 
   )
 }
 export default ItemCount

