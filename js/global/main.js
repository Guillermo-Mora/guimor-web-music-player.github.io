// Body
const bodyMain = document.getElementById('body-main');
// Menu lateral
const menuAside = document.getElementById('menu-buttons');
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
const userMenu = document.getElementById('user-menu');
let isUserMenuOpen = false;
let isAsideMenuOpen;
const phoneResolution = 1555;

const menuButtons = document.getElementById('menu-buttons');

// Configuración de mapeo entre botones y secciones
const menuAsideSections = [
    {
        button: buttonHome,
        section: sectionMenuHome,
    },
    {
        button: buttonExplore,
        section: sectionMenuExplore,
    },
    {
        button: buttonLibrary,
        section: sectionMenuLibrary,
    }
];


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
if (window.innerWidth <= phoneResolution) {
    isAsideMenuOpen = false;
    menuAside.classList.remove('menu-visible');
    sectionBlocker.classList.remove('active-aside-menu');
} else {
    isAsideMenuOpen = true;
}

// Al clicar sobre el boton de "usuario"
userPage.addEventListener('click', () => {
    isUserMenuOpen = !isUserMenuOpen;
    userMenu.classList.toggle('user-menu-visible');

    if (isUserMenuOpen) {
        document.addEventListener('click', closeUserMenu)
    } else {
        document.removeEventListener('click', closeUserMenu)
    }
});

function closeUserMenu(e) {
    if (isUserMenuOpen) {
        if (!userMenu.contains(e.target) && !userPage.contains(e.target)) {
            isUserMenuOpen = false;
            userMenu.classList.remove('user-menu-visible')
        }
    }
}

//Clic sobre el botón hamburguesa
botonMenu.addEventListener('click', () => {
    isAsideMenuOpen = !isAsideMenuOpen;
    menuAside.classList.toggle('menu-visible');
    sectionBlocker.classList.toggle('active-aside-menu');
    if (isAsideMenuOpen) {
        document.addEventListener('click', closeAsideMenu)
    } else {
        document.removeEventListener('click', closeAsideMenu)
    }
});

function closeAsideMenu(e) {
    if (isAsideMenuOpen) {
        if (!menuAside.contains(e.target) && !botonMenu.contains(e.target) && window.innerWidth <= phoneResolution) {
            isAsideMenuOpen = false;
            menuAside.classList.remove('menu-visible');
            sectionBlocker.classList.remove('active-aside-menu');
        }
    }
}

// Función genérica para manejar los clics y cambios entre scciones de las páginas
function setupMenuButton(config) {
    config.button.addEventListener('click', () => {
        if (!config.button.classList.contains('button-active')) {
            removeActiveSection();
            removeActiveButton();
            config.section.classList.add('section-active');
            config.button.classList.add('button-active');
        }

        if (window.innerWidth <= phoneResolution) {
            isAsideMenuOpen = !isAsideMenuOpen;
            sectionBlocker.classList.toggle('active-aside-menu');
            menuAside.classList.toggle('menu-visible');
            if (isAsideMenuOpen) {
                document.addEventListener('click', closeAsideMenu)
            } else {
                document.removeEventListener('click', closeAsideMenu)
            }
        }
    });
}

// Inicializar todos los botones
menuAsideSections.forEach(setupMenuButton);

// Funciones auxiliares (se mantienen igual)
function removeActiveSection() {
    displayContent.getElementsByClassName('section-active')[0]?.classList.remove('section-active')
}

function removeActiveButton() {
    menuButtons.getElementsByClassName('button-active')[0]?.classList.remove('button-active')
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