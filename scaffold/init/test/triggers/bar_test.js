const plg = require('pluga-plg');
const { expect } = require('chai');

const trigger = require('../../lib/triggers/bar');

const day = 60 * 60 * 24 * 1000;
const oneWeekAgo = Date.now() - (7 * day);

const event = {
  meta: {
    baseURI: process.env.BASE_URI,
    lastReqAt: oneWeekAgo,
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
  input: {},
  payload: {},
};

describe('Trigger: [trigger entity]', () => {
  it('should return a [trigger entity]', (done) => {
    trigger.handle(plg, event).then((result) => {
      expect(result).to.be.an('object'); // 'array' if its polling
      expect(result).to.contain.keys([
        'id',
        'key 1',
        'key 2',
      ]);

      done();
    }).catch(done);
  });

  it('should return a sample of [trigger entity]', (done) => {
    trigger.sample(plg, event).then((result) => {
      expect(result).to.be.an('object');
      expect(result).to.contain.keys([
        'id',
        'key 1',
        'key 2',
      ]);

      done();
    }).catch(done);
  });

  it('should test trigger meta fields', () => {
    const {
      name, description, trigger_fields: triggerFields, idempotent,
    } = trigger.meta;

    expect(name.pt_BR).to.be.an('string');
    expect(description.pt_BR).to.be.an('string');
    expect(triggerFields.fields).to.be.an('array');
    expect(idempotent).to.include('id');

    triggerFields.fields.forEach((field) => {
      expect(field).to.have.keys([
        'key',
        'name',
        'field_type',
      ]);
    });
  });

  it('should returns remote trigger fields', function (done) {
    trigger.fields(plg, event).then((fields) => {
      expect(fields).to.be.an('array');

      fields.forEach(
        (field) => expect(field).contains.keys(
          'key',
          'name',
          'field_type',
        ),
      );

      done();
    }).catch(done);
  });

  it('should returns trigger custom fields', function (done) {
    trigger.custom_fields(plg, event).then((fields) => {
      expect(fields).to.be.an('array');

      fields.forEach(
        (field) => expect(field).contains.keys(
          'key',
          'name',
          'field_type',
        ),
      );

      done();
    }).catch(done);
  });
});

describe('Trigger: Resthook flow', () => {
  it('should create a webhook', (done) => {
    trigger.subscribe(plg, event).then((result) => {
      expect(result).to.be.not.a('null');
      expect(result).contains.key('id');
      event.input.webhook_id = result.id;

      done();
    }).catch(done);
  });

  it('should delete webhook created', (done) => {
    trigger.unsubscribe(plg, event).then((result) => {
      expect(result).to.not.eq(null);

      done();
    }).catch(done);
  });
});
