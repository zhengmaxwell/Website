import React, { Component } from 'react';
import Title from './TitleComponent';
import Header from './HeaderComponent';
import Education from './EducationComponent';
import Experiences from './ExperiencesComponent';
import Skills from './SkillsComponent';
import Contact from './ContactComponent';
import Projects from './ProjectsComponent';
import About from './AboutComponent';
import * as $ from 'jquery'


export default class Main extends Component {

    render() {
        return (
            <div >
                <Title/>
                <Header/>
                <body>
                    <About/>
                    <Education/>
                    <Experiences/>
                    <Projects/>
                    <Skills/>
                </body>
                <Contact/>
            </div>
        );
    }
}