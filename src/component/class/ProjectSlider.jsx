import React from 'react';
import Card from "../item/Card";
import data from "../../json/projects.json"

import '../../style/ProjectSlider.css'

const length = data.length;

class ProjectSlider extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedCardIndex: 0
        };
    }

    nextCard = () => {
        const newIndex = this.state.selectedCardIndex+1;
        this.setState({
            selectedCardIndex: newIndex
        });
    }

    prevCard = () => {
        const newIndex = this.state.selectedCardIndex-1;
        this.setState({
            selectedCardIndex: newIndex
        });
    }

    render() {
        return (
            <div className="projects">
                <h2>Moje projekty</h2>

                <div className="nav-buttons">
                    <button onClick={() => this.prevCard()} disabled={this.state.selectedCardIndex === 0}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
                    </button>
                    <button onClick={() => this.nextCard()} disabled={this.state.selectedCardIndex === (length-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                    </button>
                </div>

                <div className="col">
                    <div className={`cards-slider active-slide-${this.state.selectedCardIndex}`}>
                        <div className="cards-slider-wrapper"
                             style={{ 'transform': `translateX(-${this.state.selectedCardIndex*(100/length)}%)`}}>
                            {Object.keys(data).map(key => <Card
                                                    index={key}
                                                    name={data[key].name}
                                                    content={data[key].content}
                                                    tags={data[key].tags}
                                                    imgUrl={data[key].links.img}
                                                    readMeUrl={data[key].links.readme} />)};
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default ProjectSlider;