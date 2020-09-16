import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { EXPERIENCES } from '../shared/experiences';
import TrainIcon from '@material-ui/icons/Train';


export default class Experiences extends Component {

    constructor(props) {
        super(props);

        this.RenderExperiences = this.RenderExperiences.bind(this);
    }

    RenderExperiences() {
        let rows = [];
        EXPERIENCES.forEach(experience => {
            function Icon(props) {
                    return (
                        <div className="icon"><span className={`fa-2x ${experience.icon}`}></span></div>
                    )
            }

            rows.push(
                <VerticalTimelineElement date={experience.period} iconStyle={{ background: '#5bc0de', color: '#fff' }} icon={<Icon/>}>
                    <h3 className="vertical-timeline-element-title">{experience.position}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
                    <div className="text-info"><i className="fa fa-map-marker"></i> {experience.location}</div>
                    <p>{experience.description}</p>
                </VerticalTimelineElement>
            )
        });

        return (
            <Container>
                <Row id="experiences" className="category justify-content-center">
                    <h2>Experiences</h2>
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
                {this.RenderExperiences()}
            </div>
        )
    }
}