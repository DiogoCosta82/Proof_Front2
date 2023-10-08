import { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/style/tbord.css";

function Header_User() {
  const [connected, setConnected] = useState(false);
  const [disconnected, setDisconnected] = useState(true);
  const [enterprise, setEnterprise] = useState();

  useEffect(() => {
    setEnterprise(sessionStorage.getItem("enterprise"));
    const token = sessionStorage.getItem("token");

    if (token) {
      setConnected(true);
      setDisconnected(false);
    } else {
      setConnected(false);
      setDisconnected(true);
    }
  }, [enterprise]);

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
                    width: "40px",
                  }}
                />
              </Navbar.Brand>
            )}
            {connected && (
              <Navbar.Brand>
                <img
                  src="src\components\img\logo.png"
                  style={{
                    width: "40px",
                    marginRight: "15px",
                  }}
                />
                | Bienvenue <span className="colorBisque2">{enterprise} </span>|
              </Navbar.Brand>
            )}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              {connected && (
                <Nav
                  className="ms me-3 my-4 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <NavDropdown title="Menu" id="nav-dropdown" alignRight>
                    <NavDropdown.Item>
                      <Link to="/tableau-bord">Accueil</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/edit">Modifier profil</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/">Déconnecter</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}
              {disconnected && (
                <Navbar.Collapse className="justify-content">
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

export default Header_User;
