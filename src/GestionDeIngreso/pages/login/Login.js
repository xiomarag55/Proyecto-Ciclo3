import React from 'react';
import "./Login.css";
import ChocoApp2 from './ChocoApp2.png';
import fondo from './fondo.png';
import {GoogleLogin} from 'react-google-login';


const loginForm=()=>{
    return (
        <form>
            <div class="contenedor">
                <div class="centered">
                    <img src={ChocoApp2}/>
                </div>
                <div class="ingreso">
                    <GoogleLogin
                        clientId='23199630294-vhvoq6u3t3fh31oa1on95ionv308n62v.apps.googleusercontent.com'
                        buttonText="Iniciar sesión"
                        onSuccess={login}
                        onFailure={loginError}
                        cookiePolicy={"single-host-origin"}
                    />
                </div>
                
                <div className="contenedor2">
                    
                    <div class="back">
                        <img src={fondo}/>
                    </div>
                </div>
                
            </div>    
        </form>
    )
}
const loginError=()=>{

}
const login=()=>{
    

}
export default loginForm;