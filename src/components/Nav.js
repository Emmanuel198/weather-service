import { Dropdown, Button } from 'react-bootstrap-v5';
import React, { useContext } from 'react';
import UserContext from '../providers/UserContext';

const Nav = () => {

    const { user, setUser } = useContext(UserContext);


    const handlerInputName = (e) => {
        setUser(prevState => ({
            ...prevState,
            userName: e.target.value
        }))
    }

    const handlerInputPassword = (e) => {
        setUser(prevState => ({
            ...prevState,
            userPassword: e.target.value
        }))
    }
    return (
        <div className="App-header">
            <div style={{ paddingLeft: '1rem', paddingBottom:'1rem' }}>
                Galicia Seguros
            </div>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='dropdown'>
                    INICIAR SESION
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="white" xmlns="http://www.w3.org/2000/svg" style={{paddingLeft:'10px', paddingTop:'4px'}} >
                        <path d="M10.8284 7.82843C11.5786 7.07828 12 6.06087 12 5C12 3.93913 11.5786 2.92172 10.8284 2.17157C10.0783 1.42143 9.06087 1 8 1C6.93913 1 5.92172 1.42143 5.17157 2.17157C4.42143 2.92172 4 3.93913 4 5C4 6.06087 4.42143 7.07828 5.17157 7.82843C5.92172 8.57857 6.93913 9 8 9C9.06087 9 10.0783 8.57857 10.8284 7.82843Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.05025 14.0503C4.36301 12.7375 6.14348 12 8 12C9.85652 12 11.637 12.7375 12.9497 14.0503C14.2625 15.363 15 17.1435 15 19H1C1 17.1435 1.7375 15.363 3.05025 14.0503Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu  >
                    <form className="dropdown-form" style={{paddingLeft:'3rem'}}>
                        <label for="Email" style={{ color: 'black', justifyContent: 'left', alignItems: 'flex-start' }}>Usuario</label>
                        <div className="mb-3">
                            <input type="email" className="form-control" style={{height:'2rem', width:'90%', fontSize:'15px'}} id="Email" placeholder="email@example.com" onChange={handlerInputName} />
                        </div>
                        <label for="Password" className="form-label" style={{ color: 'black' }}>Contraseña</label>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="Password" style={{height:'2rem', width:'90%', fontSize:'22px'}} placeholder="Password" onChange={handlerInputPassword} />
                        </div>
                        <Button className='button-login' type="submit">INICIAR SESION</Button>
                    </form>
                    <div class="dropdown-divider"></div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
export default Nav;