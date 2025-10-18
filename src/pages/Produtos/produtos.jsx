import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import "./produtos.css";
/*IMPORT IMAGES*/
import produto1 from "../../assets/Produtos/produto1.webp";
import produto2 from "../../assets/Produtos/produto2.webp";
import produto3 from "../../assets/Produtos/produto3.webp";
import produto4 from "../../assets/Produtos/produto4.webp";
import produto5 from "../../assets/Produtos/produto5.webp";

function Produtos() {
    const dataProdutos = [
        {id: 1, image: produto1},
        {id: 2, image: produto2},
        {id: 3, image: produto3},
        {id: 4, image: produto4},
        {id: 5, image: produto5},
    ];

    return (
        <section className="SecaoProdutos py-5">
            <Container>
                <h2 className="tituloPageProdutos display-3 mb-5">
                    Produtos
                </h2>
                <Row className="justify-content-center g-4">
                    {dataProdutos.map((item) => (
                        <Col key={item.id} xs={10} sm={6} md={5} lg={4} xl={3}>
                            <Card className="produtoCard">
                                <Card.Img src={item.image} alt={"Produtos"} loading="lazy"/>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Produtos;
