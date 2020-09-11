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

    RenderProjects() {
        let rows = [];

        PROJECTS.forEach(project => {
            rows.push(
                <Row>
                    <Col md="6">
                        <div className="w-25 p-3">
                            <li className="split-list-item"><Button onClick={() => this.toggleModal(project.name)}><img src={project.image} width="300" height="300"/></Button></li>
                            <Modal isOpen={this.state[project.name]} toggle={() => this.toggleModal(project.name)} >
                                <ModalHeader toggle={() => this.toggleModal(project.name)}>{project.name}</ModalHeader>
                                <ModalBody>
                                    <Card>
                                        <CardImg src={project.image} alt="Chess"/>
                                        <CardBody>
                                            <CardTitle>Tools Used: {project.tools}</CardTitle>
                                            <CardText>{project.description}</CardText>
                                            <br/>
                                            <Button href={project.link}>See Project</Button>
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
            <Row>
                <Col>
                    <ul className="split-list-2">
                        {rows}
                    </ul>
                </Col>
            </Row>
        );
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col align="center">
                        <h2>Projects</h2>
                    </Col>
                </Row>
                <hr/>
                <Row className="row-content">
                    {this.RenderProjects()}
                </Row>
            </Container>
        );
    }
}