import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";



const ProtectedRoutes = () => {

    //state user
    const {user} = useContext(UserContext)

    //check if user exists in state and isloggedin
    const useAuth = () => {
    return user && user.isLoggedIn;
    };
    const isAuth = useAuth();

    //render conditionaly
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;