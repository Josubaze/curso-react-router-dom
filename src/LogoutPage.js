import React from 'react';
import { useAuth } from './auth';

const LogoutPage = () => {
    const auth = useAuth();
    const handleLogout = (e) => {
        e.preventDefault();
        auth.logout();
    };
    return (
        <>
        <h1>Logout</h1>
        <form onSubmit={handleLogout}>
            <label>Seguro que desea salir?</label>
            <button type="submit">Salir</button>
        </form>
    </>
    );
}

export default LogoutPage;
