const bienvenida = document.getElementById("bienvenida");
const botonTirar = document.getElementById("boton-tirar");
const imagenDado = document.getElementById("imagen-dado");
const resultadoAcumulado = document.getElementById("resultado-acumulado");
const toggleTheme = document.getElementById("toggle-theme");

let acumulado = 0;


const dadoImages = {
  1: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
  2: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
  3: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
  4: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
  5: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
  6: "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg",
};


const nombreUsuario = localStorage.getItem("nombreUsuario") || "Usuario";
bienvenida.textContent = `¡Bienvenido, ${nombreUsuario}!`;


function lanzarDado() {
  const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
  acumulado += numeroAleatorio;

  
  imagenDado.src = dadoImages[numeroAleatorio];

  
  resultadoAcumulado.textContent = `Resultado acumulado: ${acumulado}`;
}


function toggleThemeMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
}


document.addEventListener("DOMContentLoaded", () => {
  
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});


botonTirar.addEventListener("click", lanzarDado);
toggleTheme.addEventListener("click", toggleThemeMode);
