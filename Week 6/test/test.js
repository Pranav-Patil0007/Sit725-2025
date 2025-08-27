const chai = require('chai');
const should  = chai.should();
const request = require('supertest');
const app = require('../server');



describe("Calculator API Tests", () => {
    //1.Addition Test
    it("should return 5 when adding 2 + 3",async () => {
        const res = await request(app).get('/res')
        .query({ a: 2, b: 3, o: '+' });;
        res.status.should.equal(200);
        res.text.should.include("The result of 2 + 3 = 5");
    });

    //2. Subtraction Test
    it("should return 6 when subtracting 10 - 4", async () => {
        const res = await request(app).get('/res')
        .query({a:10, b: 4,o:'-'});
        res.status.should.equal(200);
        res.text.should.include("The result of 10 - 4 = 6");
    });

    //3. Division by zero test
    it("should return error when dividing by zero", async () => {
        const res = await request(app).get('/res')
        .query({a:5,b:0,o:'/'});
        res.status.should.equal(400);
        res.text.should.include("Error: Cannot divide by zero");
    });

    //4. Invalid Input Test
    it("should return error for invalid input",async () => {
        const res = await request(app).get('/res')
        .query({a:'abc',b:10,o:'*'});
        res.status.should.equal(400);
        res.text.should.include("Error: Please enter two valid numbers");
    });

    //5. Return Error for invalid operations
    it("should return error for invalid operations", async() => {
        const res = await request(app).get('/res')
        .query({a:4,b:2,o:'%'});
        res.status.should.equal(400);
        res.text.should.include("Error: Use valid operation +,-,* or /.");
    });
});