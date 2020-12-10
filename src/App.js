import React from 'react';
import './style/App.css';

import Social from "./component/class/Social";
import AboutMe from "./component/class/AboutMe";
import ProjectSlider from "./component/class/ProjectSlider";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Social />
                <AboutMe />
                <ProjectSlider />
            </div>
        );
    }
}
export default App;
