import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import './nav.css';
import Logo from "../../assets/Logo.png";

function NavComponent() {
    return (
        <Navbar expand="md" className="fixed-top navItem">
            <Container>
                {/* Logo */}
                <Navbar.Brand as={NavLink} to="/">
                    <img src={Logo} alt="Logo" className="ms-2 ms-md-0" style={{ height: "70px" }} />
                </Navbar.Brand>

                {/* Toggle para mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="btn_toggle" />

                {/* Links da Navbar */}
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

                        {/* Botão da Navbar */}
                        <Button href="#" target="_blank" className="ms-md-4 btn_agendar">
                            Agendar
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavComponent;
