
import MaterialTable from 'material-table';
import React from 'react';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

// const columns = [
//     {
//         title: "Identificación",
//         field: "identification"
//     },
//     {
//         title: "Nombre",
//         field: "name"
//     },
//     {
//         title: "Rol",
//         field: "role"
//     },
//     {
//         title: "Estado",
//         field: "status"
//     },
// ];

// const data = [
//     {
//         id: 1,
//         identification: '123456',
//         name: 'Einer',
//         role: 'Vendedor',
//         status: 'Pendiente',
//     },
//     {
//         identification: '851222',
//         id: 2,
//         name: 'Jimmy',
//         role: 'Vendedor',
//         status: 'autorizado',
//     },
//     {
//         identification: '576867',
//         id: 3,
//         name: 'Karen B',
//         role: 'Administrador',
//         status: 'no autorizado',
//     },
//     {
//         identification: '879768',
//         id: 4,
//         name: 'Xiomara',
//         role: 'Vendedor',
//         status: 'autorizado',
//     },
//     {
//         identification: '687678',
//         id: 5,
//         name: 'Jhon',
//         role: 'Administrador',
//         status: 'Pendiente',
//     },
// ]

// function DataTableComponent() {
//     return (
//         <MaterialTable
//             icons={tableIcons}
//             columns={columns}
//             data={data}
//             title="Lista de Usuarios"

//             actions={[
//                 {
//                     icon: tableIcons.Edit,
//                     tooltip: "Editar Usuario",
//                     onClick: (event, RowData) => alert('Deseas Editar al usuario: ' + RowData.name)
//                 },
//                 {
//                     icon: tableIcons.Delete,
//                     tooltip: "Eliminar Usuario",
//                     onClick: (event, RowData) => alert('Deseas Eliminar al usuario: ' + RowData.name)
//                 },
//             ]

//             }
//             options={{
//                 actionsColumnIndex: -1,
//                 headerStyle: { fontSize: 20 }
//             }
//             }
//         />
//     );
// }
// export default DataTableComponent;
function DataTableComponent(props) {
    const { useState } = React;
    const [columns, setColumns] = useState([
        {
            title: 'Identificacion', field: 'identification',
            editComponent: props => (
                <input
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />
            )
        },
        { title: 'Nombre', field: 'name' },
        {
            title: 'Rol',
            field: 'role',
            lookup: { 1: 'Administrador', 2: 'Vendedor' },
        },
        {
            title: 'Estado',
            field: 'status',
            lookup: { 1: 'Autorizado', 2: 'No autorizado', 3: 'Pendiente' },
        },
    ]);

    const [data, setData] = useState([
        { identification: '123456', name: 'Einer', role: 2, status: 3 },
        { identification: '123456', name: 'Jimmy', role: 2, status: 1 },
        { identification: '123456', name: 'Karen B', role: 1, status: 2 },
        { identification: '123456', name: 'Xiomara', role: 2, status: 1 },
        { identification: '123456', name: 'Jhon', role: 1, status: 3 },
    ]);

    return (
        <MaterialTable
            title="Lista de Usuarios"
            columns={columns}
            data={data}
            icons={tableIcons}
            options={{ actionsColumnIndex: -1 }}
            localization={{
                pagination: {
                    labelRowsSelect: 'filas',
                },
                toolbar: {
                    searchTooltip: 'Buscar',
                    searchPlaceholder: 'Buscar',
                },
                header: {
                    actions: 'Acciones'
                },
                body: {
                    addTooltip: 'Agregar Usuario',
                    deleteTooltip: 'Eliminar Usuario',
                    editTooltip: 'Editar Usuario',
                    editRow: {
                        deleteText: '¿Estás seguro de eliminar este usuario?',
                        cancelTooltip: 'Cancelar',
                        saveTooltip: 'Guardar'
                    },
                    emptyDataSourceMessage: 'No hay registros que mostrar.',
                    filterRow: {
                        filterTooltip: 'Filter'
                    }
                }
            }}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            setData([...data, newData]);

                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            setData([...dataUpdate]);

                            resolve();
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);

                            resolve();
                        }, 1000)
                    }),
            }}
        />
    )
}
export default DataTableComponent;