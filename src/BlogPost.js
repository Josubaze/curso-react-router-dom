import React from 'react';
import { useParams } from 'react-router-dom';
import { blogdata } from './blogdata';

const BlogPost = () => {
    /* Para cargar la información dinámicamente en la página debemos 
    hacer uso del "useParams", este por medio de un objeto que debemos 
    destructurar nos traerá el slug */
    
    const {slug} = useParams();
    const blogpost = blogdata.find(post => post.slug === slug);
    return (
        <>
            <h2>{blogpost.tittle}</h2>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>
        </>

    );
}

export default BlogPost;
