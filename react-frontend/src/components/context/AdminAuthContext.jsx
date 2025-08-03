import { createContext, useState } from "react";

export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
    const adminInfo = localStorage.getItem('admin');
    const [admin, setAdmin] = useState(adminInfo);

    const login = (admin) => {
        setAdmin(admin);
    }

    const logout = () => {
        setAdmin(null);
        localStorage.removeItem('admin');
        localStorage.removeItem('token');
    }

    return <AdminAuthContext.Provider value={{ admin, login, logout }}>
        {children}
    </AdminAuthContext.Provider>
}