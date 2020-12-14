import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
import data from '../assets/json/projects.json'
import '../style/projectslideshow.css'

function ProjectSlideShow() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div>
            <div>
                <hr className="border-grey w-100 border-dark mb-5" />
                <h2 className="mt-3 font-weight-bold ">Projekty
                    <hr className="border-white w-50 border-dark " />
                </h2>
            </div>
            <Carousel id="project-slide-show" className="m-1 p-3 shadow" activeIndex={index} onSelect={handleSelect}>
                {Object.keys(data).map(key =>
                    <Carousel.Item className='project-content'>
                        <div className='aligned'>
                            <h3>{data[key].name}</h3> <br />
                        </div>
                        <p className='project-description'>{data[key].content}</p>

                        <div className='aligned'>
                            <a href={data[key].links.readme}>
                                REPOZYTORIUM
                            </a>
                        </div>
                        <hr className="border-grey w-100 border-dark mb-3" />
                        <p className="tags">
                        <label className='pr-2'>Tags: </label>
                        {data[key].tags.map(t=>
                            <div className="tag"> {t} </div>)
                        }
                        </p>
                    </Carousel.Item>)}
            </Carousel>
        </div>
    );
};
export default ProjectSlideShow;