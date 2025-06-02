const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('D&D Admin API працює');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер запущено на порту ${PORT}`));