<template>
  <div @click="clickHandle">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    <a href="/pages/counter/main" class="counter" v-if="jddvuePlatform != 'h5'">去往Vuex示例页面</a>
    <router-link to="counter" class="counter" @click="_goVuexPage" v-else>去往Vuex示例页面</router-link>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
export default {
  data () {
    return {
      motto: 'Hello jdminiprograme',
      userInfo: {
        nickName: 'jddvue',
        avatarUrl: 'https://m.360buyimg.com/jrqb/jfs/t1/38358/8/15477/5901/5d64d6a6E7f1bda92/376cb86d2dba7cd8.png'
      },
      checkedNames: [],
      jddvuePlatform:jddvuePlatform
    }
  },

  components: {
    card
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
    _goVuexPage(){

    }
  },

  created () {
    console.log("jddvuePlatform",jddvuePlatform)
  }
}
</script>

<style scoped>
.userinfo {
  text-align: center;
}

.userinfo-avatar {
  display: block;
  width: 128px;
  height: 128px;
  margin: 20px auto;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
  text-align: center;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
