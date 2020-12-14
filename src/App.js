import './style/app.css'

import NavBar from "./js/NavBar";
import ProjectSlideShow from "./js/ProjectSlideShow";
import AboutMe from "./js/AboutMe";

import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

function App() {
    return (
        <Container id="app" fluid className="p-0">
            <Row>
                <Col>
                    <NavBar />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AboutMe />
                </Col>
            </Row>
            <Row>

            </Row>
            <Row>
                <Col>
                    <ProjectSlideShow />
                </Col>
            </Row>
        </Container>
    );
}
export default App;