import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';


export default class Title extends Component {

    render() {
        return (
            <div>
                <Jumbotron className="img-fluid" style={{backgroundImage: 'url(/images/random.jpg)', height: '100vh'}}>
                    <div >
                        <Container>
                            <Row className="justify-content-center align-items-center">
                                <h1>Maxwell Zheng</h1>
                            </Row>
                        </Container>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}