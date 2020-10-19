import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button} from 'reactstrap';


export default class Title extends Component {

    render() {
        return (
            <div>
                <Jumbotron className="title-img title-img-fade">
                    <Container className="title-foreground-fade">
                        <div className="title-text">
                            <Row className="justify-content-center">
                                <h1 className="title">Maxwell Zheng</h1>
                            </Row>
                            <hr className="title-footer"/>
                        </div>
                        <Row className="justify-content-start">
                            <a href="#navbar"><Button className="pulse-button"><i className="fa fa-3x fa-chevron-down"></i></Button></a>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}