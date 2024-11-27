exports.buildError = (plg, label, err) => {
  if (!err.response) throw plg.errors.error(`${label}: ${err.message}`);

  const { data, statusText } = err.response;
  const errors = {};

  errors[label] = data || statusText;
  const errorMessage = JSON.stringify(errors);

  throw plg.errors.error(errorMessage);
};
