import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogdata } from './blogdata';

const BlogPost = () => {
    /* Para cargar la información dinámicamente en la página debemos 
    hacer uso del "useParams", este por medio de un objeto que debemos 
    destructurar nos traerá el slug */
    const navigate = useNavigate();
    const {slug} = useParams();
    const blogpost = blogdata.find(post => post.slug === slug);
    const returnToBlog = () => {
        navigate('/blog');  // si pasa como arg -1 redirije hacia la pag anterior, esto gracias a array interno que lleva.
    }
    return (
        <>
            <h2>{blogpost.tittle}</h2>
            <button onClick={returnToBlog}>Volver</button>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>
        </>

    );
}

export default BlogPost;
