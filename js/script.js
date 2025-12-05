document.addEventListener("DOMContentLoaded", () => {

    
  
  
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // ACTIVAR MENÚ DESPUÉS DE CARGAR EL HEADER
            const menu = document.querySelector('#menu');
            const opcionesMenu = document.querySelector('#opciones-menu');

            if (menu) {
                menu.addEventListener('click', () => {
                    opcionesMenu.classList.toggle('show');
                });
            }
        });

 
  

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

});
