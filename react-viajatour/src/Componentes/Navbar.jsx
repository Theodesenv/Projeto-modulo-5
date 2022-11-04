import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar col-12 m-auto position-fixed navbar-expand-lg navbar-dark bg-dark" style={{zIndex: '999;'}}>
                <div className="container-fluid col-11 m-auto">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" >VIAJATOUR</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Destino">Destino</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Promocoes">Promoções</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contato">Contato</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="procurar" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </form>
                    </div>
                </div>

            </nav >
        </div>

    )
};