import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import notebook from '../assets/notebook.png';
import portfolio from '../assets/portfolio.png'

export const Project = () => {
    const [activeTab, setActiveTab] = useState("project-0"); // Set the default active tab

    const projects = [
        {
            title: "Task list",
            type: "Design and Development",
            description: "A complete project built using Angular, Nodejs, MongoDB (NOT RESPONSIVE ONLY FOR STANDARD MONITOR SIZE (i didnt knew about it that time :P)",
            imgUrl: notebook,
            gitUrl: 'https://github.com/CornFLexs/TImeLog.git',
            siteUrl: 'https://timedlog.netlify.app/',
        },
        {
            title: "Portfolio",
            type: "Design and Development",
            description: "A complete project built using React (WELL U ARE LITERALLY SCROLLING IT :) )",
            imgUrl: portfolio,
            gitUrl: 'https://github.com/CornFLexs/Portfolio.git',
            siteUrl: '',
        }
    ];

    const handleTabChange = (eventKey) => {
        setActiveTab(eventKey);
    };

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="projects-tab" activeKey={activeTab} onSelect={handleTabChange}>
                            <Nav variant="tabs" defaultActiveKey="dummy" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                {projects.map((project, index) => (
                                    <Nav.Item key={index}>
                                        <Nav.Link eventKey={`project-${index}`}>{project.title}</Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                            <Tab.Content>
                                {projects.map((project, index) => (
                                    <Tab.Pane key={index} eventKey={`project-${index}`}>
                                        <ProjectCard {...project} />
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
