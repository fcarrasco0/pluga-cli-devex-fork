const plg = require('pluga-plg');
const { expect } = require('chai');

const app = require('../lib');

const event = {
  meta: {
    baseURI: process.env.BASE_URI,
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
};

describe('App: Ping', function () {
  it('Should returns 200', function (done) {
    app.ping(plg, event).then((result) => {
      expect(result).to.not.equal(null);
      expect(result).to.includes.keys('key1'); // expected key wich validates token

      done();
    }).catch(done);
  });

  it('Should not authenticate', function (done) {
    event.auth.api_token = 'fake_token';

    app.ping(plg, event).catch((err) => {
      expect(err.message).includes('error message specific to your API authentication');

      done();
    }).catch(done);
  });
});
