document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const selectorCategoria = document.getElementById('categoria');
    const productoGrid = document.getElementById('producto-grid');

    // Menú desplegable para móviles
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Datos de productos (simulados)
    const productos = {
        procesadores: [
            { nombre: "Procesador Intel i9", imagen: "imagenes/producto1.jpg", descripcion: "El mejor rendimiento para gaming y productividad." },
            { nombre: "Procesador AMD Ryzen 9", imagen: "imagenes/producto2.jpg", descripcion: "Potencia y eficiencia para multitarea." }
        ],
        "tarjetas-graficas": [
            { nombre: "Tarjeta Gráfica RTX 3080", imagen: "imagenes/producto3.jpg", descripcion: "Experiencia de juego en 4K sin igual." },
            { nombre: "Tarjeta Gráfica RX 6800 XT", imagen: "imagenes/producto4.jpg", descripcion: "Rendimiento excepcional para gamers." }
        ],
        // Agrega más productos para cada categoría
    };

    // Mostrar productos según la categoría seleccionada
    selectorCategoria.addEventListener('change', function() {
        const categoria = this.value;
        productoGrid.innerHTML = ''; // Limpiar productos anteriores

        if (productos[categoria]) {
            productos[categoria].forEach(producto => {
                const productoItem = document.createElement('div');
                productoItem.classList.add('producto-item');
                productoItem.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                `;
                productoGrid.appendChild(productoItem);
            });
        }
    });
});