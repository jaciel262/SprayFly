const traducciones = {
    "es": {
        "titulo-header": "SprayFly",
        "menu-inicio": "Inicio",
        "menu-productos": "Productos",
        "menu-publicidad": "Publicidad Y Promociones",
        "menu-sobre-nosotros": "Sobre Nosotros",
        "banner-titulo": "Eliminamos plagas de manera ecológica y segura para tu hogar",
        "banner-descripcion": "El mejor repelente contra insectos",
        "leer-mas": "Leer más",
        "productos-titulo": "Productos Destacados",
        "producto-nombre": "SprayFly Repelente Ecológico",
        "producto-descripcion": "Protege tu hogar y tu familia con nuestro repelente natural contra moscas y otros insectos. 100% seguro y amigable con el medio ambiente.",
        "comprar-boton": "Comprar ahora",
        "footer-text": "SprayFly &copy; 2025"
    },
    "en": {
        "titulo-header": "SprayFly",
        "menu-inicio": "Home",
        "menu-productos": "Products",
        "menu-publicidad": "Advertising & Promotions",
        "menu-sobre-nosotros": "About Us",
        "banner-titulo": "We eliminate pests in an eco-friendly and safe way for your home",
        "banner-descripcion": "The best insect repellent",
        "leer-mas": "Learn more",
        "productos-titulo": "Featured Products",
        "producto-nombre": "SprayFly Eco Repellent",
        "producto-descripcion": "Protect your home and family with our natural repellent against flies and other insects. 100% safe and eco-friendly.",
        "comprar-boton": "Buy now",
        "footer-text": "SprayFly &copy; 2025"
    }
};

function cambiarIdioma() {
    const idiomaSeleccionado = document.getElementById("language-select").value;
    const traduccion = traducciones[idiomaSeleccionado];

    // Cambiar los textos según la traducción seleccionada
    document.getElementById("titulo-header").textContent = traduccion["titulo-header"];
    document.getElementById("menu-inicio").textContent = traduccion["menu-inicio"];
    document.getElementById("menu-productos").textContent = traduccion["menu-productos"];
    document.getElementById("menu-publicidad").textContent = traduccion["menu-publicidad"];
    document.getElementById("menu-sobre-nosotros").textContent = traduccion["menu-sobre-nosotros"];
    document.getElementById("banner-titulo").textContent = traduccion["banner-titulo"];
    document.getElementById("banner-descripcion").textContent = traduccion["banner-descripcion"];
    document.getElementById("leer-mas").textContent = traduccion["leer-mas"];
    document.getElementById("productos-titulo").textContent = traduccion["productos-titulo"];
    document.getElementById("producto-nombre").textContent = traduccion["producto-nombre"];
    document.getElementById("producto-descripcion").textContent = traduccion["producto-descripcion"];
    document.getElementById("comprar-boton").textContent = traduccion["comprar-boton"];
    document.getElementById("footer-text").textContent = traduccion["footer-text"];
}

// Cambiar idioma al cargar la página por defecto (Español)
window.onload = function() {
    cambiarIdioma();
};
