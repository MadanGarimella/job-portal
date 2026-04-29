import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";

export default function ProtectedRoute({ children, role }) {
    const token = localStorage.getItem("token");
    const userRole = getUserRole();

    if(!token) {
        return <Naigate to="/login" replace />;
    }

    if (role && userRole != role) {
        return <Navigate to="/" />;
    }

    return children;
}
