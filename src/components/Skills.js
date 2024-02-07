import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import react from '../assets/physics.png'
import angular from '../assets/angular.png'
import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import ts from '../assets/typescript.png'
import ms from '../assets/icons8-metasploit-48.png'
import python from '../assets/python.png'
import bs from '../assets/burp_suite_macos_bigsur_icon_190319.png'

export const Skills = () => {
  const tech_array = ["React", "Angular","HTML","CSS","JS","TS","Python","Metasploit","Burpsuit"];
  const tech_img_array = [react,angular,html,css,js,ts,python,ms,bs]; 

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <h4>Technologies I have worked with</h4>
              <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} infinite={true} className="skill-slider">
                {tech_array.map((item, index) => (
                  <div key={index}>
                    <img src={tech_img_array[index]} alt="Technology" />
                    <h5>{item}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
