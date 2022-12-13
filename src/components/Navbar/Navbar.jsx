import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarCustom() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand> <img src='https://www.nicepng.com/png/detail/1005-10059369_mustaf-tutorials-mustafa-logo-png.png' width={200}>
                </img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">


                        <Link to="/AbboutMe" style={{ color: "gray", marginRight: "5px", margin: "7px" }}>AbboutMe</Link>
                        <Link to="/" style={{ color: "gray", marginRight: "5px", margin: "7px" }}>Home</Link>




                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarCustom;