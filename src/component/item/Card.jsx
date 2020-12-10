import * as React from 'react';
import '../../style/Card.css'

const Card = ({ index, name, content, tags, imgUrl, readMeUrl }) => {
    return (
            <div id={`card-${index}`} className="card" style={{backgroundImage: 'url('+imgUrl+')'}}>
                <div className="card-content">
                    <h3>{name}</h3>
                    <p>{content}</p>
                    <a href={readMeUrl} className="tag read-me">READ ME</a>

                    <p className="tags">
                        <label>Tags: </label>
                        {tags.map(t=>
                            <div className="tag"> {t} </div>)
                        }
                    </p>
                </div>
            </div>
    );
}
export default Card;