// ESTILOS
import './style.css';

// IMAGENS
import servico01 from "../../assets/servico01.jpg";
import servico02 from "../../assets/servico02.jpg";
import servico03 from "../../assets/servico03.jpg";
import servico04 from "../../assets/servico04.jpg";
import fundo from "../../assets/texturaFundo01.jpg";
import ImagemBiaDelefrate from "../../assets/ImagemBiaDelefrate.jpg";
import Logo2 from "../../assets/LogoPreta.png";

// BIBLIOTECAS
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// COMPONENTE
function Home() {
    const [showInfo, setShowInfo] = useState(false);

    const dataSlide = [
        { id: 1, image: servico01, title: "Alisamento" },
        { id: 2, image: servico02, title: "Corte" },
        { id: 3, image: servico03, title: "Escova modelada" },
        { id: 4, image: servico04, title: "Hidratação" },
    ];

    return (
        <>
            {/* HERO SECTION */}
            <section className="card bg-dark text-white">
                <img src={fundo} className="imagemFundo" alt="Fundo"  />
                <div className="card-img-overlay d-flex flex-column justify-content-center container mt-5">
                    <h1 className="card-title display-2" >
                        Seu cabelo,<span className="d-block d-md-inline"> sua confiança</span>
                    </h1>
                    <p className="card-text lead mt-2" style={{ fontSize: "17px" }}>
                        Excelência em alisamento para um cabelo saudável, brilhante e sem esforço.
                    </p>
                    <div className="d-flex flex-md-row flex-column gap-2 mt-2">
                        <Button href="#" target="_blank" className="btn_agendarAgora">
                            Agendar Agora
                        </Button>
                        <Button as={Link} to="/produtos" className="btn_agendarLS">
                            Produtos
                        </Button>

                    </div>
                </div>
            </section>

            {/* SLIDER DE SERVIÇOS */}
            <section className="container py-5">
                <h2 className="tituloServico display-5">Serviços</h2>
                <Swiper
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    breakpoints={{
                            0: { slidesPerView: 1},
                                320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {dataSlide.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            style={{ display: 'flex', justifyContent: 'center', padding: "22" }}
                        >
                            <Card
                                style={{
                                    width: '16rem',
                                    height: '400px',
                                    borderRadius: '4rem',
                                    overflow: 'hidden',
                                    border: '2px solid black',
                                    position: 'relative'
                                }}
                            >
                                <Card.Img
                                    className="img-fluid"
                                    src={item.image}
                                    style={{
                                        objectFit: "cover",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />

                                <Card.Body
                                    className="text-center d-flex justify-content-center align-items-center flex-column"
                                    style={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                                        color: "#fff",

                                    }}
                                >
                                    <Card.Title className="mb-3">{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>








            <section className="container py-5">
                <Row className="justify-content-center" >


                    <Col
                        md={5}
                        className="mb-3 mx-3 mx-md-5"
                    >
                        <h2 className="mb-3 mt-4 display-5 sobre">Sobre Nós</h2>

                    </Col>


                    <Col xs={9} sm={6} md={4}>
                        <img src={Logo2} className="sla" alt="servico01" />
                        <img src={ImagemBiaDelefrate} alt="Descrição" className="img-fluid imagemBia" />
                    </Col>

                </Row>
            </section>


            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
        </>
    );
}

export default Home;
