import { NavLink } from "react-router-dom"


const CartWidget = () => {
  return (
    <div> 
      <NavLink to="/carrrito">Carrito {0} </NavLink> 
    </div>
  )
}

export default CartWidget