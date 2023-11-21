


describe('Actors ', () => {
    test('GET /actors should return 200', async () => {
      const response = await supertest(app).get('/actors');
      assert.strictEqual(response.status, 200);
    });
  
    test('POST /actors should return 201', async () => {
      const response = await supertest(app).post('/actors').send({ });
      assert.strictEqual(response.status, 201);
    });
  
    test('DELETE /actors/:id should return 204', async () => {
      const response = await supertest(app).delete('/actors/1');
      assert.strictEqual(response.status, 204);
    });
  
    test('PUT /actors/:id should return 200', async () => {
      const response = await supertest(app).put('/actors/1').send({  });
      assert.strictEqual(response.status, 200);
    });
  });
