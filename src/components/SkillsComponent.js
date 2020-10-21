import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { SKILLS } from '../shared/skills';
import Fade from 'react-reveal/Fade'


export default class Skills extends Component {

    constructor(props) {
        super(props);

        this.RenderSkills = this.RenderSkills.bind(this);
    }

    RenderSkills(skills) {
        let rows = [];
        
        skills.forEach(skill => {
            let list = [];
            skill.list.forEach(item => {
                list.push(
                    <li className="split-list-item">{item}</li>
                );
            });
            rows.push(
                <div>
                    <Fade bottom big>
                        <Row>
                            <Col>
                                <h4>{skill.name}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ul className="split-list-3">
                                    {list}
                                </ul>
                            </Col>
                        </Row>
                    </Fade>
                </div>
            );
        });

        return (
            <Container>
                <Row id="skills" className="category justify-content-center">
                    <h2>Skills</h2>
                </Row>
                <hr/>
                <div className="row-content">
                    {rows}
                </div>
            </Container>
        );
    }

    render() {
        return (
            <div>
                {this.RenderSkills(SKILLS)}
            </div>
        )
    }
}