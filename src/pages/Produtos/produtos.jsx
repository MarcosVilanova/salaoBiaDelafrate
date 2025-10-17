import './produtos.css'
import {Swiper} from 'swiper/react';
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import produto1 from "../../assets/produto1.jpg";
import produto2 from "../../assets/produto2.jpg";
import produto3 from "../../assets/produto3.jpg";
import produto4 from "../../assets/produto4.jpg";
import produto5 from "../../assets/produto5.jpg";

function Produtos() {
    const dataProdutos=[
        {id:1,image:produto1}, 
        {id:2,image:produto2}, 
        {id:3,image:produto3}, 
        {id:4,image:produto4},
        {id:5,image:produto5},
         
    ]

    return (
        <>
<section className="container">
    <h2  className='tituloProduto' display-5>Produtos</h2>
  <Row className='justify-content-center'>
    {dataProdutos.map((item, id) => (
      <Col key={item.id} xs={9} sm={7} md={5} lg={4} className="mb-4" slide>
        <Card>
          <Card.Img src={item.image} className='imgProduto'/>
        </Card>
      </Col>
    ))}
  </Row>
</section>
        </>
    )
}

export default Produtos
