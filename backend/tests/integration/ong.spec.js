const request = require('supertest');
const app = require('../../src/app')
describe ('ONG', () => {
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "ONG ninvit",
            email: "ninvit@gmail.com",
            whatsapp: "123123123",
            city: "Rio",
            uf: "RJ"
        });

        console.log(response.body);
    });
});