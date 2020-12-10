import * as React from 'react';
import "../../style/AboutMe.css"
import data from "../../json/aboutme.json"

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me">
                {this.props.getHeader(data.title)}
                <div className="about-me-content">
                    {data.content}
                </div>
            </div>
        );
    }
}
export default AboutMe;