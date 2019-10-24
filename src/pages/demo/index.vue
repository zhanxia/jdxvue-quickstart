<template>
  <div>
    <img :src="indexData.title.imgurl" class="title" />
    <div v-for="item in indexData.bannerList" class="banner-item">
      <img class="banner" :src="item.imgurl" @click="_goPage(item.jumpurl)"/>
    </div>
    <img :src="indexData.button.imgurl" class="button"  @click="_goNativePage"/>
  </div>
</template>

<script>
import * as api from '@/api'
export default {
  data () {
    return {
      indexData:{
        bannerList:[],
        button:{},
        share:{},
        title: {
          'imgurl': 'http://img30.360buyimg.com/jr_image/jfs/t1/83444/16/12592/382517/5da04c59E33a6dcf9/d3b0b9936ad65d33.png'
        }
      },
      jddvuePlatform:jddvuePlatform
    }
  },

  components: {
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (jddvuePlatform != 'h5') {
        jddvue.switchTab({ url })
      } else {
        this.$router.push({ path:'/logs'})
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    _goPage(url){
      if (jddvuePlatform != 'h5') {
        url = `../webview/main?pageUrl=${encodeURIComponent(url)}`;
        jddvue.navigateTo({
          url
        })
      } else {
        window.open(url)
      }
    },
    _goNativePage(){
      const h5url = 'https://bao.tjjt360.com/insurance/insuranceList/jrpt/homeList?sid=129d60f2e40130193729ff6f86dea1ew&utm_source=Android%2aurl%2a1571313398707&utm_medium=jrappshare&utm_term=wxfriends'
      if (jddvuePlatform != 'h5') {
        const url = `../webview/main?pageUrl=${encodeURIComponent(h5url)}`;
        jddvue.navigateTo({
          url
        })
      } else {
        window.open(h5url)
      }
    },
    // request
    queryData(){
      const self = this;
      api.queryIndexData().then(res => {
        console.log("res",res)
        self.indexData = {
          ...self.indexData,
          ...res
        };
      });
      // jddvue.showLoading({
      //   title: '加载中...'
      // })
      // console.log("res1111")
      // jddvue.request({
      //   // url: 'http://mmd.jd.com/mock/13/mockdata',
      //   url: 'https://m.jr.jd.com/mjractivity/data_source_100002476.json',
      //   param:'',
      //   header: {
      //     'content-type': 'application/json'
      //   },
      //   success: function (res) {
      //     console.log("res1-success",res)
      //     self.indexData = {
      //       ...self.indexData,
      //       ...res.data
      //     };
      //   },
      //   fail: function (err) {
      //     console.log("res1-err",err)
      //   },
      //   complete: (e) => {
      //     console.log("res1-complete",e)
      //     jddvue.hideLoading()
      //   }
      // })
    }
  },

  created () {
    console.log("jddvuePlatform",jddvuePlatform)
    this.queryData();
  }
}
</script>

<style scoped>
.title{
  width:694px;
  height:276px;
  display: block;
  margin: 0 auto;
}
.banner{
  width:694px;
  height:356px;
  display: block;
  margin: 0 auto;
}
.banner-item{
  margin-top: 20px;
}
.button{
  width:542px;
  height:140px;
  display: block;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 52px;
}
</style>
