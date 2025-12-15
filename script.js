// MENÚ SEMANAL GENERADO AUTOMÁTICAMENTE
const menu = {
    "Lunes": {
        almuerzo: [
            "Caldo blanco",
            "Guiso de lenteja",
            "Chuleta frita"
        ],
        cena: [
            "Sopita de arroz",
            "Pollo dorado",
            "Arroz a la cubana"
        ]
    },
    "Martes": {
        almuerzo: [
            "Sopa de trigo",
            "Pallar con seco de carne de cordero",
            "Camote rebozado con arroz y ensalada"
        ]
    },
    "Miércoles": {
        almuerzo: [
            "Sopa menestrón",
            "Papa rebozada",
            "Pollo a la huancaína"
        ],
        cena: [
            "Sopa de sémola",
            "Apanado",
            "Matasquita"
        ]
    },
    "Jueves": {
        almuerzo: [
            "Sopa de quinua",
            "Arroz con pollo",
            "Saltado de acelga"
        ],
        cena: [
            "Sopa de fideo",
            "Pollo al sillao",
            "Apanado"
        ]
    },
    "Viernes": {
        almuerzo: [
            "Sopa de trigo",
            "Costillar dorado",
            "Lomo saltado"
        ],
        cena: [
            "Cacao de pollo",
            "Tallarín verde"
        ]
    }
};

const cont = document.getElementById("menu-semanal");

Object.keys(menu).forEach(dia => {
    const data = menu[dia];
    
    let html = `
        <div class="dia">
            <h3>${dia}</h3>
    `;

    if (data.almuerzo) {
        html += `
        <div class="categoria">
            <h4>Almuerzo</h4>
            <ul>${data.almuerzo.map(p => `<li>${p}</li>`).join("")}</ul>
        </div>`;
    }

    if (data.cena) {
        html += `
        <div class="categoria">
            <h4>Cena</h4>
            <ul>${data.cena.map(p => `<li>${p}</li>`).join("")}</ul>
        </div>`;
    }

    html += `</div>`;
    cont.innerHTML += html;
});

// ===== MI CUENTA - PEDIDOS =====
const precioMenu = 10;

const cantidadInput = document.getElementById("cantidad");
const totalSpan = document.getElementById("total");

if (cantidadInput) {
    cantidadInput.addEventListener("input", () => {
        const cantidad = Number(cantidadInput.value);
        totalSpan.textContent = cantidad * precioMenu;
    });
}

function enviarPedido() {
    const cantidad = Number(cantidadInput.value);
    const total = cantidad * precioMenu;

    const mensaje = `Hola, quiero hacer un pedido:
Menú del día
Cantidad: ${cantidad}
Total: S/ ${total}.00`;

    const numeroWhatsApp = "51988592248"; 
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}
