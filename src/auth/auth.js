import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();
const adminList = ['Iris', 'RetaxMaster', 'Freddier'];
function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = ({ username }) => {
    const isAdmin = adminList.find(admin => admin === username)
    setUser({ username, isAdmin });
    navigate('/profile');
  };
  
  const logout = () => {
    setUser(null);
    navigate('/');
  };
  
  const auth = { user, login, logout };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

function AuthRouter(props) {
  const auth = useAuth();
  if(!auth.user){
    return <Navigate to="/login"/>
  }
  return props.children;
}

export {
  AuthProvider,
  AuthRouter,
  useAuth,
};