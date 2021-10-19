import { useState } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginForm from "./GestionDeIngreso/pages/Login";
import GestionDeProductos from "./AdministradorDeProductos/pages/GestionDeProductos";
import GestionDeVentas from "./AdministradorDeVentas/pages/GestionDeVentas";
import GestionDeUsuarios from "./GestionDeUsuarios/pages/GestionDeUsuarios";
import loginUsuario from "./GestionDeIngreso/pages/ValidationLogin";
import Header from "./Shared/Header";
import BooleanUtility from "./Utils/BooleanUtility";

function App() {
  /*
};*/
  const [isLogged, setIsLogged] = useState(
    BooleanUtility.parseBoolean(localStorage.getItem("isLogged"))
  );

  const login = async (response) => {
    let [logged, role] = await loginUsuario(response);
    localStorage.setItem("isLogged", logged);
    redirect(role);
    setIsLogged(logged);
  };

  const logout = () => {
    localStorage.setItem("isLogged", false);
    window.location.href = "/";
    setIsLogged(false);
  };

  const redirect = (role) => {
    if (role === "administrador") {
      window.location.href = "/gestiondeusuarios";
    } else if (role === "vendedor") {
      window.location.href = "/administradordeventas";
    } else {
      window.location.href = "/";
    }
  };

  return (
    <>
      {isLogged && (
        <>
          <Header logout={logout} />
          <Switch>
            <Route path="/" exact>
              <LoginForm />
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
        </>
      )}
      {!isLogged && <LoginForm login={login} logout={logout} />}
    </>
  );
}

export default App;
