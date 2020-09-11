import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { EXPERIENCES } from '../shared/experiences';


export default class Experiences extends Component {

    constructor(props) {
        super(props);

        this.RenderExperiences = this.RenderExperiences.bind(this);
    }

    RenderExperiences() {
        let rows = [];

        EXPERIENCES.forEach(experience => {
            let list = [];
            let points = experience.description.split(". ");
            points.forEach(point => {
                list.push(
                    <li>{point}</li>
                );
            });

            rows.push(
                <Row className="row-content">
                    <Col md="4" s="12">
                        <h3>{experience.company}</h3>
                        <br/>
                        <em>{experience.period}</em>
                        <br/>
                        <i className="fa fa-map-marker"></i> {experience.location}
                    </Col>
                    <Col>
                        <h4>{experience.position}</h4>
                        <br/>
                        <div className="d-none d-md-block">
                            <ul>
                                {list}
                            </ul>
                        </div>
                    </Col>
                </Row>
            );
        });

        return (
            <Container>
                <Row className="justify-content-center">
                    <h2>Experiences</h2>
                </Row>
                 <hr/>
                 {rows}
            </Container>
        )
    }

    render() {
        return (
            <div>
                {this.RenderExperiences()}
            </div>
        )
    }
}