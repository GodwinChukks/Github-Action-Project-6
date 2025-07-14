const request = require('supertest');
const express = require('express');

const app = express();
app.get('/products', (req, res) => {
  res.json([{ id: 1, name: "Laptop" }]);
});

test('GET /products returns product list', async () => {
  const res = await request(app).get('/products');
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(1);
});
