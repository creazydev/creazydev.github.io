import SocialItem from "./SocialItem";
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faGithub,
    faSlack
} from "@fortawesome/free-brands-svg-icons";

function Social() {
    return (
        <div>
            <SocialItem socialIcon={faFacebook} url="https://www.facebook.com/rckamil/" name="facebook" />
            <SocialItem socialIcon={faTwitter} url="https://twitter.com/creazy24178487" name="twitter" />
            <SocialItem socialIcon={faLinkedin} url="https://www.linkedin.com/in/kamil-nowak-312b631b1/" name="linkedin" />
            <SocialItem socialIcon={faGithub} url="https://github.com/creazydev" name="github" />
            <SocialItem socialIcon={faSlack} url="https://watchmybit.slack.com/archives/G01H6EQMQLR" name="slack" />
        </div>
    );
}
export default Social;