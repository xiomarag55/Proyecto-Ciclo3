

import { useState, useMemo } from "react"

import useFormulario from "./hooks/useFormulario";

import './assets/css/ventas.css';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

import DataTable from "react-data-table-component";

import { columnasVentas } from "./data/data";

import { Button, Navbar, Nav, Container, Form, FormGroup, Modal, Row, Col } from 'react-bootstrap';
import { TextField } from "@material-ui/core";

const GestionDeVentas = () => {
    const [ventas, setVentas] = useState([])
    const [isOpen, setIsOpen] = useState(false);


    const [filterText, setFilterText] = useState('');

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

    const FilterComponent = ({ filterText, onFilter, onClear }) => (
        <>
            <input
                id="search"
                type="text"
                placeholder="Filter By Name"
                aria-label="Search Input"
                value={filterText}
                onChange={onFilter}
            />
            <button type="button" onClick={onClear}>
                X
            </button>
        </>
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                //setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText]);

    const filteredItems = ventas.filter(
        item => item.comprador && item.comprador.toLowerCase().includes(filterText.toLowerCase()),
    );

    const actionsMemo = useMemo(() => <Button onClick={open}><AddCircleOutline />Agregar Venta</Button>, []);

    return (
        <>
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
                                </FormGroup>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={submit}>Aceptar</Button>
                                <Button onClick={handleModal}>Cancelar</Button>
                            </Modal.Footer>
                        </Modal>

                        <DataTable
                            columns={columnasVentas}
                            data={filteredItems}
                            title="Gestor de Ventas"
                            subHeader
                            subHeaderComponent={subHeaderComponentMemo}
                            actions={actionsMemo}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default GestionDeVentas;