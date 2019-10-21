import axios from './axios.conf.js'

let baseURL = 'https://mmd.jd.com/mock/13'
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://mmd.jd.com/mock/13'
} else {
  baseURL = 'https://mmd.jd.com/mock/13'
}

function request (url = '',
  params = {},
  method = 'POST',
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
    return axios.post(url, params)
  }
}

export default request
