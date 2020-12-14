import data from "../assets/json/aboutme.json"
import {Tab, Row, Nav, Col} from "react-bootstrap";
import '../style/abouteme.css'

const AboutMe = () => {
    return (
            <Tab.Container id="left-tab" defaultActiveKey="me">
                <Row id="about-me" className="m-4 p-4">
                    <Col id="about-me-menu" className="">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="me">O mnie</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="contact">Kontakt</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col id="about-me-content" sm={10} className="pt-3">
                        <Tab.Content>
                            <Tab.Pane eventKey="me" >
                                <h3>{data.title}</h3>
                                <blockquote>{data.content}</blockquote>
                            </Tab.Pane>
                            <Tab.Pane eventKey="contact">
                                <blockquote>
                                    Zapraszam do współpracy <br />
                                    <i>
                                        Nowak Kamil <br />
                                        nowakcreazy@protonmail.com
                                    </i>
                                </blockquote>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
}
export default AboutMe;