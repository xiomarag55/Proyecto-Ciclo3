import { Button} from 'react-bootstrap';
export const columnasProductos = [
    {
        name: 'Id',
        selector: 'id',
        sortable: true
    },
    {
        name: 'Producto',
        selector: 'producto',
        sortable: true
    },
    {
        name: 'Unidades',
        selector: 'unidades',
        sortable: true
    },
    {
        name: 'Precio Unitario',
        selector: 'precioUnitario',
        sortable: true
    },
    {
        name: 'Fecha',
        selector: 'fecha',
        sortable: true
    },
    {
        name: 'Estado',
        selector: 'estado',
        sortable: true
    },
    {
        name: 'Actions',
        width: 300, 
        button: true,
		cell: () => <div><Button id="edit">Edit</Button><Button>Delete</Button></div>,
    }
];