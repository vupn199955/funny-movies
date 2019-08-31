//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
const dotenv = require('dotenv');
dotenv.config();


chai.use(chaiHttp);
//Our parent block
describe('User', () => {

  describe('/POST login/register with correct user info', () => {
      it('it should GET the token', (done) => {
        let user = {
          "username":"vupn199955@gmail.com",
          "password":"Khanhtrinh12"
        }
        chai.request(server)
            .post('/api/users/login')
            .send(user)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('token')
              done();
            });
      });
  });

  describe('/POST login/register with incorrect password', () => {
    it('it should RES the bad request', (done) => {
      let user = {
        "username":"vupn199955@gmail.com",
        "password":"asdasdasd"
      }
      chai.request(server)
          .post('/api/users/login')
          .send(user)
          .end((err, res) => {
            res.should.have.status(401);
            done();
          });
    });
  });

  describe('/POST login/register with empty password', () => {
    it('it should RES the bad request', (done) => {
      let user = {
        "username":"vupn199955@gmail.com",
        "password":""
      }
      chai.request(server)
          .post('/api/users/login')
          .send(user)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
    });
  });

  describe('/POST login/register with empty value', () => {
    it('it should RES the bad request', (done) => {
      let user = {
        "username":"",
        "password":""
      }
      chai.request(server)
          .post('/api/users/login')
          .send(user)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
    });
  });

});