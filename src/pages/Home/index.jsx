import './style.css'
import minha from "../../assets/minha.png"
import {Button} from "react-bootstrap";

function Home() {

    return (
        <>
            <div className="card bg-dark text-white">
                <img src={ minha } className="img-fluid" alt="..." style={{"max-height": "80vh", "min-height": "50vh",
                    filter: "brightness(40%)", border: "0 !important"}} />

                <div className="card-img-overlay d-flex flex-column justify-content-center container mt-5">
                    <h5 className="card-title display-4">
                        Seu cabelo,<span className="d-block d-md-inline"> sua confiança</span>
                    </h5>
                    <p className="card-text lead mt-2"  style={{ fontSize: "17px" }} >Alisamento sem formol com excelência.</p>
                    <Button href="#" target="_blank" className="btn_agendarAgora mt-2">
                        Agendar Agora
                    </Button>
                </div>
            </div>


        </>
    )
}

export default Home
