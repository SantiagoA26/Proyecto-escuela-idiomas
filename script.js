
const menu = document.querySelector('#menu')
const opcionesMenu = document.querySelector('#opciones-menu')

menu.addEventListener('click', () => {
    opcionesMenu.classList.toggle('show')
})