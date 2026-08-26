function evaluarParametro() {
    let elementoFruta = document.getElementById("textoFruta");
    let fruta = elementoFruta.value.toLowerCase();
    let mensaje = "";

    switch (fruta) {
        case "manzana":
            mensaje = "El precio de la fruta es manzana es: 15";
            break;
        case "naranja":
            mensaje = "El precio de la fruta es naranja es: 20";
            break;
        case "plátano":
        case "platano":
            mensaje = "El precio de la fruta es plátano es: 25";
            break;
        default:
            mensaje = "Fruta no encontrada";
            break;
    }

    alert(mensaje);
}
