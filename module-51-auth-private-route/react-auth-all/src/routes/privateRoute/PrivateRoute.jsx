import PropTypes from "prop-types"
import { useContext } from "react";
import { AuthContext } from "../../provider/authProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading)
        return <div className="flex justify-center h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    if (user)
        return children;

    return <Navigate to={"/login"}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}


export default PrivateRoute;