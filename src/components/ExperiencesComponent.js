import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { EXPERIENCES } from '../shared/experiences';
import variables from '../App.scss';


export default class Experiences extends Component {

    constructor(props) {
        super(props);

        this.iconColour = {
            background: variables.iconBackground,
            color: variables.iconForeground
        };

        this.RenderExperiences = this.RenderExperiences.bind(this);
    }

    RenderExperiences(experiences) {
        let rows = [];
        experiences.forEach(experience => {
            function Icon(props) {
                    return (
                        <div className="icon"><span className={`fa-2x ${experience.icon}`}></span></div>
                    )
            }

            rows.push(
                <VerticalTimelineElement date={experience.period} iconStyle={this.iconColour} icon={<Icon/>}>
                    <h4 className="vertical-timeline-element-title">{experience.company}</h4>
                    <h5 className="vertical-timeline-element-subtitle">{experience.position}</h5>
                    <div className="location"><i className="fa fa-map-marker"></i> {experience.location}</div>
                    <div className="timeline-summaries" dangerouslySetInnerHTML={{__html: experience.description}}/>
                </VerticalTimelineElement>
            )
        });

        return (
            <Container>
                <Row id="experiences" className="category justify-content-center">
                    <h2>Experiences</h2>
                </Row>
                <Row className="justify-content-center">
                    <h3>Turning "One Day" into "Day One"</h3>
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
                {this.RenderExperiences(EXPERIENCES)}
            </div>
        )
    }
}