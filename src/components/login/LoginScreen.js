import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    const {dispatch} = useContext(AuthContext);
    const handleLogin = () => {
        
        const lastPath = localStorage.getItem('lastPath') || '/';
        // history.push('/');
        history.replace(lastPath); //Lo hacemos con replace para que no exista el login para volver atrás
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Jordi'
            }
        })

        
    }

    return (
        <div className='container mt-5'>
            <h1 id='login'>Login</h1>
            <hr />

            <button 
                className='btn btn-outline-info'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
