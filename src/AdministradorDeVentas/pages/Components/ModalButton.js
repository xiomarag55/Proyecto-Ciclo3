import React from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import { FormGroup } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';


class ModalButton extends React.Component {
    constructor() {
        super()
        this.state = {
            showModal: false
        }
    }
    handleModal() {
        this.setState({ showModal: !this.state.showModal })
    }
    render() {
        return (
            <div >
            <Button variant="primary"  onClick={() => this.handleModal()}><EditIcon />Edit</Button>
            <Modal show={this.state.showModal} onHide={() => this.handleModal()}>
                <Modal.Header closeButton>
                   Editar información
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <Form.Label for="name">Nombre del comprador:</Form.Label>
                        <Form.Control type="text" />
                        <Form.Label for="documento">Documento de identificación:</Form.Label>
                        <Form.Control type="number" />
                        <Form.Label for="documento">Producto:</Form.Label>
                        <Form.Select>
                            <option>Chocolate blanco</option>
                            <option>Chocolate negro</option>
                        </Form.Select>
                        <Form.Label for="documento">Unidades:</Form.Label>
                        <Form.Control type="number"  />
                        <Form.Label for="documento">Precio unitario:</Form.Label>
                        <Form.Control type="number"  />
                        <Form.Label for="documento">Valor total:</Form.Label>
                        <Form.Control type="number" />
                        <Form.Label for="documento">Vendedor:</Form.Label>
                        <Form.Control type="text"  />
                    </FormGroup>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button>Aceptar</Button>
                    <Button onClick={() => this.handleModal()}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
        )
    }
}

export default ModalButton;