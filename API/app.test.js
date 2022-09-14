const request = require('supertest');

const app = require('./app')

describe('GET /',() => {

    it('deve responder um json com status 200', (done) => {
       request(app)
        .get('/')
        .expect('Content-type', /json/)
        .expect(200);
        
    })

});

describe('GET /id',() =>{
    it('deve responder um json com status 200',(done) =>{
        request(app)
            .get('/1')
            .expect('Content-type',/json/)
            .expect(200,done);
        })
    it('deve responder com status 404 se não existir id',(done) =>{
        request(app)
        .get('/99999999')
        .expect(404,done);
    } )
}); 
    