<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less" rel="stylesheet/less">
  @import "./common/style/icon.less";
  @import '~vux/src/styles/reset.less';

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ef0546;
  margin-top: 60px;
}
</style>
