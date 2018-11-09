import * as yup from 'yup'
import { parse } from '../src/infrastructure/schemas'


describe(`infrastructure#schemas`, () => {
  
  it(`can separate the query schema`, async () => {
    const schema = yup.object().shape({
      query: yup.object().shape({
        name: yup.string().required(),
      }),
    })
    
    const { query } = parse(schema)
    
    expect(query).toBeDefined()
    expect(query.fields.name).toBeDefined()
  })
  
  it(`can separate out the body with body property in schema`, async () => {
    const schema = yup.object().shape({
      body: yup.object().shape({
        name: yup.string().required(),
      }),
    })
    
    const { body } = parse(schema)
    
    expect(body).toBeDefined()
    expect(body.fields.name).toBeDefined()
  })
  
  it(`can separate out the body with body property in schema`, async () => {
    const schema = yup.object().shape({
      name: yup.string().required(),
    })
    
    const { body } = parse(schema)
    
    expect(body).toBeDefined()
    expect(body.fields.name).toBeDefined()
  })
  
  
})
