

import React from "react";


export default function Home() {
    return (
        <div className="App">
        <img src="Imagens/viagem.jpg" width="100%"/>
            <div className="jumbotron">
                <h1 className="display-4"><b> A VIAJEM DOS SEUS SONHOS ESTÁ AQUI</b></h1>
                <p className="lead">
                    <h2>Confira nossos destaques</h2>
                </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <img src="Imagens/ipanema.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Rio de Janeiro</h5>
                            <p className="card-text">Conheça a Cidade Maravilhosa e suas excências.</p>
                            <p>
                                <font face="Arial" color="blue">
                                    <h2>A partir de R$1.150</h2>
                                </font>
                            </p>
                            <button type="button" className="btn btn-primary">Ver ofertas</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="Imagens/São Paulo 650.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">São Paulo</h5>
                            <p className="card-text">Venha para São Paulo a cidade que nunca dorme.</p>
                            <p>
                                <font face="Arial" color="blue">
                                    <h2>A partir de R$880</h2>
                                </font>
                            </p>
                            <button type="button" className="btn btn-primary">Ver ofertas</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="Imagens/pontal.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Arraial do Cabo</h5>
                            <p className="card-text">Conheça o famoso Caribe Brasileiro.</p>
                            <p>
                                <font face="Arial" color="blue">
                                    <h2>A partir de R$1.000</h2>
                                </font>
                            </p>
                            <button type="button" className="btn btn-primary">Ver ofertas</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="Imagens/salvador..jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Salvador</h5>
                            <p className="card-text">Salvador e suas culturas.</p>
                            <p>
                                <font face="Arial" color="blue">
                                    <h2>A partir de R$980</h2>
                                </font>
                            </p>
                            <button type="button" className="btn btn-primary">Ver ofertas</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="Imagens/Natal-RN1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Natal</h5>
                            <p className="card-text">Natal e suas belezas naturais.</p>
                            <p>
                                <font face="Arial" color="blue">
                                    <h2>A partir de R$1.999</h2>
                                </font>
                            </p>
                            <button type="button" className="btn btn-primary">Ver ofertas</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="Imagens/Foz do Iguaçú.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Foz do Iguaçú</h5>
                            <p className="card-text">Conheça Foz do Iguaçú e suas cataratas.</p>
                            <p>
                                <font face="Arial" color="blue">
                                    <h2>A partir de R$986</h2>
                                </font>
                            </p>
                            <button type="button" className="btn btn-primary">Ver ofertas</button>
                        </div>
                    </div>
                </div>
            </div>
        
        <br/><br />
            <div className="card bg-dark text-black">
                <img src="Imagens/seguro-viagem-2022-02-capa.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h1 className="card-title"><strong>Seguro Viagem</strong></h1>
                    <p className="card-text">Curta sua viagem com mais segurança com nosso seguro viagem.</p>
                </div>
                <br/>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossorigin="anonymous"></script>

        </div>
        
    )
}