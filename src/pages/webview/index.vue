<template>
  <web-view :src="pageUrl"></web-view>
</template>
<script>
export default {
  data(){
    return {
      pageUrl:''
    }
  },
  mounted(){
    const url = decodeURIComponent(this.$root.$mp.query.pageUrl)
    this.pageUrl = url
  }
}
</script>
<style scoped>

</style>