import React, { Component } from 'react';
import Header from './HeaderComponent';
import Education from './EducationComponent';
import Experiences from './ExperiencesComponent';
import Skills from './SkillsComponent';


class Main extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Education/>
                <Experiences/>
                <Skills/>
            </div>
        )
    }
}


export default Main;