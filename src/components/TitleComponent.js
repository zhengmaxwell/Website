import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button} from 'reactstrap';


export default class Title extends Component {

    render() {
        return (
            <div>
                <Jumbotron className="title-img">
                    <Container>
                        <Row className="justify-content-center" style={{padding: '20% 0'}}>
                            <h1 className="title">Maxwell Zheng</h1>
                        </Row>
                        <Row className="justify-content-start">
                            <a href="#navbar"><Button className="pulse-button"><i className="fa fa-3x fa-chevron-down"></i></Button></a>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}