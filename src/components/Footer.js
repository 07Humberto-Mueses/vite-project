export default function Footer() {
  const footer = document.createElement("footer");
  footer.classList.add(
    "bg-[#223240]", // Fondo oscuro
    "text-gray-300", // Texto gris claro
    "p-6", // Espaciado interno
    "mt-10", // Margen superior
    "border-t", // Línea en la parte superior
    "border-gray-700" // Color de la línea
  );

  footer.innerHTML = `
    <footer class="py-8">
      <div class="container mx-auto text-center">
        <p class="text-sm">
          &copy; ${new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
        </p>
        <nav class="mt-4">
          <ul class="flex justify-center space-x-6">
            <li>
              <a href="#Facebook" target="_blank" class="hover:text-white transition-colors duration-300">
                Facebook
              </a>
            </li>
            <li>
              <a href="#Twiter" target="_blank" class="hover:text-white transition-colors duration-300">
                Twitter
              </a>
            </li>
            <li>
              <a href="#Instagram" target="_blank" class="hover:text-white transition-colors duration-300">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
        <p class="text-xs mt-4">
          Desarrollado por Mi Equipo | <a href="#privacy" class="hover:text-white">Política de Privacidad</a> | <a href="#terms" class="hover:text-white">Términos y Condiciones</a>
        </p>
      </div>
    </footer>
  `;

  return footer;
}
