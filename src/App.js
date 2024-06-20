import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import BlogPage from './pages/BlogPage';
import Menu from './components/Menu';
import BlogPost from './components/BlogPost';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import {AuthProvider, AuthRouter} from './auth/auth'

//rutas
//* /#/
//* /#/blog
//* /#/profile
//* /#/lalala -> not found

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/profile" 
              element={ 
                <AuthRouter>
                  <ProfilePage />
                </AuthRouter>
                } 
            />
            <Route path="/blog" element={<BlogPage />} >
              <Route path=":slug" element={<BlogPost />} /> {/* ruta dinamica */}
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/logout"
              element={ 
                <AuthRouter>
                  <LogoutPage />
                </AuthRouter>
                } 
            />
            <Route path="*" element={<h1>Not found</h1>} /> {/*toma las demas rutas que no enten contenidas en Routes*/}
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}


export default App
