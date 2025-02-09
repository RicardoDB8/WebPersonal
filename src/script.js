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
