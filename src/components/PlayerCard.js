function PlayerCard(playerData) {
  const card = document.createElement("div");
  card.className = "bg-amber-100 shadow-lg rounded-lg p-6 max-w-sm mx-auto";

  // Verificar si tenemos datos del jugador
  if (!playerData || Object.keys(playerData).length === 0) {
    card.innerHTML = `
      <p class="text-gray-500 text-center">
        No se encontraron datos del jugador.
      </p>
    `;
    return card;
  }

  // Crear la estructura de la tarjeta
  card.innerHTML = `
      <div class="player-header mb-4">
        <h2 class="text-xl font-bold text-gray-800 text-center">
          ${playerData.name || "Nombre no disponible"}
        </h2>
      </div>
      <div class="player-info space-y-2">
        <p class="text-gray-600">
          <strong class="font-semibold text-gray-800">Edad:</strong> ${
            playerData.age || "No disponible"
          }
        </p>
        <p class="text-gray-600">
          <strong class="font-semibold text-gray-800">Nacionalidad:</strong> ${
            playerData.nationality || "No disponible"
          }
        </p>
        <p class="text-gray-600">
          <strong class="font-semibold text-gray-800">Club:</strong> ${
            playerData.club || "No disponible"
          }
        </p>
      </div>
  `;

  return card;
}

export default PlayerCard;
