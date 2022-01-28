<template>
  <div class="wode-container">

    <!-- 已登录用户信息 -->
    <div v-if="user" class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image class="avatar" round src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
          <span class="name">{{usrInfo.username}}</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">{{usrInfo.toutiao || 0}}</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">{{ usrInfo.focus || 0}}</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">{{usrInfo.fensi || 0}}</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">{{usrInfo.likes || 0}}</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>

    <div v-else class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="@/assets/mobile.png"/>
        <span class="text">登陆/注册</span>
      </div>
    </div>

    <!-- 导航 -->
    <van-grid class="grid-nav" :column-num="2" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont toutiao-shoucang"/>
        <span slot="text" class="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont toutiao-lishi"/>
        <span slot="text" class="text">历史</span>
      </van-grid-item>
    </van-grid>

    <van-cell title="消息通知" is-link/>
    <van-cell class="mb-9" title="小智同学" is-link/>
    <van-cell v-if="user" class="logout-cell" title="退出登录" @click="onLogoOut" clickable is-link>
      <template #right-icon></template>
    </van-cell>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  name: 'wode',
  data () {
    return {
      usrInfo: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created () {
    this.loadUserInfo()
  },
  methods: {
    onLogoOut () {
      this.$dialog.confirm({
        title: '确认退出吗？'
      }).then(() => {
        // 确认退出：清除登录状态（容器中的 user + 本地存储中的 user）
        this.$store.commit('setUser', null)
      }).catch(() => {
        console.log('取消执行这里')
      })
    },
    async loadUserInfo () {
      if (!this.user) {
        return
      }

      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: '加载用户信息...'
      })

      try {
        const data = await getUserInfo()
        this.usrInfo = data.data
        this.$toast.success('加载用户信息成功')
      } catch (err) {
        this.$toast.fail('用户信息加载失败')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.wode-container{
  .header{
    height: 361px;
    // 图片完整填充到盒子中，CSS中使用绝对路径可以需要使用~@
    background-image: url('~@/assets/banner.png');
    background-size: cover;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-img{
        height: 132px;
        width: 132px;
        margin-bottom: 15px;
      }
      .text{
        font-size: 28px;
        color: #fff;
      }
    }
  }
  .not-login:hover{
    cursor: pointer;
  }

  // 已登录
  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      //将填充和边框都计算在内，否则会看到盒子会变大
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        justify-content: center;
        align-items: center;
        .avatar {
          width: 132px;
          height: 132px;
          margin-right: 32px;
          border: 1px solid #fff;
        }
        .name {
          font-size: 30px;
          color: white;
        }
      }
    }
    .data-stats{
      display: flex;
      .data-item{
        // 平分为4份
        flex:1;
        // 撑满整个高度
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .count {
          font-size: 36px;
          color: white;
        }
        .text{
          font-size: 23px;
        }
      }
    }
  }

  .grid-nav {
    .grid-item{
      height: 141px;
      i.iconfont {
        font-size: 45px;
      }
      span.text{
        font-size: 28px;
      }
      .toutiao-shoucang {
        color:#eb5253;
      }
      .toutiao-lishi {
        color:#ff9d1d;
      }

    }
  }

  .logout-cell{
    margin-top: 20px;
    font-size: 28px;
    color: red;
    text-align: center;
  }
}
</style>
