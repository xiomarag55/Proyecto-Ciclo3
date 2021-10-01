import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";

class DataTableComponent extends React.Component {
    render() {
        return (
            <div style={{ maxWidth: "100%" }}>
                <MaterialTable
                    columns={[
                        { title: "ID", field: "id", type: "numeric" },
                        { title: "Unidades", field: "unidades", type: "numeric" },
                        { title: "Producto", field: "producto" },
                        { title: "Comprador", field: "comprador" },
                        { title: "Precio de venta", field: "precioVenta" },
                        { title: "Precio de Compra", field: "precioCompra" },
                        { title: "Status", field: "status" },
                        { title: "Editar", field: "editar" },
                        { title: "Eliminar", field: "eliminar" },

                    ]}
                    data={[
                        {id:'', unidades:'', producto:'', comprador:'', precioVenta:'', precioCompra:'', status:'',editar:'', eliminar:''},
                        {id:'', unidades:'', producto:'', comprador:'', precioVenta:'', precioCompra:'', status:'',editar:'', eliminar:''},
                        {id:'', unidades:'', producto:'', comprador:'', precioVenta:'', precioCompra:'', status:'',editar:'', eliminar:''},
                        
                    ]}
                    title="Tabla Gestión de Ventas"
                />
            </div>
        );
    }
}

export default DataTableComponent;