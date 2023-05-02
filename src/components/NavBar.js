import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import PacManImage from "../assets/images/web-lisnovski-runner.gif";
import GhostTeam from "../assets/images/GhostTeam.gif";
import Logo from "../assets/images/pac-man-25th-anniversary-logo.jpg";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/" className="text-light">
          PAC-MAN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{ backgroundColor: 'red', color: 'yellow' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/PacManFamily"
              activeClassName="active-nav-link "
              className="px-5"
            >
              <div className="d-flex flex-column align-items-center">
                <Image src={PacManImage} alt="PacMan" />
                <span className="mt-1 text-light">Pac Family</span>
              </div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/GhostFamily"
              activeClassName="active-nav-link"
              className="px-5"
            >
              <div className="d-flex flex-column align-items-center">
                <Image
                  src={GhostTeam}
                  alt="GhostTeam"
                  style={{ width: "50px", height: "50px" }}
                />
                <span className="mt-1 text-light">Ghost</span>
              </div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/PacGames"
              activeClassName="active-nav-link"
              className="px-5"
            >
              <div className="d-flex flex-column align-items-center">
                <Image
                  src={Logo}
                  alt="PacLogo"
                  style={{ width: "50px", height: "50px" }}
                />
                <span className="mt-1 text-light">Games</span>
              </div>
            </Nav.Link>

            {/* <NavDropdown id="basic-nav-dropdown" variant="danger">
              <NavDropdown.Item href="/PacManFamily">Link 1</NavDropdown.Item>
              <NavDropdown.Item href="/GhostFamily">Link 2</NavDropdown.Item>
              <NavDropdown.Item href="/PacGames">Link 3</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
