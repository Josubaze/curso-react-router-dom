import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Menu from './Menu';
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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<h1>Not found</h1>} /> // toma las demas rutas que no enten contenidas en Routes
        </Routes>
      </HashRouter>
    </>
  )
}


export default App
