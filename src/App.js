import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import BlogPage from './BlogPage';
import Menu from './Menu';
import BlogPost from './BlogPost';
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';
import {AuthProvider} from './auth'

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
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/blog" element={<BlogPage />} >
              <Route path=":slug" element={<BlogPost />} /> {/* ruta dinamica */}
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="*" element={<h1>Not found</h1>} /> {/*toma las demas rutas que no enten contenidas en Routes*/}
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}


export default App
