import React from "react";

export default function Contato() {
    return (
        <div className="App">            
            <br />
            <br />
            <img src="Imagens/imagem contato.jpg" width="1350" class="img-fluid" alt="..." />
            <div class="jumbotron">
                <div class="shadow-lg p-3 mb-5 bg-body rounded">
                    <h2 align="center">Fale Conosco</h2>
                </div>
                <hr class="my4" />
                <table border="0" width="100%" cellpadding="20" />
                <tr />
                <td width="30%" align="left">
                    <img src="Imagens/whatsapp.png" width="40px" />
                    <font face="Arial" size="4">(21)9 9999-9999</font>
                </td>
                <td width="30%" align="center">
                    <img src="Imagens/e-mail.png" width="40px" />
                    <font face="Arial" size="4">contato@viajatour.com.br</font>
                </td>
                <td width="50%" align="center">
                    <img src="Imagens/instagram.png" width="40px" />
                    <font face="Arial" size="4">Siga-nos @viajatour</font>
                </td>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <b>Preciso de suporte para acesso a conta</b>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Se você está com problemas para acessar ou outros motivos iremos te ajudar <button
                                type="button" class="btn btn-primary btn-sm">Clique aqui</button></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <b>Comunicar um problema no site</b>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Não está conseguindo acessar algum conteúdo?
                                <button type="button" class="btn btn-primary btn-sm">Clique aqui</button>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <b>Conversar pelo chat</b>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Iniar uma conversa <button type="button" class="btn btn-primary btn-sm">Clique
                                aqui</button></div>
                        </div>
                    </div>
                </div>
                <div>
                    <br />
                    <br />                    
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                        crossorigin="anonymous"></script>

                </div>
            </div>
        </div>

    )
};