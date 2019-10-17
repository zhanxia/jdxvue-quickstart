import Vue from 'vue'
import AppJd from './App'
import AppWx from './AppWx'

Vue.config.productionTip = false
AppJd.mpType = 'app'
AppWx.mpType = 'app'
// const app = new Vue(AppWx)
const app = jddvuePlatform === 'jd' ? new Vue(AppJd) : new Vue(AppWx)

app.$mount()
