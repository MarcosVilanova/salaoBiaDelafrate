// ESTILOS
import './style.css';

// IMAGENS
import servico01 from "../../assets/servico01.jpg";
import servico02 from "../../assets/servico02.jpg";
import servico03 from "../../assets/servico03.jpg";
import servico04 from "../../assets/servico04.jpg";
import fundo from "../../assets/texturaFundo01.jpg";

// BIBLIOTECAS
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';

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
                <img src={fundo} className="imagemFundo" alt="Fundo"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center container mt-5">
                    <h1 className="card-title display-2">
                        Seu cabelo,<span className="d-block d-md-inline"> sua confiança</span>
                    </h1>
                    <p className="card-text lead mt-2" style={{ fontSize: "17px" }}>
                        Excelência em alisamento para um cabelo saudável, brilhante e sem esforço.
                    </p>
                    <Button href="#" target="_blank" className="btn_agendarAgora mt-2">
                        Agendar Agora
                    </Button>
                </div>
            </section>






            {/* SLIDER DE SERVIÇOS */}
            <section className="container my-4">
                <h2 className={"tituloServico display-5"}>Serviços</h2>
                <Swiper
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {dataSlide.map((item) => (
                        <SwiperSlide key={item.id} style={{ display: 'flex', justifyContent: 'center', padding: "22" }}>
                            <Card
                                style={{
                                    width: '15rem',
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
        </>
    );
}

export default Home;
