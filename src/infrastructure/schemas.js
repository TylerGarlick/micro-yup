import * as yup from 'yup'

export const parse = (schema = {}) => ({
  ...(schema.fields.query ? { query: yup.reach(schema, 'query') } : {}),
  ...(schema.fields.body ? { body: yup.reach(schema, 'body') } : { body: schema }),
})
