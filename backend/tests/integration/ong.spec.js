const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () =>{
    beforeEach(async ()=>{
        
        await connection.migrate.latest();
    });

    afterAll( async ()=>{
       
       await connection.destroy();
    })

    it('should be able to create a new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name:"ola",
            email:"ola@ola.com",
            whatsapp:"1999999999",
            city:"rio do sul",
            uf: "sp",
            password: "1234",
        });

        expect(response.body).toHaveProperty('id');
        
        expect(response.body.id).toHaveLength(8);
        expect(response.body).toHaveProperty('password');
        console.log(response.body);
        
    })
})