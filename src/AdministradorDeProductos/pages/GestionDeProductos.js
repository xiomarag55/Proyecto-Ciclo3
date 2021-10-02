import { useState, useMemo } from "react"

import useFormulario from "../../Shared/hooks/useFormulario";

import { Button, Container, Form, FormGroup, Modal, Row, Col } from 'react-bootstrap';
import DataTable from "react-data-table-component";

import '../assets/css/productos.css';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

import { columnasProductos } from "../data/data";

const GestionDeProductos = () => {
    const [productos, setProductos] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    const [filterText, setFilterText] = useState('');

    const [formulario, handleChange, reset] = useFormulario({
        id: '',
        producto: '',
        unidades: '',
        precioUnitario: '',
        valorTotal: '',
        fecha: '',
        estado: ''
    })

    const submit = e => {
        e.preventDefault()
        setProductos([
            ...productos,
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
                placeholder="Filtrar por producto"
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
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText]);

    const filteredItems = productos.filter(
        item => item.producto && item.producto.toLowerCase().includes(filterText.toLowerCase()),
    );

    const actionsMemo = useMemo(() => <Button onClick={open}><AddCircleOutline />Agregar Producto</Button>, []);
    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={20}>
                        <Modal show={isOpen} onHide={handleModal}>
                            <Modal.Header closeButton>
                                Agregue el Producto
                            </Modal.Header>
                            <Modal.Body>
                                <FormGroup>
                                    <span hidden name="fecha" value={formulario.fecha = new Date().toDateString()} />
                                    <span name="id" value={formulario.id = productos.length + 1} />
                                    <Form.Label >Nombre del producto:</Form.Label>
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
                                    <Form.Label >Estado:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="estado"
                                        value={formulario.estado}
                                        onChange={handleChange} />
                                </FormGroup>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={submit}>Aceptar</Button>
                                <Button onClick={handleModal}>Cancelar</Button>
                            </Modal.Footer>
                        </Modal>

                        <DataTable
                            columns={columnasProductos}
                            data={filteredItems}
                            title="Gestor de Productos"
                            subHeader
                            subHeaderComponent={subHeaderComponentMemo}
                            actions={actionsMemo}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default GestionDeProductos;