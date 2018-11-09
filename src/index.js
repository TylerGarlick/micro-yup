import { send, json } from 'micro'
import yup from 'yup'
import Url from 'url'

/**
 * Creates a validation pre-processor for a given endpoint
 *
 * @param {Object} schema - Yup schema
 * @param {String} [message] - Validation Message
 */
export default (schema, message = '') => fn => {
  
  return async (req, res) => {
    const { query } = Url.parse(req.url)
    
    const body = await json(req)
    if (body) {
    
    }
    
  }
  
}
