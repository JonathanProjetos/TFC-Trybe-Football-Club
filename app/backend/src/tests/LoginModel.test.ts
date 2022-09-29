import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/UserModel';
import { ObjectUser, BodyLogin } from './mock/MockUser'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando end-point Login', () => {

  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({
        ...ObjectUser
      } as User);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Testando email', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(BodyLogin)

    const test = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    expect(BodyLogin.email).to.exist;
    expect(test.test(BodyLogin.email)).to.be.true;
  });

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
