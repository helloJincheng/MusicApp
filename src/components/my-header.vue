<!--<template>-->
  <!--<div class="header">-->
    <!--<div class="">推荐</div>-->
    <!--<div class="">歌手</div>-->
    <!--<div class="">排行</div>-->
    <!--<div class="">搜索</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script type="text/ecmascript-6">-->
  <!--export default {-->
    <!--name: 'MyHeader',-->
    <!--data () {-->
      <!--return {-->
        <!--msg: 'Welcome to Your Vue.js App'-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style lang="less" rel="stylesheet/less">-->
  <!--.header {-->
    <!--display: flex;-->
    <!--height: 50px;-->
    <!--width: 100%;-->
    <!--text-align: center;-->
    <!--line-height: 50px;-->
    <!--font-size: 16px;-->
    <!--&gt;div{-->
      <!--flex: 1;-->
    <!--}-->
  <!--}-->
<!--</style>-->

<template>
  <div>
    <group>
      <cell is-link title="Simple" ></cell>
      <cell is-link title="Switch icons" ></cell>
    </group>
    <tabbar>
      <tabbar-item>
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected>
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    }
  }
</script>
