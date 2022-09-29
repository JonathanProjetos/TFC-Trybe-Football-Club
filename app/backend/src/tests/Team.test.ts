import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/TeamsModel';
import MockTeam from '../tests/mock/MockTeam';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando end-point Team findAll', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(Team, "findAll").resolves(MockTeam as Team[]);
  });

  after(()=>{
    (Team.findAll as sinon.SinonStub).restore();
  })

  it('Testa o retorno bem secedido', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams')
       .send(MockTeam)

    expect(chaiHttpResponse.status).to.equals(200)
    expect(chaiHttpResponse.body).to.be.not.empty;
  });

});


describe('Testando end-point Team findOne', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(Team, "findOne").resolves(MockTeam[0] as Team);
  });

  after(()=>{
    (Team.findOne as sinon.SinonStub).restore();
  })

  it('Testa o retorno bem secedido', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams/:id')
       .send(MockTeam)

    expect(chaiHttpResponse.status).to.equals(200)
    expect(chaiHttpResponse.body).to.be.not.empty;
  });

});