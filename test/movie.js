//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
const dotenv = require('dotenv');
dotenv.config();


chai.use(chaiHttp);
//Our parent block
describe('Movie', () => {

  describe('/GET movies', () => {
    it('it should GET all movies', (done) => {
      chai.request(server)
          .get('/api/movies')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
          });
    });
  });

  describe('/POST share movie with no authorization', () => {
    it('it should RES the error Unauthorization', (done) => {
      chai.request(server)
          .get('/api/movies/share/asdaj78')
          .end((err, res) => {
            res.should.have.status(404);
            done();
          });
    });
  });

  describe('/POST share movie with youtube video id incorrect', () => {
    it('it should RES the error Not Found', (done) => {
      let user = {
        "username":"vupn199955@gmail.com",
        "password":"Khanhtrinh12"
      }
      // get access token
      chai.request(server)
        .post('/api/users/login')
        .send(user)
        .end((err, res) => {
          // share movie
          chai.request(server)
            .get('/api/movies/share/asdaj78')
            .set('authorization', res.body.token)
            .end((err, res) => {
              res.should.have.status(400);
              done();
            });
        });
    });
  });

  describe('/POST share movie with youtube video id is correct', () => {
    it('it should RES the error Not Found', (done) => {
      let user = {
        "username":"vupn199955@gmail.com",
        "password":"Khanhtrinh12"
      }
      // get access token
      chai.request(server)
        .post('/api/users/login')
        .send(user)
        .end((err, res) => {
          // share movie
          chai.request(server)
            .get('/api/movies/share/xrg46DhBJjI')
            .set('authorization', res.body.token)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('title');
              res.body.should.have.property('videoId');
              done();
            });
        });
    });
  });
});