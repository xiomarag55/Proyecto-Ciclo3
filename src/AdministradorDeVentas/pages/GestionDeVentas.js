import { useState } from "react"
import useFormulario from "./hooks/useFormulario";

import './assets/css/ventas.css';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

import DataTable from "react-data-table-component";

import { columnasVentas } from "./data/data";

import { Button, Navbar, Nav, Container, Form, FormGroup, Modal, Row, Col } from 'react-bootstrap';

const GestionDeVentas = () => {
    const [ventas, setVentas] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    const [formulario, handleChange, reset] = useFormulario({
        id: '',
        producto: '',
        unidades: '',
        precioUnitario: '',
        valorTotal: '',
        fecha: '',
        identificacion: '',
        comprador: '',
        vendedor: ''
    })

    const submit = e => {
        e.preventDefault()
        setVentas([
            ...ventas,
            formulario
        ])
        reset()
    }

    const open = e => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    const handleModal = () => {
        setIsOpen(false)
    }
    return (
        <>
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

            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={20}>
                        <Modal show={isOpen} onHide={handleModal}>
                            <Modal.Header closeButton>
                                Agregue la venta
                            </Modal.Header>
                            <Modal.Body>
                                <FormGroup>
                                    <span hidden name="fecha" value={formulario.fecha = new Date().toDateString()} />
                                    <span name="id" value={formulario.id = ventas.length + 1} />
                                    <Form.Label >Nombre del comprador:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="comprador"
                                        value={formulario.comprador}
                                        onChange={handleChange} />
                                    <Form.Label >Documento de identificación:</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="identificacion"
                                        value={formulario.identificacion}
                                        onChange={handleChange} />
                                    <Form.Label >Producto:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="producto"
                                        value={formulario.producto}
                                        onChange={handleChange} />
                                    <Form.Label >Unidades:</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="unidades"
                                        value={formulario.unidades}
                                        onChange={handleChange} />
                                    <Form.Label >Precio unitario:</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="precioUnitario"
                                        value={formulario.precioUnitario}
                                        onChange={handleChange} />
                                    <Form.Label >Valor total:</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="valorTotal"
                                        value={formulario.valorTotal = formulario.unidades * formulario.precioUnitario}
                                        onChange={handleChange} />
                                    <Form.Label >Vendedor:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="vendedor"
                                        value={formulario.vendedor}
                                        onChange={handleChange} />
                                    {/* <span hidden value={formulario.actions = `${<div><Button>Edit</Button><Button>Delete</Button></div>}`} /> */}
                                </FormGroup>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={submit}>Aceptar</Button>
                                <Button onClick={handleModal}>Cancelar</Button>
                            </Modal.Footer>
                        </Modal>
                        <Button className="btn btn-primary me-md-2" size="lg" onClick={open}><AddCircleOutline />Agregar venta</Button>

                        <DataTable
                            columns={columnasVentas}
                            data={ventas}
                            title="Gestor de Ventas"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default GestionDeVentas;