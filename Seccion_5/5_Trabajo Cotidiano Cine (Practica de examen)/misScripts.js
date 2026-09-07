function recomendar(){
    let edad = Number(document.getElementById("edad").value);
    let genero = document.getElementById("genero").value;
    let resultado = "";

    switch (genero) {
        case "drama":
            if (edad < 13) {
                resultado = "casablanca"
            } else if (edad <= 15) {
                resultado = "The Shawsshank Redemption"
            }else {
                resultado = "Taxi driver";
            }
            break;

        case "comedia":
            if(edad<13){
                resultado = "Back to the Future";
            } else if (edad<=15){
                resultado = "The truman show";
            } else {
                resultado = "The world of wall street";
            }
            break;
            
        case "musical":
            if (edad<13){
                resultado = "La la Land";
            } else if (edad <= 15){
                resultado = "Les Miserables";
            } else {
                resultado = "The Rocky Horror Picture Show";
            }
            break;
            
        case "crimen":
            if (edad < 13){
                resultado = "No Hay opciones para esta edad";
            } else if (edad <= 15){
                resultado = "El secreto de sus ojos";
            } else {
                resultado = "The Godfather";
            }
            break;    
    }

    document.getElementById("resultado").textContent = resultado;
}