import React from "react";
import { Button, Modal, Form} from 'react-bootstrap';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import { FormGroup } from "@material-ui/core";


class ButtonsComponent extends React.Component {
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
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button class="btn btn-primary me-md-2" size="lg" onClick={() => this.handleModal()}><AddCircleOutline />Agregar venta</Button>
                <Modal show={this.state.showModal} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton>
                        Agregue la venta
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
export default ButtonsComponent;