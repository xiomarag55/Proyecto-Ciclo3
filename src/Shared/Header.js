import { Button, Navbar, Nav, Container } from "react-bootstrap";

const Header = ({ logout, role }) => {
  return (
    <div>
      <Navbar className="Navbar">
        <Container fluid>
          <Navbar.Brand className="text-white">
            ChocoApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link className="text-white" href="/ventas">
                Gestion Ventas
              </Nav.Link>
              {role === "administrador" && (
                <>
                  <Nav.Link className="text-white" href="/productos">
                    Administrador de Productos
                  </Nav.Link>
                  <Nav.Link className="text-white" href="/usuarios">
                    Administrador de Usuarios
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Button variant="outline-info" onClick={logout}>
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
