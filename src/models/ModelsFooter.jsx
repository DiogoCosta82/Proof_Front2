import { Container, Navbar } from "react-bootstrap";
import "../Components/style/login.css";

function Footer() {
  return (
    <Container>
      <Navbar
        fixed="bottom"
        bg="dark"
        data-bs-theme="dark"
        expand="sm"
        className="justify-content-center"
      >
        <Navbar.Brand className="footer">
          ©2023 Proof Agence - Tous droits réservés{" "}
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default Footer;
