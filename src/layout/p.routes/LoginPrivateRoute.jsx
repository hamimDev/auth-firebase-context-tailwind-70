import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const LoginPrivateRoute = ({children}) => {

    const { user } = useContext(AuthContext);
    if(!user){
        return children;
    }

    return <Navigate to="/"></Navigate>
};

export default LoginPrivateRoute;