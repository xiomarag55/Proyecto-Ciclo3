import { useState } from "react";

import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginForm from "./GestionDeIngreso/pages/Login";
import GestionDeProductos from "./AdministradorDeProductos/pages/GestionDeProductos";
import GestionDeVentas from "./AdministradorDeVentas/pages/GestionDeVentas";
import GestionDeUsuarios from "./GestionDeUsuarios/pages/GestionDeUsuarios";
import loginUsuario from "./GestionDeIngreso/pages/ValidationLogin";
import Header from "./Shared/Header";
import BooleanUtility from "./Utils/BooleanUtility";
import NotFound404 from "./Shared/pages/404";

function App() {
  const [isLogged, setIsLogged] = useState(
    BooleanUtility.parseBoolean(localStorage.getItem("isLogged"))
  );
  const [rol, setRol] = useState(localStorage.getItem("role"));

  const login = async (response) => {
    let [logged, role] = await loginUsuario(response);
    localStorage.setItem("isLogged", logged);
    localStorage.setItem("role", role);
    redirect(role);
    setRol(role);
    setIsLogged(logged);
  };

  const logout = () => {
    localStorage.setItem("isLogged", false);
    window.location.href = "/";
    setIsLogged(false);
  };

  const redirect = (role) => {
    if (role === "administrador") {
      window.location.href = "/usuarios";
    } else if (role === "vendedor") {
      window.location.href = "/ventas";
    } else {
      window.location.href = "/";
    }
  };

  return (
    <>
      {isLogged && (
        <>
          <Header logout={logout} role={rol} />
          <Switch>
            <Route exact path="/">
              <LoginForm />
            </Route>
            <Route exact path="/ventas">
              <GestionDeVentas />
            </Route>
            {rol === "administrador" && (
              <>
                <Route exact path="/productos">
                  <GestionDeProductos />
                </Route>
                <Route exact path="/usuarios">
                  <GestionDeUsuarios />
                </Route>
              </>
            )}
            <Route path="*">
              <NotFound404 />
            </Route>
          </Switch>
        </>
      )}
      {!isLogged && <LoginForm login={login} logout={logout} />}
    </>
  );
}

export default App;
