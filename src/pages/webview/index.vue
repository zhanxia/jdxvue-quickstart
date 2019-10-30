<template>
  <web-view :src="pageUrl">{{pageUrl}}</web-view>
</template>
<script>
export default {
  data(){
    return {
      pageUrl:''
    }
  },
  mounted () {
    console.log("webview111",this)
    console.log("options.pageUrl",this.$root.$mp.query.pageUrl)
    const url = decodeURIComponent(this.$root.$mp.query.pageUrl)
    console.log("url",url)
    this.pageUrl = url
  }
}
</script>
<style scoped>

</style>