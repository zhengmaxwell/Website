import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';


export default class Title extends Component {

    render() {
        return (
            <div>
                <Jumbotron style={{backgroundImage: 'url(/images/random.jpg)', height: '100vh', margin: 0}}>
                    <Container>
                        <Row className="justify-content-center" style={{padding: '20% 0'}}>
                            <h1 className="title">Maxwell Zheng</h1>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}