import React from "react";
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { FormGroup } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ModalButton from './ModalButton';
import ModalButtonDelete from './ModalButtonDelete';




class TableComponent extends React.Component {
    


    render() {
        return (
            <div>

                <Table striped bordered hover>
                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Unidades</th>
                            <th>Comprador</th>
                            <th>Descripción</th>
                            <th>Precio de venta</th>
                            <th>Precio de compra</th>
                            <th>Status</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><ModalButton/></td>
                            
                            <td><ModalButtonDelete /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><ModalButton/></td>
                            <td><ModalButtonDelete /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><ModalButton/></td>
                            <td><ModalButtonDelete /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><ModalButton/></td>
                            <td><ModalButtonDelete /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><ModalButton/></td>
                            <td><ModalButtonDelete /></td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        );
    }
}
export default TableComponent;