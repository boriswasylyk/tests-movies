



describe('Movies ', () => {
    test('GET /movies should return 200', async () => {
      const response = await supertest(app).get('/movies');
      assert.strictEqual(response.status, 200);
    });
  
    test('POST /movies should return 201', async () => {
      const response = await supertest(app).post('/movies').send({ });
      assert.strictEqual(response.status, 201);
    });
  
    test('DELETE /movies should return 204', async () => {
      const response = await supertest(app).delete('/movies/1');
      assert.strictEqual(response.status, 204);
    });
  
    test('PUT /movies/:id should return 200', async () => {
      const response = await supertest(app).put('/movies/1').send({ });
      assert.strictEqual(response.status, 200);
    });
  
    test('POST /movies/:id/actors should return 201', async () => {
      const response = await supertest(app).post('/movies/1/actors').send({ });
      assert.strictEqual(response.status, 201);
    });
  
    test('POST /movies/:id/directors should return 201', async () => {
      const response = await supertest(app).post('/movies/1/directors').send({ });
      assert.strictEqual(response.status, 201);
    });
  
    test('POST /movies/:id/genres should return 201', async () => {
      const response = await supertest(app).post('/movies/1/genres').send({ });
      assert.strictEqual(response.status, 201);
    });
  });