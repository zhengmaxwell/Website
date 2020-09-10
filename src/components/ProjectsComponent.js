import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PROJECTS } from '../shared/projects';


export default class Projects extends Component {

    constructor(props) {
        super(props);

        this.RenderProjects = this.RenderProjects.bind(this);

    }

    RenderProjects() {
        let rows = [];

        PROJECTS.forEach(project => {
            rows.push(
                <Row>
                    <Col md="6">
                        <div className="w-25 p-3">
                            <li className="split-list-item"><img src={project.image} width="300"/></li>
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