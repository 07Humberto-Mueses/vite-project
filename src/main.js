// src/main.js
import "./style.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Button from "./components/Button.js";
import Input from "./components/Input.js";
import PlayerCard from "./components/PlayerCard.js";
import { fetchPlayerInfo } from "./services/api.js";

const app = document.querySelector("#app");

// Agregar el Header
app.appendChild(Header());

const formContainer = document.createElement("div");
formContainer.className = "form-container";

const input = Input("text", "Ingrese el nombre del jugador");

app.appendChild(input);

// Agregar un botón
const button = Button("Buscar", async () => {
  const inputElement = input.querySelector("input");
  const playerName = inputElement.value;

  if (!playerName.trim()) {
    alert("Por favor ingrese el nombre de un jugador de futbol valido");
    return;
  }

  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML =
    "<p>Buscando información del jugador seleccionado...</p>";

  try {
    const playerData = await fetchPlayerInfo(playerName);

    resultContainer.innerHTML = "";

    if (playerData) {
      resultContainer.appendChild(PlayerCard(playerData));
    } else {
      resultContainer.innerHTML =
        "<p>No se pudo encontrar Detalles para este jugador.</p>";
    }
  } catch (error) {
    resultContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
  inputElement.value = "";
});

formContainer.appendChild(button);
app.appendChild(formContainer);

const resultContainer = document.createElement("div");
resultContainer.id = "result-container";
app.appendChild(resultContainer);
// Agregar el Footer
app.appendChild(Footer());

// Estilos adicionales
const styles = `
  body {
  margin: 0;
  font-family: "Segoe UI";
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app {
  flex: 1;
  padding-top: 100px; /* Espacio para el Header */
  text-align: center; /* Alinea los botones al centro */
}

footer {
  margin-top: auto
  text-align: center;
  padding: 20px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

button {
  margin: 10px; /* Espaciado entre botones */
}
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// // Crear y agregar más botones
// const button1 = Button("Botón 1", () => {
//   alert("¡Hola! Has hecho clic en el Botón 1.");
// });
// const button2 = Button("Botón 2", () => {
//   alert("¡Hola! Has hecho clic en el Botón 2.");
// });
// const button3 = Button("Botón 3", () => {
//   alert("¡Hola! Has hecho clic en el Botón 3.");
// });
// // Agregar el contenedor de botones
// const buttonContainer = document.createElement("div");
// buttonContainer.classList.add("button-container");
// buttonContainer.appendChild(button1);
// buttonContainer.appendChild(button2);
// buttonContainer.appendChild(button3);
// app.appendChild(buttonContainer);
