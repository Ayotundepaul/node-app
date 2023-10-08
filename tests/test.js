const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js'); // Import the running server instance
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /', () => {
    it('should return Hello, World!', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hello, World!');
                server.close();  // Close the server after tests are done
                done();
            });
    });
});
