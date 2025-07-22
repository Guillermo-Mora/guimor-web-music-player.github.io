const menuAside = document.getElementById('menu-buttons');
const botonMenu = document.querySelector('.header-menu-button');
const displayContent = document.getElementById('display-content');
const sectionBlocker = document.getElementById('aside-menu-closed');
const sectionMenuHome = document.getElementById('home');
const sectionMenuExplore = document.getElementById('explore');
const sectionMenuLibrary = document.getElementById('library');
const buttonHome = document.getElementById('button-home');
const buttonExplore = document.getElementById('button-explore');
const buttonLibrary = document.getElementById('button-library');
const logoGuimorMusic = document.getElementById('loading-svg');
const divLoading = document.getElementById('loading-screen');
const scrollLeftButtons = document.querySelectorAll('.scroll-left');
const scrollRightButtons = document.querySelectorAll('.scroll-right');
const userPage = document.getElementById('userLogo');
const userMenu = document.getElementById('user-menu');
let isUserMenuOpen = false;
let isAsideMenuOpen;
const phoneResolution = 1555;
const menuButtons = document.getElementById('menu-buttons');
const sliderSections = document.querySelectorAll('.slider-section');
const menuAsideSections = [
    { button: buttonHome, section: sectionMenuHome },
    { button: buttonExplore, section: sectionMenuExplore },
    { button: buttonLibrary, section: sectionMenuLibrary }
];


logoGuimorMusic.classList.add('load-animation');
setTimeout(() => {
    divLoading.classList.add('div-load-animation');
}, 500)
setTimeout(() => {
    divLoading.classList.add('no-active');
}, 1000);


if (window.innerWidth <= phoneResolution) {
    isAsideMenuOpen = false;
    menuAside.classList.remove('menu-visible');
    sectionBlocker.classList.remove('active-aside-menu');
} else {
    isAsideMenuOpen = true;
}


document.addEventListener('DOMContentLoaded', function () {
    sliderSections.forEach((section, index) => {
        const scrollZone = section.querySelector('.scroll-zone')
        const scrollControls = section.querySelectorAll('.scroll-button');

        const sectionNumber = index + 1
        const sectionId = "section-" + sectionNumber

        scrollZone.id = sectionId
        scrollControls.forEach(control => {
            control.setAttribute('data-section', sectionId);
        })
    });
});
const handleScroll = (sectionId, direction) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    let scrollAmount;
    switch (sectionId) {
        case 'section-3':
            scrollAmount = 347.5;
            break;
        default:
            scrollAmount = 231.666666667;
    }
    section.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
};
scrollLeftButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        handleScroll(sectionId, 'left');
    });
});
scrollRightButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        handleScroll(sectionId, 'right');
    });
});

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
menuAsideSections.forEach(setupMenuButton);
function removeActiveSection() {
    displayContent.getElementsByClassName('section-active')[0]?.classList.remove('section-active')
}
function removeActiveButton() {
    menuButtons.getElementsByClassName('button-active')[0]?.classList.remove('button-active')
}