import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


export default class About extends Component {

    constructor(props) {
        super(props);

        const description = 'I\'m a robotics engineering student who is passionate about sustainability.';

        this.RenderAbout = this.RenderAbout.bind(this);
    }

    RenderAbout() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <h2>About Me</h2>
                </Row>
                <hr/>
            </Container>
        );
    }

    render() {
        return (
            <div>
                {this.RenderAbout()}
            </div>
        )
    }
}