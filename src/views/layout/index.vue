<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view/>

    <!-- 标签导航栏 -->
    <van-tabbar class="layout-tabbar" v-model="active">
      <van-tabbar-item to="/">
        <template #icon>
          <i class="iconfont toutiao-shouye"></i>
        </template>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/wenda">
        <template #icon>
          <i class="iconfont toutiao-wenda"></i>
        </template>
        <span class="text">问答</span>
      </van-tabbar-item>
      <van-tabbar-item to="/shipin">
        <template #icon>
          <i class="iconfont toutiao-shipin"></i>
        </template>
        <span class="text">视频</span>
      </van-tabbar-item>
      <van-tabbar-item to="/wode">
        <template #icon>
          <i class="iconfont toutiao-wode"></i>
        </template>
        <span class="text">{{ $store.state.user ? '我的' : '未登录'}}</span>
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
      // 控制被激活的标签，这里取值为：0,1,2,3，当开启路由模式后active不起作用
      active: 0
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.layout-container {
  // 修改图标大小
  .layout-tabbar {
    .iconfont {
      font-size: 40px;
    }
    .text {
      font-size: 20px;
    }
  }
}
</style>
