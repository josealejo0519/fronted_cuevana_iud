import React from 'react'

export default function NavBar() {
    return (
        <div classNameName='container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Generos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Directores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productora</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Tipos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Series y Peliculas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

