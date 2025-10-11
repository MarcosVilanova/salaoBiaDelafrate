// ESTILOS
import './style.css';

// IMAGENS
import servico01 from "../../assets/servico01.jpg";
import servico02 from "../../assets/servico02.jpg";
import servico03 from "../../assets/servico03.jpg";
import servico04 from "../../assets/servico04.jpg";
import imagemSalao from "../../assets/texturaFundo01.jpg";
import ImagemBiaDelefrate from "../../assets/ImagemBiaDelefrate.jpg";
import LogoPreta from "../../assets/LogoPreta.png";

// BIBLIOTECAS
import { Button, Card, Row, Col, Container} from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";// ANIMAÇÕES E SWIPER
import AOS from "aos";
import "aos/dist/aos.css";



function Home() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const dataSlideServicos = [
        { id: 1, image: servico01, title: "Alisamento" , alt: "Serviço de alisamento capilar profissional"},
        { id: 2, image: servico02, title: "Corte", alt: "Serviço de corte capilar profissional" },
        { id: 3, image: servico03, title: "Escova modelada", alt: "Serviço de escova modelada capilar profissional" },
        { id: 4, image: servico04, title: "Hidratação", alt: "Serviço de hidratação capilar profissional" },
    ];

const dataSlideComentarios = [
{ id: 1, nome: "Geisibel Paulino", estrela: "⭐⭐⭐⭐⭐",  comentario: "O trabalho dela é impecável, não troco por nenhuma outra, a dona do Liso perfeitooo tem nome Bia Delefrate, super indico!"},
{ id: 2, nome: "Jéssica Bolsoni", estrela: "⭐⭐⭐⭐⭐", comentario: "A melhor de Barretos, com certeza!!! Entrega realmente o liso perfeito. Salão acolhedor, profissionais maravilhosas, tanto no cabelo, quanto na unha e sobrancelha também. Elas arrasam"},
{ id: 3, nome: "Jessica Borges",  estrela: "⭐⭐⭐⭐⭐", comentario: "Ambiente aconchegante, atendimento maravilhoso e a bia é uma excelente profissional, com certeza voltarei mais vezes e indico pra todas minhas amigas . Aqui somos muitoooo bem tratadas"},
{ id: 4, nome: "Tamires Xavier",  estrela: "⭐⭐⭐⭐⭐",  comentario: "Ambiente acolhedor.... cafezinho na mão hahaha.. muitas risadas. Alisamento impecável, meu cabelo natural é bem cacheado e a Bia deixou lisérrimo. Amei."},
{ id: 5, nome: "Jeniffer Oliveira",  estrela: "⭐⭐⭐⭐⭐",  comentario: "Uma experiência maravilhosa, um ambiente gostoso de se estar ao qual você da muitas risadas, fora o trabalho maravilhoso não troco por nada, estão de parabéns desde ao atendimento até os produtos de qualidade"},
{ id: 6, nome: "Dayse Santos",  estrela: "⭐⭐⭐⭐⭐",  comentario: "A Bia é Maravilhosa, uma profissional Ímpar, atendimento top! O trabalho dela é profissionalismo conquistou meu coração! "},
{ id: 7, nome: "Gabyy Pereira", estrela: "⭐⭐⭐⭐⭐", comentario: "Eu fui muito bem recepcionada, a Bia arrasa muito sem dúvidas. Agora estou livre da chapinha!"},
{ id: 8, nome: "Francine SilvSilva",estrela: "⭐⭐⭐⭐⭐", comentario: "O melhor atendimento que já tive muito atenciosa o serviço excepcional não tenho nada pra reclamar só a agradecer pelo carinho"},
{ id: 9, nome: "Ana Carolina Alves Barbosa", estrela: "⭐⭐⭐⭐⭐", comentario: "Excelente atendimento\n Profissional nota mil não troco por nada\n Especialista em alisamento"},
    ];


    return (
        <>
            {/* INICIO */}
            <section className="card cardInicio">
                <img src={imagemSalao} className="imagemSalao" alt="Imagem de de fundo do salão"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center container mt-5 cardCentral"  data-aos="fade-right">
                    <h1 className="card-title display-2" >
                        Seu cabelo,<span className="d-block d-md-inline"> sua confiança</span>
                    </h1>
                    <p className="card-text mt-2">
                        Excelência em alisamento para um cabelo saudável, brilhante e sem esforço.
                    </p>
                    <div className="d-flex flex-md-row flex-column gap-3 mt-2">
                        <Button href="https://wa.me/5517988245969?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio" target="_blank" className="btn_inicio">
                            Agendar Agora
                        </Button>
                        <Button as={Link} to="/produtos" className="btn_inicio">
                            Produtos
                        </Button>
                    </div>
                </div>
            </section>



            {/* SERVIÇOS */}
            <Container className="mt-4" style={{paddingBottom:'20px',borderLeft: "2px solid #dcdcdc", borderRight: "2px solid #dcdcdc"}}  data-aos="fade-up">
                <h2 className="tituloServico display-5">Serviços</h2>
                <Swiper
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        0: { slidesPerView: 1},
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}>
                    {dataSlideServicos.map((item) => (
                        <SwiperSlide key={item.id} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card className={"cardServico"}>
                                <Card.Img className="imgCard" src={item.image} alt={item.alt} />
                                <Card.Body className="bodyCard">
                                    <Card.Title className="mb-3 titleCard">{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>

            <hr className={"linha"}/>

            {/* SOBRE NOS */}
            <Container className="secaoSobreNos"  data-aos="fade-up" style={{borderLeft: "2px solid #dcdcdc", borderRight: "2px solid #dcdcdc"}}>
                <Row className="justify-content-center " >
                    <Col xs={10} sm={9} md={7} lg={6} xl={4} xxl={4} className="mb-3 mx-auto mx-md-5">
                        <h2 className="mb-3 mt-4 display-5 tituloSobreNos">Sobre Nós</h2>
                        <p className={"textSobreNos"}>
           O Bia Delefrate Liso Perfeito nasceu de um propósito: transformar não só cabelos, mas também a autoestima e a confiança de cada mulher que passa por aqui.
           Mais do que um salão de beleza, somos um espaço de cuidado, escuta e transformação onde cada detalhe é pensado com carinho, desde o atendimento até o resultado final no espelho.
           A trajetória da Bia sempre foi guiada pelo amor em realçar a beleza natural de cada cliente, respeitando o tempo, o tipo e a saúde dos fios.
           Com anos de experiência em alisamentos capilares, ela desenvolveu um olhar sensível e técnico que valoriza o que há de mais bonito em cada mulher: sua essência.
           Aqui, acreditamos que beleza é leveza.
           Por isso, cada serviço é feito com produtos seguros, técnicas modernas e um toque pessoal que faz toda diferença para que você se sinta confiante, linda e acolhida em cada visita.
           Bia Delefrate Liso Perfeito um espaço onde o cuidado é verdadeiro, e a transformação começa de dentro pra fora.
                        </p>
                    </Col>
                    <Col xs={9} sm={8} md={6} lg={4} xl={4} xxl={3}>
                        <img src={LogoPreta} className="logoPreta" alt="servico01" />
                        <img src={ImagemBiaDelefrate} alt="Imagem da Bia Delefrate" className="img-fluid imagemBia" />
                    </Col>
                </Row>
            </Container>


            <hr className={"linha mt-5"}/>





            {/* AVALIAÇÕES */}
            <Container className="mt-5" data-aos="fade-up" style={{borderLeft: "2px solid #dcdcdc", borderRight: "2px solid #dcdcdc"}}>
                <h2 className="display-5 mb-5 tituloAvaliacao">
                    O que dizem nossas clientes
                </h2>

                <Swiper
                    slidesPerView={4}

                    pagination={{ clickable: true }}

                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 15 },
                        320: { slidesPerView: 1, spaceBetween: 15 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 10 },
                        1440: { slidesPerView: 4, spaceBetween: 40 },
                    }}
                >
                    {dataSlideComentarios.map((comentario) => (
                        <SwiperSlide key={comentario.id} className="d-flex justify-content-center">
                            <Card className="cardComentario">
                                <Card.Body>
                                    <Card.Text className="text-muted">
                                        {comentario.comentario}
                                    </Card.Text>
                                    <div className="d-flex align-items-center mt-3">
                                        <div>
                                            <h5 className="mb-0">{comentario.nome}</h5>
                                            <p className="sub-info mb-0">Cliente Verificada</p>
                                            <p className="mt-0">{comentario.estrela}</p>

                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>


        </>
    );
}

export default Home;
