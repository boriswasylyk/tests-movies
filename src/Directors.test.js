



describe('Directors ', () => {
    test('GET /directors should return 200', async () => {
      const response = await supertest(app).get('/directors');
      assert.strictEqual(response.status, 200);
    });
  
    test('POST /directors should return 201', async () => {
      const response = await supertest(app).post('/directors').send({ });
      assert.strictEqual(response.status, 201);
    });
  
    test('DELETE /directors/:id should return 204', async () => {
      const response = await supertest(app).delete('/directors/1');
      assert.strictEqual(response.status, 204);
    });
  
    test('PUT /directors/:id should return 200', async () => {
      const response = await supertest(app).put('/directors/1').send({ });
      assert.strictEqual(response.status, 200);
    });
  });