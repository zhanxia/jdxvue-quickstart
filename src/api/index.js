import url from './url.js'
import * as mock from './mock'
import request from './request'

let ISMOCK = false
if (process.env.NODE_ENV === 'production') {
  ISMOCK = false
}

export async function queryIndexData (params = {}) {
  let resultData = {}
  try {
    resultData = await request(url.mockData, params)
  } catch (e) {

  } finally {
    if (ISMOCK) {
      resultData = mock.indexData
      console.warn(url.topInfo + ' is mocked.')
    }
  }

  return resultData
}