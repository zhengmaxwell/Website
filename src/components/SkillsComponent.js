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
                    <li className="split-list-item">{item}</li>
                );
            });
            rows.push(
                <div>
                    <Row>
                        <h3>{skill.name}</h3>
                    </Row>
                    <Row>
                        <ul className="split-list-3">
                            {list}
                        </ul>
                    </Row>
                </div>
            );
        });

        return (
            <Container>
                <Row className="justify-content-center">
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
                {this.RenderSkills()}
            </div>
        )
    }
}