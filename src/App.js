import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import Menu from './Menu';
import BlogPost from './BlogPost';
//rutas
//* /#/
//* /#/blog
//* /#/profile
//* /#/lalala -> not found

function App() {
  return (
    <>
      <HashRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} /> {/* ruta dinamica */}
          <Route path="*" element={<h1>Not found</h1>} /> {/*toma las demas rutas que no enten contenidas en Routes*/}
        </Routes>
      </HashRouter>
    </>
  )
}


export default App
