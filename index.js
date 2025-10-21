const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Permitir requisições externas (CORS)
const cors = require("cors");
app.use(cors());

// Rotas simples
app.get("/", (req, res) => {
  res.send("API online no Render!");
});

app.get("/soma/:a/:b", (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.json({ resultado: a + b });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
