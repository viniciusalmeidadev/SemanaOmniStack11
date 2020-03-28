const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('LogIn', () =>{
    beforeEach(async ()=>{
        
        await connection.migrate.latest();
    });

    afterAll( async ()=>{
       
       await connection.destroy();
    })

    it('new session LogIn', async ()=>{
        const response = await request(app)
        .post('/sessions')
        .send({
            userId: "6b60353b",
            userPassword: "1234",
        });


       
        console.log(response.body);
        
    })
})

