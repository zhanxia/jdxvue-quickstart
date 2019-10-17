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
        title:{}
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

    },
    // request
    queryData(){
      api.queryIndexData().then(res => {
        console.log("res",res)
        this.indexData = {
          ...this.indexData,
          ...res
        };
      });
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
