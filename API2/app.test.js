const request = require('supertest');

describe('GET /',() => {

    it('deve responder um json com status 200', () => {
       request(app)
       .get('/')
       .expect('Content-type', /json/)
       .expect(200)
       .done();
    })

});
    