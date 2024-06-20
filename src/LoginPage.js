import React from 'react';
import { useAuth } from './auth';

const LoginPage = () => {
    const auth = useAuth();
    const [username, setUsername] = React.useState('');
    
    const handleLogin = (e) => {
      e.preventDefault();
      auth.login({ username });
    };
 
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    value={username} 
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </>
    );
}

export default LoginPage;
