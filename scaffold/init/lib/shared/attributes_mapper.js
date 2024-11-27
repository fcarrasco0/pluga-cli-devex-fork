exports.attributesMapper = (fields) => fields.map((field) => {
  const [key, value] = Object.entries(field)[0];
  const { name, field_type: fieldType } = value;

  return {
    key,
    name,
    field_type: fieldType || 'string',
  };
});
