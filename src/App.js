import './assets/css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Ingreso from "./GestionDeIngreso/pages/Ingreso"
import GestionDeProducto from "./AdministradorDeProductos/pages/GestionDeProducto"
import GestionDeVentas from "./AdministradorDeVentas/pages/GestionDeVentas"
import Roles from "./GestionDeUsuarios/pages/Roles"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Ingreso />
          </Route>
          <Route path="/AdministradorDeProductos" exact>
            <GestionDeProducto />
          </Route>
          <Route path="/AdministradorDeVentas" exact>
            <GestionDeVentas />
          </Route>
          <Route path="/GestionDeUsuarios" exact>
            <Roles />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
