import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { obejectResponse, objectTeamMatchers } from './mock/ILeaderBoardHome'

import { Response } from 'superagent';
import Team from '../database/models/TeamsModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando end-point LeaderBoardHome', () => {

  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(Team, 'findAll').resolves(objectTeamMatchers as any);
  });

  after(()=>{
    (Team.findAll as sinon.SinonStub).restore();
  })

  it('Testando retorno leaderBoardHome', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/leaderBoard/home')

    
    expect(chaiHttpResponse.body.length).to.equal(16);
    expect(chaiHttpResponse.body).to.be.deep.equals(obejectResponse);
  });

});
