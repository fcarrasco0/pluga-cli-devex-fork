const plg = require('pluga-plg');
const { expect } = require('chai');

const helper = require('../../lib/helper_methods/baz');

const event = {
  meta: {
    baseURI: process.env.BASE_URI,
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
};

describe('Helper Method: Entity List', function () {
  it('should return an array of entities', function (done) {
    helper.handle(plg, event).then((entities) => {
      expect(entities).to.be.an('array');
      entities.forEach((entity) => {
        expect(entity).to.contains.keys('label', 'value');
      });

      done();
    }).catch(done);
  });
});
