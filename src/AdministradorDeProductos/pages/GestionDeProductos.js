import MaterialTable from "material-table";
import React from "react";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import callApi from "../api";
import { useEffect } from "react";
import Header from "../../Shared/Header";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function GestionDeProductos(props) {
  const { useState } = React;
  const [columns] = useState([
    {
      title: "ID",
      field: "_id",
      //hidden: true,
      editable: "never",
    },
    {
      title: "Producto",
      field: "producto",
    },
    {
      title: "Unidades",
      field: "unidades",
    },
    {
      title: "Precio Unitario",
      field: "precioUnitario",
    },
    {
      title: "Valor Total",
      field: "valorTotal",
    },
    {
      title: "Fecha",
      field: "fecha",
    },
    {
      title: "Estado",
      field: "estado",
    },
  ]);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await callApi();
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <MaterialTable
        title="Listas de Productos"
        columns={columns}
        data={data}
        icons={tableIcons}
        options={{ actionsColumnIndex: -1 }}
        localization={{
          pagination: {
            labelRowsSelect: "filas",
          },
          toolbar: {
            searchTooltip: "Buscar",
            searchPlaceholder: "Buscar",
          },
          header: {
            actions: "Acciones",
          },
          body: {
            addTooltip: "Agregar Producto",
            deleteTooltip: "Eliminar Producto",
            editTooltip: "Editar Producto",
            editRow: {
              deleteText: "¿Estás seguro de eliminar este producto?",
              cancelTooltip: "Cancelar",
              saveTooltip: "Guardar",
            },
            emptyDataSourceMessage: "No hay registros que mostrar.",
            filterRow: {
              filterTooltip: "Filter",
            },
          },
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              async function postData(url = "", dataALL = { newData }) {
                const response = await fetch(url, {
                  method: "POST",
                  mode: "cors",
                  cache: "no-cache",
                  credentials: "same-origin",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  redirect: "follow",
                  referrerPolicy: "no-referrer",
                  body: JSON.stringify(newData),
                });
                return response.json();
              }

              postData("http://localhost:3002/api/products").then((dataALL) => {
                setData([...data, newData]);
                resolve();
              });
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              async function postData(url = "", dataALL = { newData }) {
                const response = await fetch(url, {
                  method: "PUT",
                  mode: "cors",
                  cache: "no-cache",
                  credentials: "same-origin",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  redirect: "follow",
                  referrerPolicy: "no-referrer",
                  body: JSON.stringify(newData),
                });
                return response.json();
              }
              postData(
                "http://localhost:3002/api/products/" + newData._id
              ).then((dataALL) => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                resolve();
              });
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              async function postData(url = "", dataALL = { oldData }) {
                const response = await fetch(url, {
                  method: "DELETE",
                  mode: "cors",
                  cache: "no-cache",
                  credentials: "same-origin",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  redirect: "follow",
                  referrerPolicy: "no-referrer",
                });
                return response.json();
              }
              postData(
                "http://localhost:3002/api/products/" + oldData._id
              ).then((dataALL) => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              });
            }),
        }}
      />
    </>
  );
}
export default GestionDeProductos;
