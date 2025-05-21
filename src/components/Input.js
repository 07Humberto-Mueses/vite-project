export default function Input({
  type = "text",
  placeholder = "Ingrese el nombre del jugador",
}) {
  // Crear un contenedor para el input y el placeholder animado
  const container = document.createElement("div");
  container.classList.add(
    "relative", // Contenedor relativo para posicionar el label
    "w-full", // Ancho completo del contenedor
    "flex", // Usar flexbox
    "justify-center", // Centrar horizontalmente
    "mb-4" // Margen inferior
  );

  // Crear el input
  const inputElement = document.createElement("input");
  inputElement.type = type;
  inputElement.placeholder = "";
  inputElement.classList.add(
    "bg-gray-100",
    "text-lg",
    "text-black",
    "p-3",
    "rounded-md",
    "shadow-lg",
    "transition-all",
    "duration-300",
    "ease-in-out",
    "w-[300px]", // Ancho fijo del input
    "focus:outline-none",
    "peer" // Clave para la interacción con el placeholder animado
  );

  // Crear el placeholder animado
  const labelElement = document.createElement("label");
  labelElement.textContent = placeholder;
  labelElement.classList.add(
    "text-gray-500",
    "text-lg",
    "transition-all",
    "duration-300",
    "ease-in-out",
    "peer-placeholder-shown:top-3", // Cuando no hay texto en el input
    "peer-placeholder-shown:text-lg", // Tamaño inicial
    "peer-placeholder-shown:text-gray-500", // Color inicial
    "peer-focus:top-[-10px]", // Al enfocar el input
    "peer-focus:text-sm", // Tamaño reducido
    "peer-focus:text-blue-600" // Color al enfocarse
  );

  // Agregar el input y el label al contenedor
  container.appendChild(inputElement);
  container.appendChild(labelElement);

  return container;
}
