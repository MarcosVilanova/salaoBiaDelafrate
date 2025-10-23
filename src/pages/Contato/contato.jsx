import './contato.css';
import { Col, Container, Row } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

function Contato() {
    return (
        <Container className="py-5">
            <h2 className="mt-5 display-5 text-center titulo">
                Entre em Contato
            </h2>

            <Row className="justify-content-center">
                <Col xs={10} sm={10} md={7} lg={6} className="d-flex flex-column">

                    <a
                        href="https://wa.me/5517988245969?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="BtnContato mb-3 mt-3 d-flex align-items-center justify-content-center text-decoration-none"
                    >
                        <FaWhatsapp className="me-2" />WhatsApp
                    </a>

                    <a
                        href="https://www.instagram.com/biadelefrate/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="BtnContato d-flex align-items-center justify-content-center text-decoration-none mb-3"
                    >
                        <FaInstagram className="me-2" /> Instagram
                    </a>

                    <FaMapMarkerAlt className="iconLocalizacao mb-2" />
                    <h3 className={"subtexto"}>Localização</h3>
                    <p className={"subtexto"}>Av. Aristides José Anastácio, 145 - San Diego, Barretos</p>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.063610180505!2d-48.604236099999994!3d-20.5445781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bb85e6e99c3a19%3A0xcbbb86266a1eebc4!2sBia%20Delefrate%20Liso%20Perfeito!5e0!3m2!1spt-BR!2sbr!4v1760659759124!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="350"
                        style={{  borderRadius: '15px', border: "2px solid black" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa"
                    ></iframe>

                </Col>
            </Row>

        </Container>
    );
}

export default Contato;
