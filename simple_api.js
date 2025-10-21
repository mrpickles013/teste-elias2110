// Arquivo: index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando!' });
});

// Rota GET de exemplo
app.get('/api/dados', (req, res) => {
  res.json({
    dados: [
      { id: 1, nome: 'Item 1' },
      { id: 2, nome: 'Item 2' }
    ]
  });
});

// Rota POST de exemplo
app.post('/api/enviar', (req, res) => {
  const dados = req.body;
  res.json({
    sucesso: true,
    recebido: dados
  });
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});