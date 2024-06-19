import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li> */}

                {/* NavLink: Este funciona exactamente igual que Link, incluso la propiedad 
                to="/" también se usa en este componente, pero nos permite cierta flexibilidad, 
                por ejemplo, cuando queramos darle una clase a nuestros componentes o estilos
                manuales nos permite que en nuestras propiedades className={} o style={} nos 
                permite devolver una función. */}

                {/* <li>
                    <NavLink 
                    to="/"
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "blue"
                    })}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to="/About"
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "blue"
                    })}
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to="/Contact"
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "blue"
                    })}
                    >
                        Contact
                    </NavLink>
                </li> */}

                {routes.map(route => (
                    <li>
                        <NavLink 
                        to={route.to}
                        style={({ isActive }) => ({
                            color: isActive? "red" : "blue"
                        })}
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}
        
            </ul>
        </nav>
    );
}

const routes = [];
routes.push({
    to: "/",
    text: "Home"
})
routes.push({
    to: "/about",
    text: "About"
})
routes.push({
    to: "/contact",
    text: "Contact"
})

export default Menu;
