import React from 'react';
import { useAuth } from './auth';

const ProfilePage = () => {
    const auth = useAuth()
    return (
        <h1>{`Bienvenido ${auth.user.username}`}</h1>
    );
}

export default ProfilePage;
