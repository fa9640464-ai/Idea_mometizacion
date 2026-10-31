module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Método no permitido" });
  const { kind, system, prompt, code } = req.body || {};
  if (process.env.ACCESS_CODE && code !== process.env.ACCESS_CODE) {
    return res.status(401).json({ error: "Código de acceso incorrecto" });
  }
  if (typeof prompt !== "string" || !prompt || prompt.length > 6000 || (system && String(system).length > 6000)) {
    return res.status(400).json({ error: "Solicitud inválida" });
  }
  const key = process.env.GEMINI_API_KEY;
  if (!key) return res.status(500).json({ error: "Falta GEMINI_API_KEY en Vercel" });
  const isImage = kind === "image";
  const model = isImage
    ? process.env.GEMINI_IMAGE_MODEL || "gemini-3.1-flash-image"
    : process.env.GEMINI_MODEL || "gemini-3-flash-preview";
  const payload = isImage
    ? { contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: "1:1" } } }
    : { contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: String(system || "") }] },
        generationConfig: { responseMimeType: "application/json" } };
  try {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify(payload)
    });
    const data = await r.json();
    if (!r.ok) return res.status(500).json({ error: (data.error && data.error.message) || "Error de la API" });
    const parts = (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) || [];
    if (isImage) {
      const p = parts.find((x) => x.inlineData);
      return res.status(200).json({ image: p ? p.inlineData.data : null });
    }
    return res.status(200).json({ text: parts.map((x) => x.text || "").join("") });
  } catch (e) {
    return res.status(500).json({ error: "No se pudo conectar con la IA" });
  }
};
