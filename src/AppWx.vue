<script>
import qd from '@jddzt/qd-mini'
qd.init({
  appId: '', // 小程序 ID，必传
  dev: true, // 是否开启 dev 模式，建议测试环境设为 true，生产环境设为 false 或不设置
  autoReport: true // 自动上报 App 启动埋点
})

export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 jddvue 名称空间, 平台判断通过 jddvuePlatform 特征字符串
     * 微信：jddvue === wx, jddvuePlatform === 'wx'
     * 京东：jddvue === jd, jddvuePlatform === 'jd'
     * h5：jddvue === window, jddvuePlatform === 'h5'
     */

    let logs
    logs = jddvue.getStorageSync({key: 'logs'}) || []
    logs.unshift(Date.now())
    jddvue.setStorage({
      key: 'logs',
      data: logs
    })
  },
  onLaunch(){
    // 获取用户信息 上报app初始化事件
    jddvue.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          jddvue.getUserInfo({
            success: res => {
              // 设置数据
              qd.setData(res.userInfo);
              // 上报数据
              qd.startApp();
            }
          });
        }
      }
    });
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
/* * {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
} */
</style>
