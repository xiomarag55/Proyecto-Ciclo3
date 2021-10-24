import React from "react";
import "../styles/Login.css";
import ChocoApp2 from "../img/ChocoApp2.png";
import fondo from "../img/fondo.png";
import GoogleLogin from "react-google-login";

const loginForm = ({ login, logout }) => {
  return (
    <>
      <form>
        <div className="contenedor">
          <div className="centered">
            <img alt="imagen1" src={ChocoApp2} />
          </div>
          <div className="ingreso">
            
         
            <GoogleLogin className="googlebutton"
              clientId="23199630294-vhvoq6u3t3fh31oa1on95ionv308n62v.apps.googleusercontent.com"
              buttonText="Iniciar sesión"
              onSuccess={login}
              onFailure={logout}
              cookiePolicy={"single_host_origin"}
            />
         
          </div>

          <div className="contenedor2">
            <div class="back">
              <img alt="fondo" src={fondo} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default loginForm;
