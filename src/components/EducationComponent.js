import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { EDUCATION } from '../shared/education';


export default class Education extends Component {

    constructor(props) {
        super(props);

        this.RenderEducation = this.RenderEducation.bind(this);
    }

    RenderEducation() {
        console.log(EDUCATION);
    }

    render() {
        this.RenderEducation();
        return (

            <div>
                <Container>
                    <Row>
                        <Col align="center">
                            <h2>Education</h2>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="row-content">
                        <Col md="4">
                            <h3>University of Toronto</h3>
                            <br/>
                            <em>2018 - 2022</em>
                            <br/>
                            <i className="fa fa-map-marker"></i> Toronto, Ontario
                        </Col>
                        <Col>
                            <h4>Bachelor in Applied Sciences - Engineering Science</h4>
                            <br/>
                            <ul>
                                <li>Major in Robotics Engineering</li>
                                <li>Double minor in Artificial Intelligence and Engineering Business</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="row-content">
                        <Col md="4">
                            <h3>Georgetown District High School</h3>
                            <br/>
                            <em>2014 - 2018</em>
                            <br/>
                            <i className="fa fa-map-marker"></i> Georgetown, Ontario
                        </Col>
                        <Col>
                            <h4>International Baccalaureate Diploma Programme</h4>
                            <br/>
                            <ul>
                                <li>Governor's General Medal Recipient</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}