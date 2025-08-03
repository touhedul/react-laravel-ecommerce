import { useContext } from "react"
import { AdminAuthContext } from "../../components/context/AdminAuthContext";
import { Navigate } from "react-router-dom";

export const AdminRequireAuth = ({ children }) => {
    const { admin } = useContext(AdminAuthContext);

    if (!admin) {
        return <Navigate to="/admin/login" />

    }
    return children;
}