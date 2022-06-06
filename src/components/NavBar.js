import CartWidget from "./CartWidget";

const Nav = () => {
return (
<>
    <div className="container"> 
    <div className="row">
        <nav className="navbar navbar-expand-lg bg-light navbar-dark bg-dark ">
        <div className="col"> 
            <h1 className="container-fluid p-3 mb-2 bg-dark text-white">Sigrid</h1>
        </div>
            <div className="col ">
               <a className="navbar-brand" href="#">Productos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="col ">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Billeteras</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Carteras</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Bolsos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#"><CartWidget /></a>
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