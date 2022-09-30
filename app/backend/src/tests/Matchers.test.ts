import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/Matches';
import { ObjectMatches, ObjectBodyMatches, ObjectMotchesResult, token } from './mock/Matches';
// import IMatchers from './mock/IMatchersMock';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando end-point Matches findAll', () => {

  let chaiHttpResponse: Response;

  before(async () => {
    return sinon.stub(Matches, "findAll").resolves([...ObjectMatches] as []);
  });

  after(()=>{
    (Matches.findAll as sinon.SinonStub).restore();
  })

  it('Testando matches status 200', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/matches')
      .send()

      expect(chaiHttpResponse.status).to.equals(200);
  });

  it('Testando matches body', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/matches')
      .send()

      expect(chaiHttpResponse.body).to.not.empty;
  });

});


describe('Testando end-point Matches create', () => {

  let chaiHttpResponse: Response;

  before(async () => {
    return sinon.stub(Matches, "create").resolves(ObjectMotchesResult as Matches);
  });

  after(()=>{
    (Matches.create as sinon.SinonStub).restore();
  })

  it('Testando matches body', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/matches')
      .send(ObjectBodyMatches)

      expect(chaiHttpResponse.body).to.not.empty;
  });

});
