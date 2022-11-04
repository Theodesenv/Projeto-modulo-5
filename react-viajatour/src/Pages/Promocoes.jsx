import React from "react";

export default function Promocoes() {
    return (
        <div className="App">
            
            <img src="Imagens/imagem página de promoções.jpg" className="img-fluid" alt="..." />
            <br /><br /><br />
            <div className="jumbotron">
                <h1 className="display-4"><b>VIAGENS EM PROMOÇÃO NA VIAJATOUR</b></h1>
                <p className="lead"><h3><b>Encontre o destino certo de sua viagem nos melhores lugares do mundo</b></h3></p>
                <hr className="my4"></hr>
            </div>
            <div className="card-group">
                <div className="card">
                    <img src="Imagens/cancun full 2.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Cancun</h5>
                        <p className="card-text">Aéreo+Hotel
                        </p>
                        <p> <font face="Arial" color="red"><h4><strike> De  R$1.500</strike></h4></font> </p>
                        <p> <font face="Arial" color="black"><h2> Por  R$1.000</h2></font> </p>
                        <h5>pague em até 10x</h5>
                        <button type="button" className="btn btn-primary">Ver ofertas</button>
                    </div>
                </div>
                <div className="card">
                    <img src="Imagens/italia full 3.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Itália</h5>
                        <p className="card-text">Aéreo+Hotel</p>
                        <p> <font face="Arial" color="red"><h4><strike>De  R$2.500</strike></h4></font> </p>
                        <p> <font face="Arial" color="black"><h2> Por  R$1.950</h2></font> </p>
                        <h5>pague em até 10x</h5>
                        <button type="button" className="btn btn-primary">Ver ofertas</button>
                    </div>
                </div>
                <div className="card">
                    <img src="Imagens/Disney full.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Disney</h5>
                        <p className="card-text">Aéreo+Hotel</p>
                        <p> <font face="Arial" color="red"><h4><strike>De  R$3.250</strike></h4></font> </p>
                        <p> <font face="Arial" color="black"><h2> Por  R$2.900</h2></font> </p>
                        <h5>pague em até 10x</h5>
                        <button type="button" className="btn btn-primary">Ver ofertas</button>
                    </div>
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <img src="Imagens/franca.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">França</h5>
                        <p className="card-text">Aéreo+Hotel
                        </p>
                        <p> <font face="Arial" color="red"><h4><strike>De  R$3.000</strike></h4></font> </p>
                        <p> <font face="Arial" color="black"><h2> Por  R$2.700</h2></font> </p>
                        <h5>pague em até 10x</h5>
                        <button type="button" className="btn btn-primary">Ver ofertas</button>
                    </div>
                </div>
                <div className="card">
                    <img src="Imagens/Alemanha full.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Alemanha</h5>
                        <p className="card-text">Aéreo+Hotel</p>
                        <p> <font face="Arial" color="red"><h4><strike>De  R$3.500</strike></h4></font> </p>
                        <p> <font face="Arial" color="black"><h2> Por  R$2.700</h2></font> </p>
                        <h5>pague em até 10x</h5>
                        <button type="button" className="btn btn-primary">Ver ofertas</button>
                    </div>
                </div>
                <div className="card">
                    <img src="Imagens/Chile full.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Chile</h5>
                        <p className="card-text">Aéreo+Hotel</p>
                        <p> <font face="Arial" color="red"><h4><strike>De  R$950</strike></h4></font> </p>
                        <p> <font face="Arial" color="black"><h2> Por  R$700</h2></font> </p>
                        <h5>pague em até 10x</h5>
                        <button type="button" className="btn btn-primary">Ver ofertas</button>
                    </div>
                </div>
            </div>            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossorigin="anonymous"></script>

        </div>
    )
};