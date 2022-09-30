import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/UserModel';

import { Response } from 'superagent';
import { ObjectUser } from './mock/MockUser';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando end-point /login/validate', () => {

  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(User, "findOne").resolves({ role: 'admin' } as User);
  });

  after(() => {
    (User.findOne as sinon.SinonStub).restore();
  })


  it('Testando o retorno em caso de sucesso', async () => {
    const email = 'admin@admin.com'
    const test = 'test'
    chaiHttpResponse = await chai
      .request(app)
      .get('/login/validate')
      .auth(test,test)
      .send(email)

    expect(chaiHttpResponse.body).to.not.empty;
  });
});
