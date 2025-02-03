/*Abrir y cerrar CV*/

const abrirCV = document.querySelector('#abrirCV');
const divCV = document.querySelector('.contenedor-cv');
const cuerpo = document.querySelector('.scroll-activo');

abrirCV.addEventListener('click', () => {
    divCV.classList.toggle('contenedor-cv-activado');
    cuerpo.classList.toggle('scroll-inactivo');
    setTimeout(() => {
        divCV.classList.toggle('contenedor-cv-visible');
    }, 10)
});

const cerrarMenuCV = document.querySelector('.cerrar-cv');

cerrarMenuCV.addEventListener('click', () => {
    divCV.classList.remove('contenedor-cv-visible');
    setTimeout(() => {
        divCV.classList.remove('contenedor-cv-activado');
        cuerpo.classList.remove('scroll-inactivo');
    }, 300)
});

/*---*/

/*Abrir y cerrar video*/

const abrirVideo = document.querySelector('#abrirVideo');
const divVideo = document.querySelector('.contenedor-video');

abrirVideo.addEventListener('click', () => {
    divVideo.classList.toggle('contenedor-video-activado');
    cuerpo.classList.toggle('scroll-inactivo');
    setTimeout(() => {
        divVideo.classList.toggle('contenedor-video-visible');
    }, 10)
});

const cerrarMenuVideo = document.querySelector('.cerrar-video');
const video = document.querySelector('video.video-gsm');

cerrarMenuVideo.addEventListener('click', () => {
    divVideo.classList.remove('contenedor-video-visible');
    setTimeout(() => {
        divVideo.classList.remove('contenedor-video-activado');
        cuerpo.classList.remove('scroll-inactivo');
        video.src = video.src;
    }, 300)
});

/*---*/