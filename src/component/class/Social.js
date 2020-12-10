import * as React from 'react';
import '../../style/Social.css';

import SocialItem from "../item/SocialItem";
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faGithub,
    faSlack
} from "@fortawesome/free-brands-svg-icons";

class Social extends React.Component {
    render() {
        return (
            <div id="social-container">
                <SocialItem socialIcon={faFacebook} url="https://www.facebook.com/rckamil/" name="facebook" />
                <SocialItem socialIcon={faTwitter} url="https://twitter.com/creazy24178487" name="twitter" />
                <SocialItem socialIcon={faLinkedin} url="https://www.linkedin.com/in/kamil-nowak-312b631b1/" name="linkedin" />
                <SocialItem socialIcon={faGithub} url="https://github.com/creazydev" name="github" />
                <SocialItem socialIcon={faSlack} href="href" name="slack" />
            </div>
        );
    }
};
export default Social;