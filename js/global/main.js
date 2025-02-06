// Gestion de la opacidad del header al detectar scroll
const headerPage = document.getElementById('header-main');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        headerPage.classList.add('scrolled');
    } else {
        headerPage.classList.remove('scrolled');
    }
})

//Menu lateral desplegable

const bodyMain = document.getElementById('body-main');
const menuAside = document.querySelector('aside.menu');
const botonMenu = document.querySelector('.header-menu-button');
const displayContent = document.getElementById('display-content');
const sectionBlocker = document.getElementById('aside-menu-closed');

botonMenu.addEventListener('click', () => {
    menuAside.classList.toggle('menu-visible');
    sectionBlocker.classList.toggle('active-aside-menu');
    displayContent.classList.toggle('left-spacing');
    if (window.innerWidth <= 1440) {
        bodyMain.classList.toggle('scroll-blocked');
    }
});


if (window.innerWidth <= 1440) {
    menuAside.classList.remove('menu-visible');
    sectionBlocker.classList.remove('active-aside-menu');
    displayContent.classList.remove('left-spacing');
    bodyMain.classList.remove('scroll-blocked');
}

//Gestion de las secciones visibles en la zona principal

// Selecciona los elementos por su id
const sectionMenuHome = document.getElementById('home');
const sectionMenuExplore = document.getElementById('explore');
const sectionMenuLibrary = document.getElementById('library');

// Seleccionar los botones
const buttonHome = document.getElementById('button-home');
const buttonExplore = document.getElementById('button-explore');
const buttonLibrary = document.getElementById('button-library');

// Añade el event listener al botón "Home"
buttonHome.addEventListener('click', () => {
    // Quita la clase .section-active de los demás elementos
    removeActiveClass([sectionMenuExplore, sectionMenuLibrary]);
    removeActiveButton([buttonExplore, buttonLibrary]);

    // Añade la clase .section-active al elemento clickeado
    sectionMenuHome.classList.add('section-active');
    buttonHome.classList.add('button-active');
    if (window.innerWidth <= 1440) {
        sectionBlocker.classList.toggle('active-aside-menu');
        menuAside.classList.toggle('menu-visible');
        bodyMain.classList.toggle('scroll-blocked');
    }
});

// Añade el event listener al botón "Explore"
buttonExplore.addEventListener('click', () => {
    // Quita la clase .section-active de los demás elementos
    removeActiveClass([sectionMenuHome, sectionMenuLibrary]);
    removeActiveButton([buttonHome, buttonLibrary]);

    // Añade la clase .section-active al elemento clickeado
    sectionMenuExplore.classList.add('section-active');
    buttonExplore.classList.add('button-active');
    if (window.innerWidth <= 1440) {
        sectionBlocker.classList.toggle('active-aside-menu');
        menuAside.classList.toggle('menu-visible');
        bodyMain.classList.toggle('scroll-blocked');
    }
});

// Añade el event listener al botón "Library"
buttonLibrary.addEventListener('click', () => {
    // Quita la clase .section-active de los demás elementos
    removeActiveClass([sectionMenuHome, sectionMenuExplore]);
    removeActiveButton([buttonHome, buttonExplore]);

    // Añade la clase .section-active al elemento clickeado
    sectionMenuLibrary.classList.add('section-active');
    buttonLibrary.classList.add('button-active');
    if (window.innerWidth <= 1440) {
        sectionBlocker.classList.toggle('active-aside-menu');
        menuAside.classList.toggle('menu-visible');
        bodyMain.classList.toggle('scroll-blocked');
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

// Función para quitar la clase .button-active de una lista de elementos
function removeActiveButton(elements) {
    elements.forEach(element => {
        if (element.classList.contains('button-active')) {
            element.classList.remove('button-active');
        }
    })
}

// Seleccionar todos los botones de scroll
const scrollLeftButtons = document.querySelectorAll('.scroll-left');
const scrollRightButtons = document.querySelectorAll('.scroll-right');

// Función para manejar el scroll
const handleScroll = (sectionId, direction) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollBy({
            left: direction === 'left' ? -220 : 220, // Ajusta el valor según sea necesario
            behavior: 'smooth' // Desplazamiento suave
        });
    }
};

// Asignar eventos a los botones de scroll izquierdo
scrollLeftButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        handleScroll(sectionId, 'left');
    });
});

// Asignar eventos a los botones de scroll derecho
scrollRightButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        handleScroll(sectionId, 'right');
    });
});