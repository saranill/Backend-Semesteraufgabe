import chai from 'chai';
import chaiHttp from 'chai-http';
import { app as server } from '../server.js';
import {describe} from "mocha";

let should = chai.should();

chai.use(chaiHttp);

describe('Plants', () => {
    describe('/GET /plants', () => {
        it('it should GET all the data', (done) => {
            chai.request(server)
                .get('/plants')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(3);
                    done();
                });
        });
    });

});
