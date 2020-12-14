import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import Social from "./Social";
import '../style/navbar.css'

function NavBar() {
    return (
        <Navbar id="nav-bar" expand="sm">
            <Social />
            <Navbar.Toggle id="nav-toggle" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto h5 p-1">
                    <Nav.Link id="nav-item" href="#about-me">O mnie</Nav.Link>
                    <Nav.Link id="nav-item" href="#project-slide-show">Projekty</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavBar;