<script>
import qd from './utils/qd-vapp.js'
qd.init()

export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 jdmpvue 名称空间, 平台判断通过 jdmpvuePlatform 特征字符串
     * 微信：jdmpvue === wx, jdmpvuePlatform === 'wx'
     * 头条：jdmpvue === tt, jdmpvuePlatform === 'tt'
     * 百度：jdmpvue === swan, jdmpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：jdmpvue === my, jdmpvuePlatform === 'my'
     */

    let logs
    if (jdmpvuePlatform === 'my') {
      logs = jdmpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      jdmpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = jdmpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      jdmpvue.setStorageSync('logs', logs)
    }
  },
  onLaunch(){
    // 获取用户信息 上报app初始化事件
    jdmpvue.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          jdmpvue.getUserInfo({
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
  padding: 200rpx 0;
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
