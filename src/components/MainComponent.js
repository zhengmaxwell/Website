import React, { Component } from 'react';
import Title from './TitleComponent';
import Header from './HeaderComponent';
import Education from './EducationComponent';
import Experiences from './ExperiencesComponent';
import Skills from './SkillsComponent';
import Contact from './ContactComponent';
import Projects from './ProjectsComponent';
import About from './AboutComponent';


export default class Main extends Component {

    render() {
        return (
            <div>
                <Title/>
                <About/>
                <Education/>
                <Experiences/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        )
    }
}