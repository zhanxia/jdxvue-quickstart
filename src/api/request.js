import axios from './axios.conf.js'

// let baseURL = 'https://mmd.jd.com/mock/13'
let baseURL = 'https://m.jr.jd.com/mjractivity'
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://m.jr.jd.com/mjractivity'
} else {
  baseURL = 'https://m.jr.jd.com/mjractivity'
}

function request (url = '',
  params = {},
  method = 'GET',
  contentType = 'application/json',
  ...rest
) {
  if (jddvuePlatform !== 'h5') {
    params = JSON.stringify(params)
    const promise = new Promise((resolve, reject) => {
      jddvue.showLoading({
        title: '加载中...'
      })
      jddvue.request({
        url: `${baseURL}${url}`,
        data: {
          reqData: params
        },
        method: method,
        success: function (res) {
          resolve(res.data)
        },
        error: function (err) {
          console.log(err)
          reject(err)
        },
        complete: (e) => {
          jddvue.hideLoading()
        }
      })
    })

    return promise
  } else {
    return axios.post('/mockdata', params)
  }
}

export default request
