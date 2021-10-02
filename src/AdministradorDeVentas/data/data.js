import { Button} from 'react-bootstrap';
export const columnasVentas = [
    {
        name: 'Referencia',
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
        name: 'Valor Total',
        selector: 'valorTotal',
        sortable: true
    },
    {
        name: 'Fecha',
        selector: 'fecha',
        sortable: true
    },
    {
        name: 'Identificacion',
        selector: 'identificacion',
        sortable: true
    },
    {
        name: 'Comprador',
        selector: 'comprador',
        sortable: true
    },
    {
        name: 'Vendedor',
        selector: 'vendedor',
        sortable: true
    },
    {
        name: 'Actions',
        width: 300, 
        button: true,
		cell: () => <div><Button id="edit">Edit</Button><Button>Delete</Button></div>,
    }
];