import { parseQueryStringFromUri } from '../src/infrastructure/urls'

describe(`infrastructure#urls`, () => {
  
  it(`parsesFrom a valid uri`, async () => {
    const URL = 'https://tylergarlick.com?name=Tyler'
    const result = parseQueryStringFromUri(URL)
    expect(result.name).toBe('Tyler')
  })
  
  it(`parsesFrom a valid uri, but no query string parameters`, async () => {
    const URL = 'https://tylergarlick.com'
    const result = parseQueryStringFromUri(URL)
    
    expect(result).toBeTruthy()
  })

})
