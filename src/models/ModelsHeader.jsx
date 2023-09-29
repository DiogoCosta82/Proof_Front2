import { useEffect, useState } from "react";
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header(props) {
  const [connected, setConnected] = useState(false);
  const [disconnected, setDisconnected] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")));
    if (user) {
      setConnected(true);
      setDisconnected(false);
    } else {
      setConnected(false);
      setDisconnected(true);
    }
  }, [user]);

  return (
    <div className="row mb-5">
      <header>
        <Navbar
          fixed="top"
          bg="dark"
          data-bs-theme="dark"
          expand="lg"
          className="bg-body-tertiary"
        >
          <Container fluid>
            {disconnected && (
              <Navbar.Brand>
                <img
                  src="src\components\img\logo.png"
                  style={{
                    width: "50px",
                  }}
                />
              </Navbar.Brand>
            )}
            {connected && (
              <Navbar.Brand>
                <img
                  src="src\components\img\logo.png"
                  style={{
                    width: "50px",
                  }}
                />
                | Welcome <span className="colorBisque">{user}</span>!
              </Navbar.Brand>
            )}

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              {connected && (
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Navbar.Brand>
                    <Link to="/"> Home</Link>
                  </Navbar.Brand>
                  <NavDropdown
                    title="Your Empire"
                    id="navbarScrollingDropdown1"
                  >
                    <NavDropdown.Item>
                      <Link to="/extendyourempire">
                        <span className="orbitron4">🔭 Extend Your Empire</span>
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}
              <Nav className="me-auto my-5 my-lg-0">
                <p className="orbitron ">{props.name}</p>
              </Nav>
              {connected && (
                <Nav
                  className="ms-auto me-3 my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <NavDropdown
                    as="start"
                    key="start"
                    drop="start"
                    variant="secondary"
                    title={UserMenu}
                    id="navbarScrollingDropdown2"
                  >
                    <NavDropdown.Item>
                      <Link to="/editprofile">Edit profile</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/disconnect">
                        <span className="colorRed">
                          <strong>Logout</strong>
                        </span>
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}
              {disconnected && (
                <Navbar.Collapse>
                  <Nav.Link>
                    <Link to="/register">
                      <span className="colorRed">Register</span>
                    </Link>
                  </Nav.Link>
                </Navbar.Collapse>
              )}
              {disconnected && (
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link>
                    <Link to="/login">
                      <span className="colorBisque">Login</span>
                    </Link>
                  </Nav.Link>
                </Navbar.Collapse>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
