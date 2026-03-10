// ========================== IMPORTS ==========================
// React
import React from "react";

// React Bootstrap
import { Card, Col, Container, Row, Button} from "react-bootstrap";

// Estilos
import "./produtos.css";

// Imagens dos produtos
const produto1 = new URL("../../assets/Produtos/produto1.jpeg", import.meta.url).href;
const produto2 = new URL("../../assets/Produtos/produto2.jpeg", import.meta.url).href;
const produto3 = new URL("../../assets/Produtos/produto3.jpeg", import.meta.url).href;
const produto4 = new URL("../../assets/Produtos/produto4.jpeg", import.meta.url).href;

// ========================== COMPONENTE ==========================
function Produtos() {
    // Dados dos produtos
    const dataProdutos = [
        { id: 1, image: produto1, text: "R$59,90" },
        { id: 2, image: produto2, text: "R$180" },
        { id: 3, image: produto3, text: "R$180" },
        { id: 4, image: produto4, text: "R$120"},
    ];

    return (
        <section className="SecaoProdutos py-5">
            <Container>
                {/* Título da página */}
                <h2 className="tituloPageProdutos display-4 mb-5">Produtos</h2>
                <Row className="justify-content-center g-4">
                    {dataProdutos.map((item) => (
                        <Col key={item.id} xs={10} sm={6} md={5} lg={4} xl={3}>
                            <Card className="produtoCard">
                                <Card.Img src={item.image} alt="Produtos" loading="lazy"/>
                                <div className="textoCard">
                                    <p>{item.text}</p>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>



             <div style={{display: "flex", justifyContent: "center"}}>
                 <Button
                     href="https://dottovip.com.br/biadelefratelisoperfeito"
                     target="_blank"
                     className="btn_inicio  align-items-center mt-4"
                 >
                     Agendar Agora
                 </Button>
             </div>
            </Container>


        </section>
    );
}

export default Produtos;
