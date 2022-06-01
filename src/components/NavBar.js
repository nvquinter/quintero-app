const Nav = () => {
return (
<>
    <h1 class="container-fluid p-3 mb-2 bg-dark text-white">Sigrid Marroquineria</h1>
        <nav class="navbar navbar-expand-lg bg-light navbar-dark bg-dark">
        <div class="container-fluid"> 
            <a class="navbar-brand" href="#">Productos</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" href="#">Billeteras</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Carteras</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Bolsos</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
</>
)
}

export default Nav