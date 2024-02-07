import { Container,Row,Col } from "react-bootstrap"
import linkedin from '../assets/icons8-linkedin-96.png'
import insta from '../assets/icons8-instagram-96.png'
import mail from '../assets/icons8-mail-96.png'


export const Footer = () => {
    return(
        <footer className="footer" id="contact">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <h2>Contact</h2>
                    </Col>
                    <Col sm={6}>
                        <div>
                            <a href='mailto:dikshanshagarwal12002@gmail.com' target="_blank"><span><img src={mail} />dikshanshagarwal12002@gmail.com</span></a>
                            <a href='https://www.linkedin.com/in/dikshansh-agrawal-4b3986225/' target="_blank"><span><img src={linkedin} />Dikshansh Agrawal</span></a>
                            <a href='https://www.instagram.com/dikshansh_agrawal/' target="_blank"><span><img src={insta} />dikshansh_agrawal</span></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}