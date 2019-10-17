<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import qd from './utils/qd-vapp.js'
// qd.init()

export default {
  created () {console.log("jddvue",jddvue)
    let logs
    logs = JSON.parse(localStorage.getItem('logs')) || []
    logs.unshift(Date.now())
    localStorage.setItem('logs', JSON.stringify(logs))
  },
  onLaunch(){
    
  },
  log () {
    console.log(`log at:${Date.now()}`)
  },
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200px 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
