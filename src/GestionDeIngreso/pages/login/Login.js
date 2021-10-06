import React from "react";
import Button from 'react-bootstrap/Button'
import ChocoApp from './ChocoApp.png'
import log from './log.png'
import './Login.css'
const loginForm=()=>{
    return(
        <form>
            <div className='logoApp'>
             <img src={ChocoApp}  />
            </div>       
            <div className='form-inner'>
                <div className='logoapp'>
                    <img src={log}  />
                </div>
                <div className='form-group'>
                    <label htmlFor='label'> E-mail  </label>
                    <input classname="input" type='email' placeholder='Ingrese su correo electrónico'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='label'> Contraseña</label>
                    <input className="input" type='password' placeholder='Ingrese su contraseña'/>
                </div>              
                <div className="form-group">
                <label htmlFor='label'></label>
                <Button variant="primary" type="button">Ingresar</Button>{' '}
                <Button variant="primary" type="button">Crear cuenta</Button>{' '} 
                </div> 
            </div>
        </form>
    )
}
export default loginForm;