import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";



const ProtectedRoutes = () => {

    const {user} = useContext(UserContext)

    const useAuth = () => {
    return user && user.isLoggedIn;
    };

    const isAuth = useAuth();

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;