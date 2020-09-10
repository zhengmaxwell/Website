import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { SKILLS } from '../shared/skills';


export default class Skills extends Component {

    constructor(props) {
        super(props);

        this.RenderSkills = this.RenderSkills.bind(this);
    }

    RenderSkills() {
        let rows = [];
        
        SKILLS.forEach(skill => {
            let list = [];
            skill.list.forEach(item => {
                list.push(
                    <li>{item}</li>
                );
            });
            rows.push(
                <div>
                    <Col md="12" align="center">
                        <h3>{skill.name}</h3>
                    </Col>
                    <Col md="12">
                        <br/>
                        <ul>
                            {list}
                        </ul>
                    </Col>
                </div>
            );
        });

        return (
            <Container>
                <Row>
                    <Col align="center">
                        <h2>Skills</h2>
                    </Col>
                </Row>
                <hr/>
                <Row className="row-content">
                    {rows}
                </Row>
            </Container>
        );
    }

    render() {
        return (
            <div>
                {this.RenderSkills()}
            </div>
        )
    }
}