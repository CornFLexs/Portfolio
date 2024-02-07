import { Col , Row } from "react-bootstrap"
import github from '../assets/GitHub.png'
import internet from '../assets/ux_1055666.png'

export const ProjectCard = ({title,type,description,imgUrl,gitUrl,siteUrl}) =>{
    return (
        <Row>
        <Col sm={10} xl={4} md={5} >
            <div className="proj-imgbx">
                <img src={imgUrl} />
            </div>
        </Col>
        <Col sm={8} xl={8} md={5}>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{type}</span><br />
                <span>{description}</span><br />
                <span><a href={gitUrl} target="_blank"><img src={github} alt="image" className="toLink"/></a></span>
                <span><a href={siteUrl} target="_blank"><img src={internet} alt="image" className="toLink"/></a></span>
                
            </div>
        </Col>
        </Row>
    )
}