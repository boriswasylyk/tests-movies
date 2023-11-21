



describe('Genres ', () => {
    test('GET /genres should return 200', async () => {
      const response = await supertest(app).get('/genres');
      assert.strictEqual(response.status, 200);
    });
  
    test('POST /genres should return 201', async () => {
      const response = await supertest(app).post('/genres').send({  });
      assert.strictEqual(response.status, 201);
    });
  
    test('DELETE /genres/:id should return 204', async () => {
      const response = await supertest(app).delete('/genres/1');
      assert.strictEqual(response.status, 204);
    });
  
    test('PUT /genres/:id should return 200', async () => {
      const response = await supertest(app).put('/genres/1').send({ });
      assert.strictEqual(response.status, 200);
    });
  });