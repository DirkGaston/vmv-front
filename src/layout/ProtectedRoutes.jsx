import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, requiredRoles }) => {
  const { role } = useContext(AuthContext);

  if (!role || (requiredRoles && !requiredRoles.includes(role))) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoutes;
