import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const PublicRoute = () => {
    const isLoggedIn = false /*useSelector((state: any) => state.auth.isLoggedIn);*/
    const isAuthenticated = isLoggedIn || localStorage.getItem('token');
    console.log('logged in', !!isAuthenticated)
    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;