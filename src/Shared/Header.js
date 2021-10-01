import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';


const Header = () => {
    return(
      <div>
      <Navbar className="Navbar">
   <Container fluid>
     <Navbar.Brand className="text-white" href="#">ChocoApp</Navbar.Brand>
     <Navbar.Toggle aria-controls="navbarScroll" />
     <Navbar.Collapse id="navbarScroll">
       <Nav className="me-auto my-2 my-lg-0">
         <Nav.Link className="text-white" href="administradordeventas" >Administrador de Ventas</Nav.Link>
         <Nav.Link className="text-white" href="administradordeproductos" >Administrador de Productos</Nav.Link>

         <Nav.Link className="text-white" href="GestionDeUsuarios" >Administrador de Usuarios </Nav.Link>
       </Nav>

       <Button variant="outline-info">Logout</Button>

     </Navbar.Collapse>
   </Container>
 </Navbar>
 </div>
    )
}
export default Header;