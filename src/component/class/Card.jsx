import * as React from 'react';
import '../../style/Card.css'

import {faAmazon} from "@fortawesome/free-brands-svg-icons/faAmazon";
import SocialItem from "../item/SocialItem";

class Card extends React.Component {
    constructor(props) {
        super();
        this.state = {
            index: props.index,
            name: props.name,
            content: props.content,
            techTags: props.techTags,
            libTags: props.libTags,
            links: props.links
        };
    }

    render() {
        return (
            <div id={`card-${this.state.index}`} className="card">
                <div className="card-image">
                    <SocialItem socialIcon={faAmazon} url="https://www.facebook.com/rckamil/" />
                </div>
                <div className="card-content">
                    <span className="card-title">{this.state.name} {this.state.index}</span>
                    <p className="location">{this.state.content}</p>
                    {this.state.techTags.map(t=>
                        <div className="chip"> {t} </div>)
                    }
                    <br/>
                    {this.state.libTags.map(t=>
                        <div className="chip"> {t} </div>)
                    }
                </div>
            </div>
        );
    }
}
export default Card;