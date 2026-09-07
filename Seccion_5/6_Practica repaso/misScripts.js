function recomendar(){
    let edad = Number(document.getElementById("edad").value);
    let genero = document.getElementById("genero").value;
    let resultado = "";

    switch(genero){
        case "accion":
            if(edad<15){
                resultado= "Los increibles";
            } else {
               resultado="Mad Max:Fury Road";
            }
            break;

        case "comedia":
            if(edad<15){
                resultado = "Hotel Transsylvania";
            } else {
                resultado = "Superbad";
            }
            break; 
    }

    document.getElementById("resultado").textContent = resultado;

}