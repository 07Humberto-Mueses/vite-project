// server.js
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const axios = require("axios");

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const OPEN_ROUTER = process.env.OPEN_ROUTER;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

// Endpoint para obtener información del jugador
app.post("/api/player-info", async (req, res) => {
  try {
    const { playerName } = req.body;

    if (!playerName) {
      return res
        .status(400)
        .json({ error: "Se requiere el nombre del jugador" });
    }

    // Llamar a la API de DeepSeek
    const prompt = `Dame información sobre el futbolista ${playerName}. Responde solo con un objeto JSON que contenga el nombre completo, edad, nacionalidad y club actual. Por ejemplo: {"name": "Lionel Messi", "age": 35, "nationality": "Argentina", "club": "Inter Miami"}`;

    const deepseekResponse = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-r1:free",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPEN_ROUTER}`,
        },
      }
    );

    // Extraer el contenido de la respuesta
    const content = deepseekResponse.data.choices[0].message.content;

    // Intentar parsear la respuesta como JSON
    let playerData;
    try {
      // Encuentra el primer objeto JSON en la respuesta
      const jsonMatch = content.match(/\{[\s\S]*?\}/);
      if (jsonMatch) {
        playerData = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("No se encontró un objeto JSON en la respuesta");
      }
    } catch (parseError) {
      console.error("Error al parsear la respuesta:", parseError);
      return res.status(500).json({
        error: "No se pudo procesar la información del jugador",
        rawContent: content,
      });
    }

    res.json(playerData);
  } catch (error) {
    console.error("Error al obtener información del jugador:", error);
    res.status(500).json({
      error: "Error al obtener información del jugador",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
