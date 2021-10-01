<<<<<<< HEAD
import logo from './assets/images/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import{ 
=======
import './assets/css/App.css';
import {
>>>>>>> 7f97e58589f3fe9fc19a6e4b13435283cd4501f1
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Ingreso from "./GestionDeIngreso/pages/Ingreso"
import GestionDeProductos from "./AdministradorDeProductos/pages/GestionDeProductos"
import GestionDeVentas from "./AdministradorDeVentas/pages/GestionDeVentas"
import GestionDeUsuarios from "./GestionDeUsuarios/pages/GestionDeUsuarios"
import Header from './Shared/Header';

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Ingreso />
        </Route>
        <Route path="/administradordeproductos" exact>
          <GestionDeProductos />
          </Route>
          <Route path="/administradordeventas" exact>
          <GestionDeVentas />
          </Route>
          <Route path="/gestiondeusuarios" exact>
          <GestionDeUsuarios />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
=======
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
>>>>>>> 7f97e58589f3fe9fc19a6e4b13435283cd4501f1
  );
}

export default App;