import * as React from 'react';

const ProjectItem = ({ url, name, logo }) => {
    return (
        <a
            href={url}
        >
            {name}
            <img src={logo} className="App-logo" alt="logo" />
        </a>
    );
};
export default ProjectItem;