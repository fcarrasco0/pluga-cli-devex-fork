const { attributesMapper } = require('../../shared/attributes_mapper');

const actionAttributes = [
  { text: { name: { pt_BR: 'Text', en: 'Text' }, field_type: 'string' } },
  { quantity: { name: { pt_BR: 'Quantity', en: 'Quantity' }, field_type: 'integer' } },
  { value: { name: { pt_BR: 'Value', en: 'Value' }, field_type: 'decimal' } },
  { date: { name: { pt_BR: 'Date (aaaa-MM-ddTHH:mm:ss)', en: 'Date (yyyy-MM-ddTHH:mm:ss)' }, field_type: 'datetime' } },
];

exports.metaConfig = {
  name: {
    pt_BR: '{{actionName}}',
    en: '{{actionName}}',
  },
  description: {
    pt_BR: '{{actionName}} description',
    en: '{{actionName}} description',
  },
  action_fields: {
    fields: [
      {
        key: 'exampleKey',
        name: {
          pt_BR: 'Example',
          en: 'Example',
        },
        description: {
          pt_BR: "'Example' field description",
          en: "'Example' field description",
        },
        required: true,
        field_type: 'custom',
        data_type: 'string',
      },
    ],
  },
  attributes: {
    type: 'local',
    fields: attributesMapper(actionAttributes),
  },
};
