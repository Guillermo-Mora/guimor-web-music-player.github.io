// Body
const bodyMain = document.getElementById('body-main');
// Menu lateral
const menuAside = document.querySelector('aside.menu');
// Boton hamburguesa header
const botonMenu = document.querySelector('.header-menu-button');
// Seccion principal donde se muestra el contenido
const displayContent = document.getElementById('display-content');
// Seccion que se muestra cuando el menu lateral esta desplegado en pantallas pequeñas
const sectionBlocker = document.getElementById('aside-menu-closed');
// Secciones de la pagina principal
const sectionMenuHome = document.getElementById('home');
const sectionMenuExplore = document.getElementById('explore');
const sectionMenuLibrary = document.getElementById('library');
// Botones del menu lateral
const buttonHome = document.getElementById('button-home');
const buttonExplore = document.getElementById('button-explore');
const buttonLibrary = document.getElementById('button-library');
//Pagina de carga
const logoGuimorMusic = document.getElementById('loading-svg');
const divLoading = document.getElementById('loading-screen');
// Seleccionar todos los botones de scroll
const scrollLeftButtons = document.querySelectorAll('.scroll-left');
const scrollRightButtons = document.querySelectorAll('.scroll-right');
//Boton pagina usuario
const userPage = document.getElementById('userLogo');

//Animacion inicial
logoGuimorMusic.classList.add('load-animation');
setTimeout(() => {
    divLoading.classList.add('div-load-animation');
}, 500)
setTimeout(() => {
    divLoading.classList.add('no-active');
}, 1000);
//

// Disposicion inicial para dispositivos móviles-tablets
if (window.innerWidth <= 1555) {
    menuAside.classList.remove('menu-visible');
    sectionBlocker.classList.remove('active-aside-menu');
}

// Al clicar sobre el boton de "usuario"
userPage.addEventListener('click', () => {
    menuAside.classList.toggle('menu-visible');
});

//Clic sobre el botón hamburguesa
botonMenu.addEventListener('click', () => {
    menuAside.classList.toggle('menu-visible');
    sectionBlocker.classList.toggle('active-aside-menu');
});

// Clic sobre el botón "Home"
buttonHome.addEventListener('click', () => {
    removeActiveClass([sectionMenuExplore, sectionMenuLibrary]);
    removeActiveButton([buttonExplore, buttonLibrary]);
    sectionMenuHome.classList.add('section-active');
    buttonHome.classList.add('button-active');
    if (window.innerWidth <= 1555) {
        sectionBlocker.classList.toggle('active-aside-menu');
        menuAside.classList.toggle('menu-visible');
    }
});

// Clic sobre el botón "Explore"
buttonExplore.addEventListener('click', () => {
    removeActiveClass([sectionMenuHome, sectionMenuLibrary]);
    removeActiveButton([buttonHome, buttonLibrary]);
    sectionMenuExplore.classList.add('section-active');
    buttonExplore.classList.add('button-active');
    if (window.innerWidth <= 1555) {
        sectionBlocker.classList.toggle('active-aside-menu');
        menuAside.classList.toggle('menu-visible');
    }
});

// Clic sobre el botón "Library"
buttonLibrary.addEventListener('click', () => {
    removeActiveClass([sectionMenuHome, sectionMenuExplore]);
    removeActiveButton([buttonHome, buttonExplore]);
    sectionMenuLibrary.classList.add('section-active');
    buttonLibrary.classList.add('button-active');
    if (window.innerWidth <= 1555) {
        sectionBlocker.classList.toggle('active-aside-menu');
        menuAside.classList.toggle('menu-visible');
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

// Función para manejar el scroll
const handleScroll = (sectionId, direction) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    let scrollAmount;

    switch (sectionId) {
        case 'section-3':
            scrollAmount = 320;
            break;
        default:
            scrollAmount = 220;
    }

    section.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
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