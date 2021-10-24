import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        
        history.replace('/07-heroes-app/login');
        dispatch({
            type: types.logout
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ps-2 pe-2">
            
            <Link 
                className="navbar-brand" 
                to="/07-heroes-app"
            >
                Heroes App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/07-heroes-app/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/07-heroes-app/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName='active'
                        className='nav-item nav-link'
                        exact
                        to='/07-heroes-app/search'
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <span className='nav-item nav-link text-info' id='username'>
                        {user.name}
                    </span>
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}