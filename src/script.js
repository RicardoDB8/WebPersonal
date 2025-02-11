function loadContent(page, event) {
    event.preventDefault(); // Evita que el enlace recargue la página

    fetch(`contenidos/${page}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar: ${page}.html`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("content-container").innerHTML = data;
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("content-container").innerHTML = `<p>Error al cargar ${page}.html</p>`;
        });
}

// Recargar la página al hacer clic en "🏠"
function reloadPage(event) {
    event.preventDefault();
    window.location.reload();
}


// Sub menus
document.addEventListener("DOMContentLoaded", function () {
    var submenus = document.querySelectorAll(".submenu");

    // Ocultar todos los submenús al cargar la página
    submenus.forEach(function (submenu) {
        submenu.style.display = "none";
    });

    // Agregar eventos a los enlaces dentro de los submenús para que se cierren al hacer clic
    var submenuLinks = document.querySelectorAll(".submenu a");
    submenuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            var submenu = this.closest(".submenu");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });
});

function toggleSubmenu(event, submenuId) {
    event.preventDefault(); // Evita la navegación predeterminada

    var submenus = document.querySelectorAll(".submenu");

    // Cierra todos los submenús
    submenus.forEach(function (submenu) {
        if (submenu.id !== submenuId) {
            submenu.style.display = "none";
        }
    });

    var submenu = document.getElementById(submenuId);

    // Alterna el submenú seleccionado
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}


