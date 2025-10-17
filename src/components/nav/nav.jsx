// React Router
import { NavLink } from "react-router-dom";
// Bootstrap
import { Navbar, Container, Nav, Button } from "react-bootstrap";
// Estilos e imagem
import "./nav.css";
import Logo from "../../assets/Icones&Logo/Logo.png";

function NavComponent() {
    return (
        <Navbar expand="md" className="fixed-top navFundo">
            <Container>
                {/* Logo */}
                <Navbar.Brand as={NavLink} to="/">
                    <img src={Logo} alt="Logo" className="ms-2 ms-md-0" style={{ height: "70px" }}/>
                </Navbar.Brand>

                {/* Botão do menu mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="btn_toggle"/>

                {/* Links da navbar */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={NavLink} to="/" end>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contato">
                            Contato
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/produtos">
                            Produtos
                        </Nav.Link>

                        {/* Botão Agendar */}
                        <Button href="https://wa.me/5517988245969?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio" target="_blank" className="ms-md-4 btn_agendar">
                            Agendar
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavComponent;
