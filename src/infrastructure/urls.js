import Url from 'url'
import qs from 'qs'

/**
 * Parses the querystring parameters into an object
 *
 * @param {String} uri - The Uri
 *
 * @returns {Object}
 */
export const parseQueryStringFromUri = (uri = '') =>
  qs.parse(Url.parse(uri).query)
