import axios from 'axios'

let baseURL = '//m.jr.jd.com/mjractivity'
if (process.env.NODE_ENV === 'production') {
  baseURL = '//m.jr.jd.com/mjractivity'
} else {
  baseURL = '//m.jr.jd.com/mjractivity'
}

const instance = axios.create({
  baseURL
})

// 让ajax请求头携带cookie
instance.defaults.withCredentials = true
instance.defaults.crossDomain = true
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
instance.defaults.headers.post['Content-Type'] = 'application/json'

instance.interceptors.request.use(function (config) {
  // if (config.method === 'post') {
  //   config.data = qs.stringify(config.data)
  // } else {
  config.params = config.params || {}
  // }

  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (res) {
  let {code} = res.data || {}

  // 未登录, 跳登录
  if (code === 3) {
    let enLink = encodeURIComponent(encodeURIComponent(location.href))
    let userUrl = `https://passport.m.jd.com/user/login.action?returnurl=http%3a%2f%2fjrappgw.jd.com%2fwxjdissue%2fjdissueWX%2fdispatch%3furl%3d${enLink}`

    window.location.href = userUrl
    return
  }
  return res.data
}, function (error) {
  return Promise.reject(error)
})

export default instance
