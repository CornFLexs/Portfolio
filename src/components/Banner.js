import { Container, Row , Col} from "react-bootstrap";
import { ReactTyped } from "react-typed";
import myimage from "../assets/my_image.jpg"
import video from '../assets/video2.mp4'

export const Banner =() => {
    
    return(
        <div className="banner" id="home">
            <div className="video-container">
                <video autoPlay loop muted className="video-background">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{" "}
                            <ReactTyped strings={[ "Hi I'm Dikshansh","I'm a Web Developer","I'm an Application Tester"]} typeSpeed={100} loop />
                        </h1>
                        <p>Hello, I'm Dikshansh, a passionate individual driven by the curiosity to learn and explore new things. I find the process of acquiring knowledge not just a necessity but a genuinely cool and exciting journey."</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={myimage} alt="image" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
