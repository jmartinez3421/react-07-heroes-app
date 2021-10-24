import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import {LoginScreen} from '../components/login/LoginScreen';
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const {user} = useContext(AuthContext);

    return (
        <Router>
            <Switch>
                <PublicRoute 
                    path='/07-heroes-app/login' 
                    component={LoginScreen} 
                    isAuthenticated={user.logged} 
                />

                <PrivateRoute
                    isAuthenticated={user.logged} 
                    path='/07-heroes-app' 
                    component={DashboardRoutes} 
                />
            </Switch>
        </Router>
    )
}