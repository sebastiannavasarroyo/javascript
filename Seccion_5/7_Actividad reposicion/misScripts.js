function recomendar() {
    var presupuestoInput = document.getElementById("presupuesto").value;
    var cantidadInput = document.getElementById("cantidad").value;
    var tipoActividad = document.getElementById("actividad").value;
    var contenedorResultado = document.getElementById("resultado");

    var presupuesto = parseFloat(presupuestoInput);
    var cantidad = parseInt(cantidadInput);

    if (presupuestoInput === "" || cantidadInput === "") {
        contenedorResultado.innerHTML = "Error: Los campos no pueden estar vacíos.";
        return;
    }
    if (isNaN(presupuesto) || presupuesto < 0) {
        contenedorResultado.innerHTML = "Error: Presupuesto no válido o negativo.";
        return;
    }
    if (isNaN(cantidad) || cantidad <= 0) {
        contenedorResultado.innerHTML = "Error: La cantidad de personas debe ser mayor a cero.";
        return;
    }

    var actividadRecomendada = "";

    switch (tipoActividad) {
        case "deporte":
            if (presupuesto < 8000) {
                actividadRecomendada = "Caminata recreativa";
            } else if (presupuesto >= 8000 && presupuesto <= 15000) {
                actividadRecomendada = "Alquiler de cancha";
            } else {
                actividadRecomendada = "Actividad deportiva especializada";
            }
            break;

        case "entretenimiento":
            if (presupuesto < 8000) {
                actividadRecomendada = "Actividad económica";
            } else if (presupuesto >= 8000 && presupuesto <= 15000) {
                actividadRecomendada = "Entrada al cine";
            } else {
                actividadRecomendada = "Concierto o espectáculo";
            }
            break;

        case "turismo":
            if (presupuesto < 8000) {
                actividadRecomendada = "Visita a parque público";
            } else if (presupuesto >= 8000 && presupuesto <= 15000) {
                actividadRecomendada = "Tour local";
            } else {
                actividadRecomendada = "Excursión de día completo";
            }
            break;

        case "familiar":
            if (presupuesto < 8000) {
                actividadRecomendada = "Picnic familiar";
            } else if (presupuesto >= 8000 && presupuesto <= 15000) {
                actividadRecomendada = "Salida recreativa";
            } else {
                actividadRecomendada = "Parque temático o actividad especial";
            }
            break;

        default:
            contenedorResultado.innerHTML = "Error: Selección de actividad incompleta.";
            return;
    }

    var porcentajeDescuento = 0;

    if (cantidad >= 1 && cantidad <= 4) {
        porcentajeDescuento = 0;
    } else if (cantidad >= 5 && cantidad <= 8) {
        porcentajeDescuento = 10;
    } else if (cantidad >= 9) {
        porcentajeDescuento = 15;
    }

    var montoDescuento = presupuesto * (porcentajeDescuento / 100);
    var presupuestoFinal = presupuesto - montoDescuento;

    contenedorResultado.innerHTML = 
        "Actividad recomendada: " + actividadRecomendada + "<br>" +
        "Cantidad de personas: " + cantidad + "<br>" +
        "Descuento grupal: " + porcentajeDescuento + "%<br>" +
        "Monto del descuento: CRC " + montoDescuento + "<br>" +
        "Presupuesto final: CRC " + presupuestoFinal;
}

function limpiar() {
    document.getElementById("presupuesto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("actividad").selectedIndex = 0;
    document.getElementById("resultado").innerHTML = "";
}