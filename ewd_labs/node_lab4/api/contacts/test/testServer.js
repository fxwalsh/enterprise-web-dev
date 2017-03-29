import supertest from "supertest";
import {server} from  "./../../../server.js"
import should from "should";

// This agent refers to PORT where program is runninng.

// UNIT test begin

describe("Contacts GET unit test",function(){
  this.timeout(10000);
  // #1 return a collection of json documents

  it("should return collection of JSON documents",function(done){

    // calling home page api
    supertest(server)
    .get("/api/contacts")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

  // #2 add a contact
  it("should add a contact",function(done){

    // post to /api/contacts
    // calling home page api
    supertest(server)
    .post('/api/contacts')
    .send({name:"Contact 99",address:"123 Strand St"})
    .expect("Content-type",/json/)
    .expect(201)
    .end(function(err,res){
      res.status.should.equal(201);
      done();
    });
  });
});
