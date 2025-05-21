export default function Header() {
  const header = document.createElement("header");
  header.classList.add(
    "bg-gradient-to-r", // Gradiente de fondo
    "from-[#A66329]", // Color inicial
    "to-[#734429]", // Color final
    "text-white", // Texto blanco
    "shadow-md", // Sombra para dar profundidad
    "p-6", // Espaciado interno
    "fixed", // Posición fija en la parte superior
    "top-0", // Ubicación en la parte superior
    "w-full", // Ancho completo
    "z-50" // Asegura que esté encima de otros elementos
  );

  header.innerHTML = `
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="text-3xl font-bold">Buscador de Deportistas Futbol</h1>
      <nav>
        <ul class="flex space-x-6">
          <li>
            <a href="#features" class="text-white hover:text-yellow-300 transition-colors duration-300">
              Características
            </a>
          </li>
          <li>
            <a href="#contact" class="text-white hover:text-yellow-300 transition-colors duration-300">
              Contáctanos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  `;

  return header;
}
