// ========================== ESTILOS =============================


// ========================== IMAGENS =============================
import imagemSalao from "../../assets/Fundos/texturaFundo01.png";
import ImagemBiaDelefrate from "../../assets/Fundos/ImagemBiaDelefrate.webp";
import LogoPreta from "../../assets/IconeeLogo/LogoPreta.png";

import {dataSlideComentarios, dataSlideServicos, dataTransformacao,} from "./data";

// ======================== BIBLIOTECAS ===========================
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import {Link} from "react-router-dom";
import {useEffect} from "react";

// ======================== ANIMAÇÕES =============================
import AOS from "aos";
import "aos/dist/aos.css";

// ======================== SWIPER STYLES =========================
import {register} from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";

register();

function Home() {
    useEffect(() => {
        AOS.init({duration: 1300, once: true});
    }, []);

    return (<>
        {/* ============================= INICIO ============================= */}
        <section className="card cardInicio">
            <img
                src={imagemSalao}
                alt="Imagem Salão Bia Delefrate"
                className="imagemSalao"
                fetchPriority="high"
                width={1200}
                height={800}
            />
            <div
                className="container card-img-overlay d-flex flex-column justify-content-center mt-5"
                data-aos="fade-right"
            >
                <h1 className="card-title display-2">
                    Seu cabelo,
                    <span className="d-block d-md-inline"> sua confiança</span>
                </h1>
                <p className="card-text mt-2">
                    Excelência em alisamento para um cabelo saudável, brilhante e sem
                    esforço.
                </p>
                <div className="d-flex flex-md-row flex-column gap-3 mt-2">
                    <Button
                        href="https://wa.me/5517988245969?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio"
                        target="_blank"
                        className="btn_inicio"
                    >
                        Agendar Agora
                    </Button>
                    <Button as={Link} to="/produtos" className="btn_inicio">
                        Produtos
                    </Button>
                </div>
            </div>
        </section>

        {/* ============================= SERVIÇOS ============================= */}
        <Container className="mt-4 linhaVertical" data-aos="fade-up">
            <h2 className="titulo  mb-4 display-5">Serviços</h2>
            <Swiper
                slidesPerView={4}
                pagination={{clickable: true}}
                autoplay={{delay: 4000, disableOnInteraction: true}}
                lazy={true}
                preloadImages={false}
                breakpoints={{
                    0: {slidesPerView: 1}, 576: {slidesPerView: 2}, 768: {slidesPerView: 3}, 1200: {slidesPerView: 4},
                }}
            >
                {dataSlideServicos.map((item) => (<SwiperSlide key={item.id}>
                    <Card className="cardServico ">
                        <Card.Img
                            loading="lazy"
                            className="imgCard"
                            src={item.image}
                            alt={item.alt}
                        />
                        <Card.Body className="bodyCard">
                            <Card.Title className="mb-3 titleCard">
                                {item.title}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </SwiperSlide>))}
            </Swiper>
        </Container>

        <hr className="linhaHorizonal"/>

        {/* ============================= SOBRE NOS ============================= */}
        <Container className="linhaVertical" data-aos="fade-up">
            <Row className="justify-content-center">
                <Col
                    xs={10}
                    sm={9}
                    md={7}
                    lg={6}
                    xl={4}
                    xxl={4}
                    className="mb-3 mx-auto mx-md-5"
                >
                    <h2 className="mb-3 mt-4 display-5 titulo">Sobre Nós</h2>
                    <p className="textSobreNos">
                        O Bia Delefrate Liso Perfeito nasceu de um propósito: transformar
                        não só cabelos, mas também a autoestima e a confiança de cada
                        mulher que passa por aqui. Mais do que um salão de beleza, somos
                        um espaço de cuidado, escuta e transformação onde cada detalhe é
                        pensado com carinho, desde o atendimento até o resultado final no
                        espelho. A trajetória da Bia sempre foi guiada pelo amor em
                        realçar a beleza natural de cada cliente, respeitando o tempo, o
                        tipo e a saúde dos fios. Com anos de experiência em alisamentos
                        capilares, ela desenvolveu um olhar sensível e técnico que
                        valoriza o que há de mais bonito em cada mulher: sua essência.
                        Aqui, acreditamos que beleza é leveza. Por isso, cada serviço é
                        feito com produtos seguros, técnicas modernas e um toque pessoal
                        que faz toda diferença para que você se sinta confiante, linda e
                        acolhida em cada visita. Bia Delefrate Liso Perfeito: um espaço
                        onde o cuidado é verdadeiro e a transformação começa de dentro pra
                        fora.
                    </p>
                </Col>

                <Col xs={9} sm={8} md={6} lg={4} xl={4} xxl={3}>
                    <img
                        src={LogoPreta}
                        loading="lazy"
                        className="logoPreta"
                        alt="Logo Salao Bia Delefrate"
                    />
                    <img
                        src={ImagemBiaDelefrate}
                        loading="lazy"
                        alt="Imagem da Bia Delefrate"
                        className="img-fluid imagemBia"
                    />
                </Col>
            </Row>
        </Container>

        <hr className="linhaHorizonal"/>

        {/* ============================= ANTES / DEPOIS ============================= */}

        <Container className="linhaVertical" data-aos="fade-up">
            <h2 className="titulo  mb-4 display-5">Antes e Depois</h2>

            <Swiper
                modules={[Pagination]}
                slidesPerView={4}
                spaceBetween={30}
                pagination={{clickable: true}}
                breakpoints={{
                    0: {slidesPerView: 1}, 768: {slidesPerView: 2}, 995: {slidesPerView: 3}, 1200: {slidesPerView: 4},
                }}
                className="swiperExterno"
            >
                {dataTransformacao.map((item) => (<SwiperSlide key={item.id}>
                    <Card className="cardAntesDepois ">
                        <Swiper
                            slidesPerView={1}
                            navigation
                            pagination={{clickable: true}}
                            className="swiperInterno"
                        >
                            {item.images.map((img, index) => (<SwiperSlide key={index}>
                                <Card.Img
                                    src={img.src}
                                    alt={"Card Antes/Depois"}
                                    className="imgCardAntesDepois"
                                    loading="lazy"
                                />
                                <div className="titulImg">{img.title}</div>
                            </SwiperSlide>))}
                        </Swiper>
                    </Card>
                </SwiperSlide>))}
            </Swiper>
        </Container>

        <hr className="linhaHorizonal"/>

        {/* AVALIAÇÕES */}
        <Container className="linhaVertical mb-5" data-aos="fade-up">
            <h2 className="display-5 mt-4 mb-4 titulo">
                O que dizem nossas clientes
            </h2>
            <Swiper
                slidesPerView={4}
                pagination={{clickable: true}}
                breakpoints={{
                    0: {slidesPerView: 1, spaceBetween: 15},
                    320: {slidesPerView: 1, spaceBetween: 15},
                    768: {slidesPerView: 2, spaceBetween: 20},
                    1024: {slidesPerView: 4, spaceBetween: 10},
                    1440: {slidesPerView: 4, spaceBetween: 40},
                }}
            >
                {dataSlideComentarios.map((comentario) => (<SwiperSlide key={comentario.id}>
                    <Card className="cardComentario">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="aspas">❝</span>
                                <span className=" h4 ">{comentario.estrela.repeat(5)}</span>
                            </div>
                            <Card.Text className="text-muted">
                                {comentario.comentario}
                            </Card.Text>
                            <div>
                                <h3 className="mb-0">{comentario.nome}</h3>
                                <p className="sub-info mb-0 text-success">
                                    Cliente Verificada
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </SwiperSlide>))}
            </Swiper>
        </Container>

    </>);
}

export default Home;
