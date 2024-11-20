import React, { Children } from 'react'

import { Navigate,Outlet, useLocation } from 'react-router-dom';

function ProtectedRoutes() {
    const isLoggedIn = false;
    const location = useLocation();
    
    if (!isLoggedIn) {
        // Redirect to the login page and pass the current location in the state
        // so it can be accessed on the login page after successful authentication
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    return <Outlet />;
    
}

export default ProtectedRoutes
