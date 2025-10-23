// =========================== IMPORTS ===========================
// Serviços
import servico01 from "../../assets/ServicosIMG/servico01.webp";
import servico02 from "../../assets/ServicosIMG/servico02.webp";
import servico03 from "../../assets/ServicosIMG/servico03.webp";
import servico04 from "../../assets/ServicosIMG/servico04.webp";
import servico05 from "../../assets/ServicosIMG/servico05.webp";

// Antes e Depois
import antes01 from "../../assets/Antes&Depois/antes01.webp";
import depois01 from "../../assets/Antes&Depois/depois01.webp";
import antes02 from "../../assets/Antes&Depois/antes02.webp";
import depois02 from "../../assets/Antes&Depois/depois02.webp";
import antes03 from "../../assets/Antes&Depois/antes03.webp";
import depois03 from "../../assets/Antes&Depois/depois03.webp";
import antes04 from "../../assets/Antes&Depois/antes04.webp";
import depois04 from "../../assets/Antes&Depois/depois04.webp";
import antes05 from "../../assets/Antes&Depois/antes05.webp";
import depois05 from "../../assets/Antes&Depois/depois05.webp";
import antes06 from "../../assets/Antes&Depois/antes06.webp";
import depois06 from "../../assets/Antes&Depois/depois06.webp";

// =========================== DADOS ===========================

// --------- Serviços ---------
const dataSlideServicos = [{
    id: 1, image: servico01, title: "Alisamento", alt: "Serviço de alisamento capilar profissional",
}, {
    id: 2, image: servico02, title: "Corte", alt: "Serviço de corte capilar profissional",
}, {
    id: 3, image: servico03, title: "Escova modelada", alt: "Serviço de escova modelada capilar profissional",
}, {
    id: 4, image: servico04, title: "Hidratação", alt: "Serviço de hidratação capilar profissional",
},{
    id: 5, image: servico05, title: "Alisamento + Corte", alt: "Serviço de hidratação capilar profissional",
},];

// --------- Antes e Depois ---------
const dataTransformacao = [{
    id: 1, images: [{src: depois01, title: "Depois"}, {src: antes01, title: "Antes"},],
}, {
    id: 2, images: [{src: depois02, title: "Depois"}, {src: antes02, title: "Antes"},],
}, {
    id: 3, images: [{src: depois03, title: "Depois"}, {src: antes03, title: "Antes"},],
}, {
    id: 4, images: [{src: depois04, title: "Depois"}, {src: antes04, title: "Antes"},],
}, {
    id: 5, images: [{src: depois05, title: "Depois"}, {src: antes05, title: "Antes"},],
},{
    id: 5, images: [{src: depois06, title: "Depois"}, {src: antes06, title: "Antes"},],
},

];

// --------- Comentários ---------
const dataSlideComentarios = [{
    id: 1,
    nome: "Geisibel Paulino",
    estrela: "★",
    comentario: "O trabalho dela é impecável, não troco por nenhuma outra, a dona do Liso perfeitooo tem nome Bia Delefrate, super indico!",
}, {
    id: 2,
    nome: "Jéssica Bolsoni",
    estrela: "★",
    comentario: "A melhor de Barretos, com certeza!!! Entrega realmente o liso perfeito. Salão acolhedor, profissionais maravilhosas, tanto no cabelo, quanto na unha e sobrancelha também. Elas arrasam",
}, {
    id: 3,
    nome: "Jessica Borges",
    estrela: "★",
    comentario: "Ambiente aconchegante, atendimento maravilhoso e a Bia é uma excelente profissional, com certeza voltarei mais vezes e indico pra todas minhas amigas. Aqui somos muitoooo bem tratadas",
}, {
    id: 4,
    nome: "Tamires Xavier",
    estrela: "★",
    comentario: "Ambiente acolhedor.... cafezinho na mão hahaha.. muitas risadas. Alisamento impecável, meu cabelo natural é bem cacheado e a Bia deixou lisérrimo. Amei.",
}, {
    id: 5,
    nome: "Jeniffer Oliveira",
    estrela: "★",
    comentario: "Uma experiência maravilhosa, um ambiente gostoso de se estar ao qual você da muitas risadas, fora o trabalho maravilhoso não troco por nada, estão de parabéns desde ao atendimento até os produtos de qualidade",
}, {
    id: 6,
    nome: "Dayse Santos",
    estrela: "★",
    comentario: "A Bia é Maravilhosa, uma profissional Ímpar, atendimento top! O trabalho dela é profissionalismo conquistou meu coração!",
}, {
    id: 7,
    nome: "Gabyy Pereira",
    estrela: "★",
    comentario: "Eu fui muito bem recepcionada, a Bia arrasa muito sem dúvidas. Agora estou livre da chapinha!",
}, {
    id: 8,
    nome: "Francine SilvSilva",
    estrela: "★",
    comentario: "O melhor atendimento que já tive muito atenciosa o serviço excepcional não tenho nada pra reclamar só a agradecer pelo carinho",
}, {
    id: 9,
    nome: "Ana Carolina Alves Barbosa",
    estrela: "★",
    comentario: "Excelente atendimento\nProfissional nota mil não troco por nada\nEspecialista em alisamento",
},];

// =========================== EXPORT ===========================
export {dataSlideServicos, dataTransformacao, dataSlideComentarios};
