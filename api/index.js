const express = require('express');
const app = express();
app.use(express.json());

const products = [{ id: 1, name: "Laptop" }];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(3000, () => console.log('API running on port 3000'));
