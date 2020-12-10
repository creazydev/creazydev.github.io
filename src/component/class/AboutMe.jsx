import * as React from 'react';
import "../../style/AboutMe.css"

import data from "../../json/aboutme.json"

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me">
                <h2>{data.title}</h2>
                <hr />
                <div className="about-me-content">
                    {data.content}
                    <blockquote>Nowak Kamil <br />
                        nowakcreazy@protonmail.com</blockquote>
                </div>
            </div>
        );
    }
}
export default AboutMe;