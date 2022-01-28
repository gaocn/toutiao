<template>
  <div class="shouye-container">
    <van-nav-bar class="page-nav-bar" fixed>
      <van-button
        slot="title"
        class="search-btn"
        type="info"
        size="small"
        round
        icon="search"
      >搜索</van-button>
    </van-nav-bar>

    <!-- 频道列表 -->
    <van-tabs v-if="channels && channels.length > 0" class="channel-tabs" v-model="active" animated swipeable>
      <van-tab v-for="item in channels" :key="item.id" :title=item.name>
        <article-list :channel="item"></article-list>
      </van-tab>
      <div slot="nav-right" class="placeholder"/>
      <!-- 使用右插槽添加hamburger按钮 -->
      <div slot="nav-right" class="hamburger-btn" @click="isChannelEditShow = true">
        <i class="iconfont toutiao-gengduo"/>
      </div>
    </van-tabs>

    <!-- 频道编辑 -->
    <van-popup
      class="edit-channel-popup"
      v-model="isChannelEditShow"
      position="bottom"
      closeable
      close-icon-position="top-left"
    >
      <channel-edit :my-channels="channels" :active-index.sync="active" @close-popup="isChannelEditShow = false"/>
    </van-popup>
    <!-- /频道编辑 -->
  </div>
</template>
<script>
import { getUserChannels } from '@/api/user'
import ArticleList from './components/article-list.vue'
import ChannelEdit from './components/channel-edit.vue'
export default {
  name: 'shouye',
  components: { ArticleList, ChannelEdit },
  data () {
    return {
      // 前激活标签对应的索引值
      active: 0,
      channels: [],
      isChannelEditShow: false
    }
  },
  created () {
    this.loadChannels()
  },
  methods: {
    async loadChannels () {
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: '加载中...'
      })
      try {
        const data = await getUserChannels()
        this.channels = data.data.channels
        this.$toast.clear()
      } catch (err) {
        this.$toast('获取频道列表失败')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.shouye-container{
  padding-top: 174px;
  padding-bottom: 100px;
  // /deep/ 深度作用操作符！对于 scoped 为了影响里面所有的后代元素
  /deep/ .van-nav-bar__title {
    max-width: unset;
  }
  .search-btn {
    // 由于van-button的父节点van-nav-bar__title 限制的宽度，导致设置失效，因此将其去除
    width: 555px;
    height: 64px;
    background-color: #5babfb;
    border: none;
    font-size: 28px;
    .van-icon {
      font-size: 32px;
    }
  }

  .channel-tabs {
    //修改vant中的对应样式，默认只能应用到根节点，因此需要使用/deep/将其作用到深层节点
    /deep/ .van-tab {
      // 由于顶层元素设置了flex样式，且flex-basis=22%即最小占用大小，所以这里设置宽高时不会生效，但可以设置minWidth
      min-width: 200px;
      // 由于van-tab的父元素设置了高度，因此需要将高度设置到父元素
      //height: 82px;
      border-right: 1px solid #edeff3;
      font-size:30px;
      color:#777777;
    }
    /deep/ .van-tabs__wrap{
      height: 82px;
      position: fixed;
      top: 92px;
      // 撑开整个宽度
      left: 0;
      right: 0;
      // 增加显示层级
      z-index: 1;
    }
    // 标签激活时的字体颜色
    /deep/ .van-tab--active{
      color: #333333;
    }

    // 清除padding
    /deep/ .van-tabs__nav {
      padding-bottom: 0px;
    }

    // 底部条
    /deep/ .van-tabs__line {
      //通过检查看到设置成功但是没有生效(~~)是因为权重不够
      width:31px !important;
      height: 6px;
      background-color: #3296fc;
      // 由于采用的绝对定位，因此这里直接设置，但是由于父元素存在padding，因此需要把父元素的padding设置为0
      bottom: 8px;
    }

    .hamburger-btn {
      position: fixed;
      right: 0;
      width:66px;
      height: 82px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      opacity: 0.902;
      // 图标大小设置
      i.iconfont {
        font-size:33px;
      }

      //根节点设置伪元素
      &:before {
        content: "";
        position: absolute;
        left: 0;
        // 设置为1px可能看不到，但是在真实手机上是可以看到的
        width: 2px;
        height: 100%;
        background-image: url(~@/assets/gradient-gray-line.png);
        // 填充模式
        background-size: contain;
      }
    }
    .placeholder {
      width: 50px;
      height: 82px;
      /*
        由于父节点时flex布局，该子项目的兄弟节点通过设置flex-basis:22%已经把父元素的剩余空间给平分完了，
        因此手动设置的宽度没有生效，因此可以设置将该元素不参与剩余空间的计算。
      */
      flex-shrink: 0;
    }
  }

  .edit-channel-popup {
    height: 100%;
    padding-top: 100px;
    box-sizing: border-box;
  }
}
</style>
