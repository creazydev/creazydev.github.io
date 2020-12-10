import React from 'react';
import './style/App.css';

import Social from "./component/class/Social";
import AboutMe from "./component/class/AboutMe";
import ProjectSlider from "./component/class/ProjectSlider";

class App extends React.Component {
    getHeader = (tabName) => {
        return (
            <div className="header-title" id={'header_'+tabName}>
                <h2>{tabName}</h2> <hr/>
            </div>
        );
    }

    render() {
        return (
            <div className="App page">
                <Social />

                <AboutMe getHeader={this.getHeader} />

                <ProjectSlider getHeader={this.getHeader} />
            </div>
        );
    }
}
export default App;
