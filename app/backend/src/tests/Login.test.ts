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
    sinon.stub(User, "findOne").resolves({...ObjectUser} as User);
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

  it('Testando Password', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send(BodyLogin)


    expect(BodyLogin.password).to.exist;
    expect(BodyLogin.password.length > 6).to.be.true;
  });


  it('Testando o retorno em caso de sucesso', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send(BodyLogin)

    expect(chaiHttpResponse.status).to.equals(200);
    expect(chaiHttpResponse.body).to.have.property('token')
  });
});
