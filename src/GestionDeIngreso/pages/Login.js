import React from "react";
import "../styles/Login.css";
import ChocoApp2 from "../img/ChocoApp2.png";
import fondo from "../img/fondo.png";
import GoogleLogin from "react-google-login";

import loginUsuario from "./ValidationLogin";

const loginForm = () => {
  const login = (res) => {
    loginUsuario(res);
  };
  const loginError = (res) => {
    window.location.href = "/";
  };
  return (
    <>
      <form>
        <div class="contenedor">
          <div class="centered">
            <img src={ChocoApp2} />
          </div>
          <div class="ingreso">
            <GoogleLogin
              clientId="23199630294-vhvoq6u3t3fh31oa1on95ionv308n62v.apps.googleusercontent.com"
              buttonText="Iniciar sesión"
              onSuccess={login}
              onFailure={loginError}
              cookiePolicy={"single_host_origin"}
            />
          </div>

          <div className="contenedor2">
            <div class="back">
              <img src={fondo} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default loginForm;