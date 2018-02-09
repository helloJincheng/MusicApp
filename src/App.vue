<template>
  <div id="app">
    <tab></tab>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from '@/components/tabs/tab'

  export default {
    components: {
      Tab
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
</style>
