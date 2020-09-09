import React, { Component } from 'react';
import Header from './HeaderComponent';
import Education from './EducationComponent';


class Main extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Education/>
            </div>
        )
    }
}


export default Main;