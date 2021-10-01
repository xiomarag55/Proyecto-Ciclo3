import React from "react";
import './src/assets/css/App.css';
import { Button, Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';

class navComponent extends React.Component {



    render() {
        return (
            <div>
                <Navbar className="Navbar">
        <Container fluid>
          <Navbar.Brand className="text-white" href="#">ChocoApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link className="text-white" href="#action1">Home</Nav.Link>
              <Nav.Link className="text-white" href="#action2">Productos</Nav.Link>

              <Nav.Link className="text-white" href="#" >
                Usuarios
              </Nav.Link>
            </Nav>

            <Button variant="outline-info">Logout</Button>

          </Navbar.Collapse>
        </Container>
      </Navbar>

            </div>
        );
    }
}

export default navComponent;