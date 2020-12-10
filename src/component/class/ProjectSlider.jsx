import React from 'react';
import Card from "../class/Card";
import data from "../../json/projects.json"

import '../../style/ProjectSlider.css'

const length = data.length;

class ProjectSlider extends React.Component {
    constructor() {
        super();
        console.log(length);

        this.state = {
            selectedCardIndex: 0
        }
    }

    nextCard = () => {
        const newIndex = this.state.selectedCardIndex+1;
        this.setState({
            selectedCardIndex: newIndex
        })

    }

    prevCard = () => {
        const newIndex = this.state.selectedCardIndex-1;
        this.setState({
            selectedCardIndex: newIndex
        })

    }

    render() {
        console.log(this.state.selectedCardIndex);

        return (
            <div className="project-slider">
                {this.props.getHeader("Projekty")}
                <div className="navButtons">
                    <button
                        onClick={() => this.prevCard()}
                        disabled={this.state.selectedCardIndex === 0}>Prev</button>
                    <button
                        onClick={() => this.nextCard()}
                        disabled={this.state.selectedCardIndex === (length-1)}>Next</button>
                </div>

                <div className="col">
                    <div className={`cards-slider active-slide-${this.state.selectedCardIndex}`}>
                        <div className="cards-slider-wrapper"
                             style={{ 'transform': `translateX(-${this.state.selectedCardIndex*(100/length)}%)`}}>
                            {Object.keys(data).map(key => <Card
                                                    index={key}
                                                    name={data[key].name}
                                                    content={data[key].content}
                                                    techTags={data[key].tags}
                                                    libTags={data[key].libs}
                                                    links={data[key].links}/>)};
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default ProjectSlider;