<template>
  <div>
    <swiper indidator-dots="imgUrls.length > 1" v-if="jddvuePlatform != 'h5'">
      <block v-if="imgUrls.length > 0" v-for="(item, index) in imgUrls" :key="index" >
        <swiper-item>
          <image :src="item" mode="scaleToFill" class="swiper-img"></image>
        </swiper-item>
      </block>
    </swiper>

    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: [],
      imgUrls: [
        'http://img30.360buyimg.com/rent/s1920x740_jfs/t23257/182/519649404/487252/53062681/5b335375N60dd87c9.jpg',
        'https://m.360buyimg.com/jrqb/jfs/t1/65899/23/6743/1356136/5d4d469fEd6ece651/8cce19ad02c89136.png',
        'http://img30.360buyimg.com/rent/s1920x740_jfs/t23257/182/519649404/487252/53062681/5b335375N60dd87c9.jpg'
      ],
      jddvuePlatform:jddvuePlatform
    }
  },

  created () {
    if(jddvuePlatform != 'h5'){
      let logs = jddvue.getStorageSync('logs') || []
      this.logs = logs.map(log => formatTime(new Date(log)))
    }else{
      let logs = JSON.parse(localStorage.getItem('logs')) || []
      this.logs = logs.map(log => formatTime(new Date(log)))
    }
    
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40px;
}

.log-item {
  margin: 10px;
}
.swiper-img{
  display: block;
  margin: 0 auto;
}
</style>
