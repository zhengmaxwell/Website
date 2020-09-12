import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


export default class About extends Component {

    constructor(props) {
        super(props);

        this.description = 'I\'m a robotics engineering student at the Univeristy of Toronto who is passionate about sustainability. I am interested in \
                            the environment, energy consumption, and waste mangement';

        this.RenderAbout = this.RenderAbout.bind(this);
    }

    RenderAbout() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <h2>About Me</h2>
                </Row>
                <hr/>
                <div className="row-content">
                    <Row className="justify-content-center">
                        <img src="/images/random.jpg" className="rounded-circle" width="200" height="200" alt="Me"/>
                    </Row>
                    <Row>
                        <Col md={{size:10, offset:1}}>
                            <br/>
                            {this.description}
                        </Col>
                    </Row>
                </div>
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