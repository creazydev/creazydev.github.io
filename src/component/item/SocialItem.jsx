import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialItem = ({ url, name, socialIcon }) => {
    return (
        <div className="social-item">
            <a href={url}>
                <FontAwesomeIcon className={name} icon={socialIcon} size="2x"/>
            </a>
        </div>
    );
};
export default SocialItem;