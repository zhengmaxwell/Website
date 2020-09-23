import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactTextRotator from 'react-text-rotator';
import { PROFILE } from '../shared/profile';


export default class About extends Component {

    constructor(props) {
        super(props);

        this.RenderAbout = this.RenderAbout.bind(this);
    }

    RenderAbout(profile) {
        return (
            <Container>
                <Row id="about" className="category justify-content-center">
                    <h2>About Me</h2>
                </Row>
                <Row className="justify-content-center" style={{fontSize: '20px'}}>
                    <h3><ReactTextRotator content={profile.subtitle} time={5000}/></h3>
                </Row>
                <hr/>
                <div className="row-content">
                    <Row className="justify-content-center">
                        <img src={profile.image} className="rounded-circle" width="200" height="200" alt="Me"/>
                    </Row>
                    <Row>
                        <Col md={{size:10, offset:1}}>
                            <br/>
                            <div className="profile" dangerouslySetInnerHTML={{__html: profile.description}}/>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }

    render() {
        return (
            <div>
                {this.RenderAbout(PROFILE)}
            </div>
        )
    }
}