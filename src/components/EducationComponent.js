import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Container, Row, Col } from 'reactstrap';
import { EDUCATIONS } from '../shared/education';
import variables from '../App.scss';


export default class Education extends Component {

    constructor(props) {
        super(props);

        this.iconColour = {
            background: variables.iconBackground,
            color: variables.iconForeground
        };

        this.RenderEducation = this.RenderEducation.bind(this);
    }

    RenderEducation(educations) {
        let words = [];
        let rows = [];
        
        educations.forEach(education => {
            function Icon(props) {
                return (
                    <div className="icon"><span className={`fa-2x ${education.icon}`}></span></div>
                );
            }

            rows.push(
                <VerticalTimelineElement date={education.period} iconStyle={this.iconColour} icon={<Icon/>}>
                    <h4 className="vertical-timeline-element-title">{education.school}</h4>
                    <h5 className="vertical-timeline-element-subtitle">{education.degree}</h5>
                    <div className="location"><i className="fa fa-map-marker"></i> {education.location}</div>
                    <p className="timeline-summaries">{education.description}</p>
                </VerticalTimelineElement>
            );
        });

        return (
            <Container>
                <Row id="education" className="category justify-content-center">
                    <h2>Education</h2>
                </Row>
                <hr/>
                <VerticalTimeline>
                    {rows}
                </VerticalTimeline>
            </Container>
        );
    }

    render() {
        return (
            <div>
                {this.RenderEducation(EDUCATIONS)}
            </div>
        )
    }
}