import React, { Component } from 'react';
import Header from './HeaderComponent';
import Education from './EducationComponent';
import Experiences from './ExperiencesComponent';


class Main extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Education/>
                <Experiences/>
            </div>
        )
    }
}


export default Main;