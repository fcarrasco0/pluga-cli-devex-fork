/**
 * Trigger handler
 *
 * @param {object} plg - Pluga developer platform toolbox.
 * @param {object} plg.axios - [axios](https://github.com/axios/axios)
 *
 * @param {object} event - Event bundle to handle.
 * @param {object} event.meta - Pluga event meta data.
 * @param {string} event.meta.baseURI - Environment base URI.
 * @param {number} event.meta.lastReqAt - Last task handle timestamp.
 * @param {object} event.auth - Your app.json auth fields.
 * @param {object} event.input - Your meta.json fields.
 *
 * @returns {Promise} Promise object represents an array of resources to handle.
 */

const { metaConfig } = require('./meta');

exports.handle = (plg, event) => {
  /**
   * Use plg.axios for HTTP requests
   *
   * return plg.axios({
   *   method: 'get',
   *   url: `${event.meta.baseURI}/bar`,
   *   headers: {
   *     Authorization: `Bearer ${event.auth.access_token}`,
   *   },
   * }).then((res) => res.data).catch((err) => {
   *   throw plg.errors.error(err.response.data.error);
   * });
   */
};

exports.meta = metaConfig;
