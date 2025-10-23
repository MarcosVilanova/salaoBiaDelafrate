import {Col, Container, Row} from "react-bootstrap";
import "./footer.css";
import Logo from "../../assets/IconeeLogo/Logo.png";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="py-5 align-items-center justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={6} xl={3} className="mb-3">
                        <NavLink to="/">
                            <img src={Logo} alt="Logo Bia Delafrate" className="logo"/>
                        </NavLink>
                    </Col>
                    <Col xs={12} sm={6} md={7} lg={6} xl={5} className="d-flex justify-content-center mb-3">
                        <ul className="links d-flex flex-column flex-md-row gap-md-4">
                            <li>
                                <a
                                    href="https://wa.me/5517988245969?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Agendar Agora
                                </a>
                            </li>
                            <li>
                                <NavLink to="/contato" className="footer-link">
                                    Localização
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/produtos" className="footer-link">
                                    Produtos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contato" className="footer-link">
                                    Contato
                                </NavLink>
                            </li>
                        </ul>
                    </Col>


                    <Col xs={10} sm={8} md={6} lg={5} xl={3}

                    className="d-flex flex-column justify-content-center text-xl-end text-center"
                    >
                        <p className="subtitulo mb-1">Projeto de Extensão - UniBarretos</p>
                        <p className="creditos mb-0">
                            &copy; {new Date().getFullYear()} Bia Delafrate Liso Perfeito. Todos os direitos reservados.
                            Desenvolvido por{" "}
                            <NavLink to="/Creditos" className="linkCreditos">Equipe Code</NavLink>
                        </p>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
