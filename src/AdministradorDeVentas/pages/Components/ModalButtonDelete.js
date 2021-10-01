import React from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import { FormGroup } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';


class ModalButtonDelete extends React.Component {
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
                <Button variant="primary" onClick={() => this.handleModal()}><EditIcon />Delete</Button>
                <Modal show={this.state.showModal} onHide={() => this.handleModal()}
                    size="sm" aria-labelledby="example-modal-sizes-title-sm">

                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Eliminar la venta
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¿Está seguro que desea eliminar la venta?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" >Aceptar</Button>
                        <Button onClick={() => this.handleModal()}>Cancelar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModalButtonDelete;