import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function ModalComponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Crear Usuario
            </Button>

            <Modal show={show} size="lg" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">Crear Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridIdentification">
                                <Form.Label>Identifiación</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Rol</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Elegir...</option>
                                    <option>Vendedor</option>
                                    <option>Administrador</option>
                                    <option>Ejecutivo</option>
                                    <option>operario</option>
                                    <option>Director</option>
                                    <option>Gerente comercial</option>
                                </Form.Select>
                            </Form.Group>
                        </Form.Group>
                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent;
