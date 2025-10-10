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

function Home() {

    const dataSlideServicos = [
        { id: 1, image: servico01, title: "Alisamento" },
        { id: 2, image: servico02, title: "Corte" },
        { id: 3, image: servico03, title: "Escova modelada" },
        { id: 4, image: servico04, title: "Hidratação" },
    ];

    return (
        <>
            {/* INICIO */}
            <section className="card cardInicio">
                <img src={imagemSalao} className="imagemSalao" alt="Imagem de de fundo do salão"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center container mt-5">
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
            <Container className="mt-4" style={{paddingBottom:'20px'}}>
                <h2 className="tituloServico display-5">Serviços</h2>
                <Swiper
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1},
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}>
                    {dataSlideServicos.map((item) => (
                        <SwiperSlide key={item.id} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card className={"cardServico"}>
                                <Card.Img className="imgCard" src={item.image}/>
                                <Card.Body className="bodyCard">
                                    <Card.Title className="mb-3 titleCard">{item.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>



            {/* SOBRE NOS */}
            <Container className="secaoSobreNos">
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
                        <img src={ImagemBiaDelefrate} alt="Descrição" className="img-fluid imagemBia" />
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default Home;
