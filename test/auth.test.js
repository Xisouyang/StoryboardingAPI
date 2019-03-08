const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp)

const auth = require('../src/routes/auth');
const User = require('../src/models/user');
const app = require('../server')
require('../src/data/customAPI-db')


// username is unique
// is the user successfully saved in the db

describe('auth', function() {
  it("should signup the user", function(done) {
      // create a user
      // pass user in the signup function as a parameter
      // check that the response is 200
      chai
        .request(app)
        .post('/auth/sign-up')
        .send({
          "username": "someUser",
          "email": "some@gmail.com",
          "password": "1234567"
        })
        .end((err, res) => {
          res.should.have.status(200);
          User.findOneAndDelete({ 'username': 'someUser' })
            .then(() => {
              done()
            })
            .catch(err => {
              console.log(err.message)
            })
        })
  })

  it("it should not let duplicate user be created", function(done) {
    chai
      .request(app)
      .post('/auth/sign-up')
      .send({
        "username": "aGuy",
        "email": "aGuy@gmail.com",
        "password": "1234567"
      }, { "username": "aGuy",
        "email": "aGuy@gmail.com",
        "password": "1234567"})
      .end((err, res) => {
        res.should.have.status(400)
        User.findOneAndDelete({ 'username': 'aGuy' })
          .then(() => {
            done()
          })
          .catch(err => {
            console.log(err.message)
          })
      })
  })
  it("should not let admin user be created in regular signup route", function(done) {
    chai
      .request(app)
      .post('/auth/sign-up')
      .send({
        "username": "admin",
        "email": "admin@gmail.com",
        "password": "1234567"
      })
      .end((end, res) => {
        res.should.have.status(400)
        done()
      })
  })
  //
  // it("should not let duplicate admin user be created", function(done) {
  //
  // })
  //
  // it("should fail login with incorrect password", function(done) {
  //
  // })
  //
  // it("should fail login with incorrect username", function(done) {
  //
  // })
  //
})
