const notas = [7, 4, 8, 9, 6];

function listarNotas() {
  const lista = document.getElementById("listaNotas");
  lista.innerHTML = "";
  for (let i = 0; i < notas.length; i++) {
    const item = document.createElement("li");
    item.textContent = notas[i];
    lista.appendChild(item);
  }
}

function calcularPromedio() {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  const promedio = suma / notas.length;
  document.getElementById("resultadoPromedio").textContent = promedio.toFixed(1);
}

function notaMasAlta() {
  let mayor = notas[0];
  for (let i = 1; i < notas.length; i++) {
    if (notas[i] > mayor) {
      mayor = notas[i];
    }
  }
  document.getElementById("resultadoMasAlta").textContent = mayor;
}

function hayAplazados() {
  let aplazado = false;
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 4) {
      aplazado = true;
      break;
    }
  }
  document.getElementById("resultadoAplazados").textContent = aplazado ? "Sí" : "No";
}

document.getElementById("btnPromedio").addEventListener("click", calcularPromedio);
document.getElementById("btnMasAlta").addEventListener("click", notaMasAlta);
document.getElementById("btnAplazados").addEventListener("click", hayAplazados);
window.addEventListener("load", listarNotas);