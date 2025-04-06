import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../utils/Context/AuthContext";

const ProtectedRoute = ( { needToBeAuthenticated } : { needToBeAuthenticated: boolean } ) => {
  const { isAuthenticated } = useAuth();
  return needToBeAuthenticated ?
    isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
    :
    isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />
};

export default ProtectedRoute;
