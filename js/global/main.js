const menuAside = document.querySelector('aside.menu');
const botonMenu = document.querySelector('.header-menu-button');

botonMenu.addEventListener('click', () => {
    menuAside.classList.toggle('menu-visible');
});

// Selecciona los elementos por su id
const sectionMenuHome = document.getElementById('home');
const sectionMenuExplore = document.getElementById('explore');
const sectionMenuLibrary = document.getElementById('library');

// Añade el event listener al botón "Home"
sectionMenuHome.addEventListener('click', () => {
    // Verifica si ya tiene la clase .section-active
    if (!sectionMenuHome.classList.contains('section-active')) {
        // Quita la clase .section-active de los demás elementos
        removeActiveClass([sectionMenuHome, sectionMenuExplore, sectionMenuLibrary]);

        // Añade la clase .section-active al elemento clickeado
        sectionMenuHome.classList.add('section-active');
    }
});

// Añade el event listener al botón "Explore"
sectionMenuExplore.addEventListener('click', () => {
    // Verifica si ya tiene la clase .section-active
    if (!sectionMenuExplore.classList.contains('section-active')) {
        // Quita la clase .section-active de los demás elementos
        removeActiveClass([sectionMenuHome, sectionMenuExplore, sectionMenuLibrary]);

        // Añade la clase .section-active al elemento clickeado
        sectionMenuExplore.classList.add('section-active');
    }
});

// Añade el event listener al botón "Library"
sectionMenuLibrary.addEventListener('click', () => {
    // Verifica si ya tiene la clase .section-active
    if (!sectionMenuLibrary.classList.contains('section-active')) {
        // Quita la clase .section-active de los demás elementos
        removeActiveClass([sectionMenuHome, sectionMenuExplore, sectionMenuLibrary]);

        // Añade la clase .section-active al elemento clickeado
        sectionMenuLibrary.classList.add('section-active');
    }
});

// Función para quitar la clase .section-active de una lista de elementos
function removeActiveClass(elements) {
    elements.forEach(element => {
        if (element.classList.contains('section-active')) {
            element.classList.remove('section-active');
        }
    });
}