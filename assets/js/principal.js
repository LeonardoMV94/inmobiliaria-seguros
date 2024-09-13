import { generateHTML } from "./propiedad.generator.js";
import { listaPropiedades } from "./getPropiedades.js";
import { initPagination } from './paginador.js'

//console.log(listaPropiedades);

// https://www.freecodecamp.org/espanol/news/prototipo-javascript-expliacado-con-ejemplos/

document.addEventListener('scroll', function() {
    const scrollToTopButton = document.querySelector('.btn-scroll-to-top');
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

window.scrollToTopSimone = function scrollToTopSimone() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    generateHTML(listaPropiedades)
})

