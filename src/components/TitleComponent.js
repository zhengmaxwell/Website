import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button} from 'reactstrap';
import * as $ from 'jquery';


export default class Title extends Component {

    constructor(props) {
        super();

        this.allowScroll = this.allowScroll.bind(this);
    }

    allowScroll() {
        $("html").delay(1000).queue(function (next) {
            $("html").css("overflow", "overlay").animate({"opacity": "1"});
            next();
        });
    }

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
                            <a href="#navbar"><Button className="pulse-button" onClick={() => this.allowScroll()}><i className="fa fa-3x fa-chevron-down"></i></Button></a>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}