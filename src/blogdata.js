/* Este Array simula una API que contenga nuestros datos, estos 
cargarán dinámicamente el contenido a los fake blogs */

const blogdata = [];
blogdata.push({
    title: "Que es React?",
    slug: "que-es-react",
    content: "React es la mejor Framework frontend de Javascript",
    author: 'JuanDC' 
})

blogdata.push({
    title: "Que es Vue?",
    slug: "que-es-vue",
    content: "Vue es la mejor Framework frontend de Javascript",
    author: 'Josubaze' 
})

blogdata.push({
    title: "Que es Angular?",
    slug: "que-es-angular",
    content: "Angular es la mejor Framework frontend de Javascript",
    author: 'Martolini' 
})

export { blogdata }