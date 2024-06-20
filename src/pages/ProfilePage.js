import React from 'react';
import { useAuth } from '../auth/auth';

const ProfilePage = () => {
    const auth = useAuth()
    return (
        <>
            <h1>Perfil</h1>
            <h1>{`Bienvenido ${auth.user.username}`}</h1>
        </>
    );
}

export default ProfilePage;
