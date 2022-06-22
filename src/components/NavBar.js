import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

const Nav = () => {
return (
<>
    <div className="container"> 
    <div className="row">
        <nav className="navbar navbar-expand-lg bg-light navbar-dark bg-dark ">
        <div className="col"> 
        <Link to="/">
            <h1 className="container-fluid p-3 mb-2 bg-dark text-white">Sigrid</h1>
        </Link>
        </div>
            <div className="col ">
               <Link className="navbar-brand" to="/category/productos">Productos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="col ">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/category/billeteras">Billeteras</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/category/carteras">Carteras</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/category/mochilas">Mochilas</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/category/carrito"><CartWidget /></Link>
                    </li>
                    </ul>
                </div>       
            </div> 
        </nav>
    </div>
    </div> 
  
</>
)
}

export default Nav