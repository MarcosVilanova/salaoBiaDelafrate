import { Card, Col, Row, Container } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import './creditos.css';

function Creditos() {
    const creditos = [
        {
            nome: "Bia Delafrate",
            funcao: "Proprietária",
            contribuicao: "Fornecimento de imagens e conteúdo do salão",
            destaque: true,
        },
        {
            nome: "Universidade Barretos",
            funcao: "Apoio Acadêmico",
            contribuicao: "Orientação e acompanhamento do projeto de extensão",
        },
        {
            nome: "Marcos Vilanova",
            funcao: "Desenvolvedor",
            contribuicao: "Criação da seção Inicio e NavBar, deploy do projeto, revisão de código e merge de pull requests",
            linkedin: "https://br.linkedin.com/in/marcosvilanova"
        },
        {
            nome: "Victor Santana",
            funcao: "Desenvolvedor",
            contribuicao: "Criação da Página Produtos",
            linkedin: "https://www.linkedin.com/in/victor-hugo-dos-santos-48bb3918a/"
        },
        {
            nome: "Wesley Oliveira",
            funcao: "Desenvolvedor",
            contribuicao: "Criação da Página Contatos",
            linkedin: "https://www.linkedin.com/in/wesley-kaique-de-oliveira-9ab21619a/"
        },
        {
            nome: "Otavio Delefrate",
            funcao: "Desenvolvedor",
            contribuicao: "Criação do Footer component",
            linkedin: "https://www.linkedin.com/in/otavio-delefrate-15891b1b9/"
        },
    ];

    return (
        <Container className="my-5 ">
            <h2 className="titulo display-5">Créditos do Projeto</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {creditos.map((item, index) => (
                    <Col key={index}>
                        <Card className={`h-100 shadow-sm credit-card ${item.destaque ? 'destaque' : ''}`}>
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div>
                                    <Card.Title className="credit-nome">{item.nome}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted credit-funcao">{item.funcao}</Card.Subtitle>
                                    <Card.Text className="credit-texto">{item.contribuicao}</Card.Text>
                                </div>
                                {item.linkedin && (
                                    <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                        <FaLinkedin size={24} />
                                    </a>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Creditos;
