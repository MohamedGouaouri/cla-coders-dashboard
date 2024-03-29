/* eslint-disable react/prop-types */
import {Navigate, useLocation, Outlet} from "react-router-dom"
import useAuth from "../hooks/useAuth";
import Layout from "./Layout";

const ProtectedRoute = () => {
    const {isAuthenticated} = useAuth()
    let location = useLocation();
    console.log(isAuthenticated)


    if(!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return <Layout><Outlet /></Layout>

};

export default ProtectedRoute;