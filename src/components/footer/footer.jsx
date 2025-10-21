import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import Logo from "../../assets/IconeeLogo/Logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-5 align-items-center">
          <Col xs={12} md={4} className=" mb-3 ">
            <img src={Logo} alt="Logo Bia Delefrate" className="logo" />
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mb-3">
            <ul className="links d-flex flex-column flex-md-row gap-md-4 ">
              <li>
                <a
                  href="https://wa.me/5517988245969?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio"
                  target="_blank"
                >
                  Agendar Agora
                </a>
              </li>
              <li>
                <NavLink to="/" className="footer-link">
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

          <Col
            xs={12}
            md={4}
            className="d-flex flex-column justify-content-center align-items-center align-items-md-end"
          >
            <p className="subtitulo mb-1">Projeto de Extensão - UniBarretos</p>
            <p className="creditos mb-0">
              &copy; {new Date().getFullYear()} UniBarretos. Todos os direitos
              reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
