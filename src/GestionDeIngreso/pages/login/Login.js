import React from "react";
import Button from 'react-bootstrap/Button'
import ChocoApp from './ChocoApp.png'
import log from './log.png'
import './Login.css'
function loginForm(){
    return(
        <form>
            <div className='logoApp'>
             <img src={ChocoApp}  />
            </div>       
            <div className='form-inner'>
                <div className='logoapp'>
                    <img src={log}  />
                </div>
                <h1></h1>
                <div className='form-group'>
                    <label htmlFor='email'> E-mail  </label>
                    <br/> 
                    <input type='email' name='email' id='email' placeholder='Ingrese su correo electronico'/>
                </div>
                <h3> </h3>
                <div className='form-group'>
                    <label htmlFor='password'> Contraseña</label>
                    <input type='password' name='password' id='password' 
                    placeholder='Ingrese su contraseña'/>
                </div>  
                <h4></h4>              
                <Button variant="primary" id='sig'>Ingresar</Button>{' '}
                <Button variant="secondary" id='can'>Crear cuenta</Button>{' '}  
            </div>
        </form>
    )
}
export default loginForm;