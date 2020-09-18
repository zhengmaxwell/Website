import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { PROJECTS } from '../shared/projects';


export default class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {}

        PROJECTS.forEach(project => {
            this.state[project.name] = false;
        });

        this.toggleModal = this.toggleModal.bind(this);
        this.RenderProjects = this.RenderProjects.bind(this);
    }
    
    toggleModal(name) {
        this.setState({
            [name]: !this.state[name]
        });
    }

    RenderProjects(projects) {
        let rows = [];

        projects.forEach(project => {
            rows.push(
                <Row>
                    <Col>
                        <div className="w-50 p-10">
                                <li className="split-list-item">
                                    <div className="click hover-container" onClick={() => this.toggleModal(project.name)}>
                                        <img className="hover-image" src={project.image}/>
                                        <div className="hover-text">
                                            {project.name}
                                        </div>
                                    </div>
                                </li>
                            <Modal isOpen={this.state[project.name]} toggle={() => this.toggleModal(project.name)} >
                                <ModalHeader toggle={() => this.toggleModal(project.name)}><h4>{project.name}</h4></ModalHeader>
                                <ModalBody>
                                    <Card>
                                        <CardImg src={project.image} alt="Chess"/>
                                        <CardBody>
                                            <CardTitle>Tools Used: {project.tools}</CardTitle>
                                            <CardText>{project.description}</CardText>
                                            <br/>
                                            <Button className="modal-button" href={project.link} target="_blank">See Project</Button>
                                        </CardBody>
                                    </Card>
                                </ModalBody>
                            </Modal>
                        </div>
                    </Col>
                </Row>
            );
        });

        return (
            <Container>
                <Row id="projects" className="category justify-content-center">
                    <h2>Projects</h2>
                </Row>
                <hr/>
                <Row className="row-content ">
                    <Col className="justify-content-center">
                        <ul className="split-list-2">
                            {rows}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col align="center">
                        <a className="link" href="https://github.com/zhengmaxwell" target="_blank"><span className="fab fa-3x fa-github-square"></span>&ensp;https://github.com/zhengmaxwell</a>
                    </Col>
                </Row>
            </Container>
        );
    }

    render() {
        return (
            <div>
                {this.RenderProjects(PROJECTS)}
            </div>
        );
    }
}