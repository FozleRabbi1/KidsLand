import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthContextProvider";
import useAdmin from "../../HooksFile/DashBoardHooks/useAdmin";

// https://kids-land-server-two.vercel.app/
const AdminRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin();

    console.log(user)
    // console.log(isAdmin)

    if (loading || adminLoading) {
        <p className="">loading...................</p>
        return
    }
    else if (!user || !isAdmin.admin) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    else {
        return children;
    }
};

export default AdminRoute;

