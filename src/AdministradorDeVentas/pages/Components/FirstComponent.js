import React from "react";

class FirstComponent extends React.Component {
    render() {
        let receta = {
            nombre: 'Piza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido'],
            calorias: 400
        }; 
        return (
            <div className="mi-componente">
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorias: ' + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);
                            return(
                                <li>
                                    {ingrediente}
                                </li>

                            )

                        })
                    }
                </ol>
                <hr />

                <React.Fragment>
                    <h1>Creando mi primer componente</h1>
                    <h2>Prueba</h2>
                    <hr />
                </React.Fragment>
            </div>
        );
    }
}
export default FirstComponent;
