import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Container, Row, Col } from 'reactstrap';
import { EDUCATIONS } from '../shared/education';


export default class Education extends Component {

    constructor(props) {
        super(props);

        this.RenderEducation = this.RenderEducation.bind(this);
    }

    RenderEducation(educations) {
        let rows = [];
        
        educations.forEach(education => {
            function Icon(props) {
                return (
                    <div className="icon"><span className={`fa-2x ${education.icon}`}></span></div>
                );
            }

            rows.push(
                <VerticalTimelineElement date={education.period} iconStyle={{ background: '#5bc0de', color: '#fff' }} icon={<Icon/>}>
                    <h3 className="vertical-timeline-element-title">{education.school}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{education.degree}</h4>
                    <div className="text-info"><i className="fa fa-map-marker"></i> {education.location}</div>
                    <p>{education.description}</p>
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