/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Creación de las variables concatenadas
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // Función para generar una excusa aleatoria
  function generateExcuse() {
    let partsExcuse = [who, action, what, when];
    let excuse = "";
    for (let i = 0; i < partsExcuse.length; i++) {
      let randomIndex = Math.floor(Math.random() * partsExcuse[i].length);
      excuse += partsExcuse[i][randomIndex] + " ";
    }
    return excuse;
  }

  // Asignación de la excusa al documento HTML a traves del id excuse
  document.getElementById("excuse").innerHTML = generateExcuse(); //Es más recomendable usar .innerText en este caso, lo que hará será recargar solo el texto que cambia y no la página entera
};
