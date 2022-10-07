import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { objectQueryAway, objectResponseAway } from './mock/ILeaderBoardAway'

import { Response } from 'superagent';
import Team from '../database/models/TeamsModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando end-point LeaderBoardAway', () => {

  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(Team, 'findAll').resolves(objectQueryAway as any);
  });

  after(()=>{
    (Team.findAll as sinon.SinonStub).restore();
  })

  it('Testando retorno leaderBoardAway', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/leaderBoard/away')

    
    expect(chaiHttpResponse.body.length).to.equal(16);
    expect(chaiHttpResponse.body).to.be.deep.equals(objectResponseAway);
  });

});