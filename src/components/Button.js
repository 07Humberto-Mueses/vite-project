export default function Button(label, onClick) {
  const button = document.createElement("button");
  button.classList.add(
    "bg-gradient-to-r", // Gradiente de color
    "from-red-500", // Color inicial
    "to-orange-500", // Color final
    "text-white",
    "text-xl", // Texto blanco
    "px-8", // Padding horizontal
    "py-3", // Padding vertical
    "rounded-full", // Bordes redondeados
    "shadow-lg", // Sombra para dar profundidad
    "hover:from-red-600", // Cambio de color al pasar el mouse
    "hover:to-orange-600",
    "hover:shadow-xl", // Sombra más grande al pasar el mouse
    "transition-all", // Transiciones suaves
    "duration-300", // Duración de la transición
    "ease-in-out" // Suavizado de la transición
  );
  button.innerText = label;

  button.addEventListener("click", onClick); // Asociamos la función onClick

  return button;
}
