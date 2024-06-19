import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { blogdata } from './blogdata';

const ContactPage = () => {
    return (
        <>
            <h1>Blog</h1>
            {/* Esta etiqueta es donde aparecerá renderizado el componente 
			hijo */}
            <Outlet/>
            {blogdata.map(post => (
                <BlogLink key={post.slug} post={post}/>
            ))}
        </>
    );
}

/* Este BlogLink srá el que contenga los datos que nos crearan 
nuestro slug y nos redireccionen al contenido que deseamos ver */
function BlogLink({post}) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    )
}


export default ContactPage;
