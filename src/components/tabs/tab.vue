<template>
  <mu-appbar class="top-tabs">
    <mu-icon-button icon="menu" slot="left"></mu-icon-button>
    <mu-bottom-nav>
      <mu-bottom-nav-item activeClass="nav-active" to="/recommend" value="recents" title="推荐"/>
      <mu-bottom-nav-item activeClass="nav-active" value="favorites" to="/singer" title="歌手"/>
      <mu-bottom-nav-item activeClass="nav-active" value="nearby" to="/ranking" title="排行"/>
    </mu-bottom-nav>
    <mu-icon-button icon="search" slot="right"></mu-icon-button>
  </mu-appbar>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        // activeTab: 'tab1'
      }
    },
    methods: {
      handleTabChange(val) {
        this.activeTab = val
      },
      handleActive() {
        // window.alert('tab active')
      }
    }
  }
</script>
<style lang="less">
  @import "../../common/style/const.less";

  .top-tabs {
    position: relative;
    z-index: 1111;
    height: 50px;
    box-shadow: 0 3px 10px rgba(33, 25, 248, 0.16), 0 3px 10px rgba(20, 31, 183, 0.23);
    .mu-bottom-nav {
      height: 50px !important;
      background-color: transparent;
      .mu-bottom-item-text {
        line-height: 1;
        padding-top: 12px;
        padding-bottom: 13px;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
      }
    }
    .mu-bottom-item-text:after {
      transition: all 0.2s ease-in-out;
      width: 0;
      content: '';
      display: block;
      height: 2px;
      background: transparent;
      position: absolute;
      bottom: 5px;
      left: 50%;
      margin-left: 0;
    }
    .nav-active {
      .mu-bottom-item-text {
        color: #ffffff;
        font-size: 15px;
        transition: all 0.3s ease-in-out;
      }
      .mu-bottom-item-text:after {
        width: 40px;
        content: '';
        display: block;
        height: 2px;
        background: #ffffff;
        position: absolute;
        bottom: 5px;
        left: 50%;
        margin-left: -20px;
        animation: mymove 0.3s ease;
      }
      @keyframes mymove {
        50% {
          width: 50px;
          margin-left: -25px;
        }
        100% {
          width: 40px;
          margin-left: -20px;
        }
      }
    }
  }
</style>
