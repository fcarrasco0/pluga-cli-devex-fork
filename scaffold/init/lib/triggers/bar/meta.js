const { attributesMapper } = require('../../shared/attributes_mapper');

const triggerAttributes = [
  { text: { name: { pt_BR: 'Text', en: 'Text' }, field_type: 'string' } },
  { quantity: { name: { pt_BR: 'Quantity', en: 'Quantity' }, field_type: 'integer' } },
  { value: { name: { pt_BR: 'Value', en: 'Value' }, field_type: 'decimal' } },
  { date: { name: { pt_BR: 'Date (aaaa-MM-ddTHH:mm:ss)', en: 'Date (yyyy-MM-ddTHH:mm:ss)' }, field_type: 'datetime' } },
];

exports.metaConfig = {
  name: { pt_BR: 'Bar', en: 'Bar' },
  description: { pt_BR: 'Bar description', en: 'Bar description' },
  trigger_fields: attributesMapper(triggerAttributes),
  idempotent: ['id'],
  trigger_type: 'polling',
};
