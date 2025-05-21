// src/services/api.js
export async function fetchPlayerInfo(playerName) {
  try {
    // Accede a la variable de entorno (asegúrate de que está configurada correctamente)
    const OPEN_ROUTER = import.meta.env.VITE_OPEN_ROUTER;

    if (!OPEN_ROUTER) {
      console.error("API key no encontrada");
      return null;
    }

    console.log("Usando API key:", OPEN_ROUTER.substring(0, 5) + "..."); // Muestra los primeros 5 caracteres para verificación

    const prompt = `Actúa como una base de datos deportiva. Necesito información sobre el futbolista "${playerName}".
    Responde ÚNICAMENTE con un objeto JSON que contenga exactamente los siguientes campos:
    - name: nombre completo del jugador
    - age: edad actual (número)
    - nationality: país de origen
    - club: equipo actual donde juega
    
    Si no encuentras información sobre este jugador, responde con un objeto JSON con valores null.
    Ejemplo de formato de respuesta: {"name": "Lionel Messi", "age": 36, "nationality": "Argentina", "club": "Inter Miami"}`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPEN_ROUTER}`,
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [{ role: "user", content: prompt }],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Error response:", errorData);
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    // Intentar extraer el JSON de la respuesta
    const jsonMatch = content.match(/\{[\s\S]*?\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    } else {
      console.error("No se encontró un objeto JSON en la respuesta:", content);
      return null;
    }
  } catch (error) {
    console.error("Error fetching player info:", error);
    return null;
  }
}
