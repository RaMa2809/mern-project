import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import LoggedInUser from "../views/LoggedInUser";

const PrivateRoutes = () => {
    const isLoggedIn = false /*useSelector((state: any) => state.auth.isLoggedIn);*/
    return isLoggedIn ? <LoggedInUser/> : <Navigate to="/Guest/login" /> ;
};

export default PrivateRoutes;