require('dotenv').config();
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
const jwt = require('jsonwebtoken');

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
        expect(response.body).toHaveProperty('token');
        
    })

    it('access permited',  async () =>{
        const User = "6b60353b";
        const response = await request(app)
        .post('/sessions')
        .send({
            userId: User,
            userPassword: "1234",
        });

        const token = jwt.sign({id: User}, process.env.APP_SECRET);

        const responseone = await request(app)
        .get('/dashboard')
        .set('Authorization', `Bearer ${token}`)

        expect(responseone.status).toBe(200);
    })

    it('access blank', async () =>{

        const User = "6b60353b";
        const response = await request(app)
        .post('/sessions')
        .send({
            userId: User,
            userPassword: "1234",
        });

        

        const responseone = await request(app)
        .get('/dashboard')
       

        expect(responseone.status).toBe(401);
        
    })

    it('access not permited', async () =>{
        const User = "6b60353b";
        const response = await request(app)
        .post('/sessions')
        .send({
            userId: User,
            userPassword: "1234",
        });

        const token = jwt.sign({id: User}, process.env.APP_SECRET);
 
        const responseone = await request(app)
        .get('/dashboard')
        .set('Authorization', `Bearer 12131`) 
        
        expect(responseone.status).toBe(401);
    })

       

    
})

