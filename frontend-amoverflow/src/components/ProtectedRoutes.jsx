import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
    // localStorage.setItem('useToken',)
const ProtectedRoutes = () => {
    return true ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes