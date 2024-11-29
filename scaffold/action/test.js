const plg = require('pluga-plg');
const { expect } = require('chai');

const action = require('../../lib/actions/foo');

const event = {
  meta: {
    baseURI: process.env.BASE_URI,
    transactionsCount: 0,
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
  input: {
    // action input
  },
};

describe('Action: [action name]', () => {
  // rename var accordingly to your specific action entity
  let actionEntityId = null;

  it('should create new object', (done) => {
    action.handle(plg, event).then((result) => {
      actionEntityId = result.id;

      expect(result).to.include.keys(
        'id',
        'key1',
        'key2',
        'key3',
      );

      done();
    }).catch(done);
  });

  it('should update object', async () => {
    event.input.action_key = 'Test Updated';

    const result = await action.handle(plg, event);

    expect(result.id).to.eq(actionEntityId);
    expect(result).to.include.keys(
      'id',
      'key1',
      'key2',
      'key3',
    );
  });

  it('should return action custom fields', (done) => {
    action.custom_fields(plg, event).then((fields) => {
      expect(fields).to.be.an('array');

      fields.forEach((field) => {
        expect(field.visible).to.eq(true);
        expect(field).to.include.keys(
          'key',
          'name',
          'description',
          'visible',
          'field_type',
          'data_type',
        );
      });

      done();
    }).catch(done);
  });

  it('Should Return Action Meta Fields', () => {
    const actionFields = action.meta.action_fields.fields;
    const actionAttributes = action.meta.attributes.fields;

    expect(action.meta).to.include.keys(
      'name',
      'description',
      'action_fields',
      'attributes',
    );

    expect(actionFields).to.be.a('array');
    actionFields.forEach((field) => {
      expect(field).to.include.keys(
        'key',
        'name',
        'description',
        'field_type',
        'data_type',
      );
    });

    expect(actionAttributes).to.be.a('array');
    actionAttributes.forEach((attribute) => {
      expect(attribute).to.include.keys(
        'key',
        'name',
        'field_type',
      );
    });
  });

  it('Should return a sample [action entity]', (done) => {
    action.sample(plg, event).then((sample) => {
      expect(sample).to.be.an('object');
      expect(sample).to.include.keys(
        'id',
        'key1',
        'key2',
        'key3',
      );

      done();
    }).catch(done);
  });
});
