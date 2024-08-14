// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los botones y los modales
    var buttons = document.querySelectorAll('.cool-button');
    var modals = document.querySelectorAll('.modal');
    var closeButtons = document.querySelectorAll('.close');

    // Abre el modal correspondiente al hacer clic en un botón
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var modalId = this.getAttribute('data-modal');
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex';
            }
        });
    });

    // Cierra el modal correspondiente al hacer clic en el botón de cerrar
    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', function () {
            var modalId = this.getAttribute('data-close');
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Cierra el modal si el usuario hace clic fuera del contenido del modal
    window.addEventListener('click', function (event) {
        modals.forEach(function (modal) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
