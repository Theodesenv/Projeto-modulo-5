import React from 'react'

export default function Navbar() {
    return(
        <div>
            <footer>
                <div className="container-footer" />
                <div className="row-footer">
                    <div className="footer-col">
                        <h4>Empresa</h4>
                        <ul>
                            <li> <a href="">Quem somos</a></li>
                            <li> <a href="">Nossos Serviços</a></li>
                            <li> <a href="">Política de privacidade</a></li>
                            <li> <a href="">Programa de afiliados</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Reservas</h4>
                        <ul>
                            <li> <a href="">Hotéis</a></li>
                            <li> <a href="">Aluguel de carros</a></li>
                            <li> <a href="">Reservas de restaurantes</a></li>
                            <li> <a href="">Hostels</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Como chegar</h4>
                        <ul>
                            <li> <a href="">Aeroportos</a></li>
                            <li> <a href="">Local de interesse</a></li>
                            <li> <a href="">Bairros</a></li>
                            <li> <a href="">Cidades</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Se inscreva</h4>
                        <div className="form-sub">
                            <fom>
                                <input type="email" placeholder="Digite seu e-mail" required />
                                <button>Enviar</button>
                            </fom>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
};
