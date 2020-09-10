import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


export default class Contact extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col align="center">
                            <h2>Contact Me</h2>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="row-content">
                        <Col md={{size: 10, offset: 1}}>
                            <ul className="split-list-2"> 
                                <li className="split-list-item"><a href="https://linkedin.com/in/maxwell-zheng"><i className="fa fa-2x fa-linkedin-square"></i>&ensp;https://linkedin.com/in/maxwell-zheng</a></li>
                                <li className="split-list-item"><a href="mailto:zhengmaxwell@gmail.com"><i className="fa fa-2x fa-envelope"></i>&ensp;zhengmaxwell@gmail.com</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}