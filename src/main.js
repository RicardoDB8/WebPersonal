// Calculadora 
function appendValue(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function calculateResult() {
    try {
        document.getElementById('screen').value = eval(document.getElementById('screen').value);
    } catch (e) {
        alert('Error en la operación');
        clearScreen();
    }
}

// Textos aleatorios en el parrafo del header
const parrafos = [
    "La paciencia es la clave del éxito.",
    "Las ventajas no son permanentes.",
    "El trabajo en equipo nos lleva más lejos.",
    "Aprender es un viaje sin final.",
    "Cada error es una oportunidad de mejorar.",
    "El conocimiento se construye.",
    "Apasionado por la excelencia operativa y la mejora continua, con experiencia en la implementación de metodologías como 5S, Kaizen y Six Sigma en la industria electrónica."
];

// Seleccionar un párrafo aleatorio
function actualizarTexto() {
    const indice = Math.floor(Math.random() * parrafos.length);
    document.getElementById("header-text").textContent = parrafos[indice];
}

// Llamar a la función al cargar la página
actualizarTexto();