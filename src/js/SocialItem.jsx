import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Navbar} from "react-bootstrap";

const SocialItem = ({ url, name, socialIcon }) => {
    return (
        <Navbar.Brand>
            <a href={url}>
                <FontAwesomeIcon id="social-icon" icon={socialIcon} size="2x"/>
            </a>
        </Navbar.Brand>
    );
};
export default SocialItem;