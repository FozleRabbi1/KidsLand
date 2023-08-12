import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthContextProvider";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    // console.log(loading)

    if (loading) {
        <p className="">loading...................</p>
        return
    }
    else if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    else {
        return children;
    }
};

export default PrivateRoute;

