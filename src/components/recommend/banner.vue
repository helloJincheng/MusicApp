<template>
  <swiper class="my-banner" :list="bannerList" height="150px" :auto="true"
          :loop="true"
          :show-desc-mask="false"
          dots-position="center"></swiper>
</template>

<script type="text/ecmascript-6">
  import {Swiper, SwiperItem} from 'vux'
  import {getBannerList} from '@/api/bannerlist'
  import {ERR_OK} from '@/api/config'

  export default {
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        bannerList: []
      }
    },
    methods: {
      _getBannerList() {
        getBannerList().then((res) => {
          if (res.code === ERR_OK) {
            let list = res.data.slider
            let listData = []
            // console.log(list)
            for (var i = 0; i < list.length; i++) {
              let obj = {}
              // obj.url = list[i]['linkUrl']
              obj.img = list[i]['picUrl']
              listData.push(obj)
            }
            this.bannerList = listData
            // console.log(this.bannerList)
          }
        })
      }
    },
    created() {
      this._getBannerList()
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .my-banner {
    top: 0 !important;
    width: 100%;
    margin: 0 auto;
    .vux-indicator {
      bottom: 0 !important;
      .vux-icon-dot {
        background: #fff !important;
        width: 4px !important;
        height: 4px !important;
        border-radius: 0 !important;
        border: 1px solid #6e97f5;
        transform: rotate(45deg);
      }
      .active{
        background: #6e97f5 !important;
      }
    }
  }
</style>
