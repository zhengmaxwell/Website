import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


export default class Contact extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row id="contact" className="category justify-content-center">
                        <h2>Contact Me</h2>
                    </Row>
                    <hr/>
                    <Row className="row-content justify-content-center">
                        <a className="link" href="https://linkedin.com/in/maxwell-zheng" target="_blank"><span className="fab fa-3x fa-linkedin-square"></span>&ensp;https://linkedin.com/in/maxwell-zheng</a>
                        <a className="link" href="mailto:zhengmaxwell@gmail.com"><span className="fas fa-3x fa-envelope"></span>&ensp;zhengmaxwell@gmail.com</a>
                    </Row>
                </Container>
            </div>
        );
    }
}