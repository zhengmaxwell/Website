import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardImg, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import { PROJECTS } from '../shared/projects';
import Zoom from 'react-reveal/Zoom';


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
            let tools = [];
            project.tools.forEach(tool => {
                tools.push(
                    <div className="tool-badge">
                        <h5 className="tool-badge"><Badge className="badge-colour">{tool}</Badge></h5>&nbsp;
                    </div>
                );
            });

            rows.push(
                <div>
                    <Zoom>
                        <div className="click hover-container" onClick={() => this.toggleModal(project.name)}>
                            <img className="hover-image" src={project.image}/>
                            <div className="hover-text">
                                {project.name}
                            </div>
                        </div>
                    </Zoom>

                    <Modal isOpen={this.state[project.name]} toggle={() => this.toggleModal(project.name)} >
                        <ModalHeader toggle={() => this.toggleModal(project.name)}><div className="modal-title">{project.name}</div></ModalHeader>
                        <ModalBody>
                            <Card>
                                <CardImg src={project.image} alt="Chess"/>
                                <CardBody>
                                    <CardTitle>{tools}</CardTitle>
                                    <CardText className="modal-description">{project.description}</CardText>
                                    <br/>
                                    <Button className="modal-button" href={project.link} target="_blank">See Project</Button>
                                </CardBody>
                            </Card>
                        </ModalBody>
                    </Modal>
                </div>
            );
        });

        return (
            <Container>
                <Row id="projects" className="category justify-content-center">
                    <h2>Projects</h2>
                </Row>
                <hr/>
                <Row className="justify-content-center">
                    {rows}
                </Row>
                <br/><br/>
                <Row className="justify-content-center">
                    <a className="link" href="https://github.com/zhengmaxwell" target="_blank"><span className="fab fa-3x fa-github-square"></span>&ensp;https://github.com/zhengmaxwell</a>
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