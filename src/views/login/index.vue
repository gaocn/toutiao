<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登陆"/>

    <!-- 登陆表单 -->
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="userFormRules.mobile"
        type="number"
        maxlength="11"
      >
        <i slot="left-icon" class="iconfont toutiao-shouji"></i>
      </van-field>
      <van-field
        v-model="user.code"
        placeholder="请输入验证码"
        :rules="userFormRules.code"
        type="number"
        maxlength="6"
      >
        <template #left-icon>
          <i class="iconfont toutiao-yanzhengma"></i>
        </template>
        <template #button>
          <van-count-down
            v-if="isCountDownShow"
            :time="1000 * 60"
            format="ss s"
            @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            class="send-sms-btn"
            native-type="button"
            size="small"
            type="default"
            round
            @click="onSendSmsCode"
          >发送验证码</van-button>
          <!-- <van-button class="send-sms-btn" round size="small" type="default">发送验证码</van-button> -->
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">登陆</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { login, getSmsCode } from '@/api/user'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      userFormRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3|5|7|8]\d{9}$/,
          message: '手机号格式错误'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码格式错误'
        }]
      },
      user: {
        mobile: '',
        code: ''
      },
      isCountDownShow: false
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    async onSubmit () {
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '登录中...' // 提示消息
      })

      const user = this.user
      try {
        const res = await login(user)
        console.log('登陆成功', res)
        this.setUser(res.data.token)
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response && err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        } else {
          this.$toast.fail('登录失败，请稍候再试')
        }
      }
      console.log('submit', this.user)
    },
    async onSendSmsCode () {
      // 1. 校验手机号
      try {
        // 若要仅仅验证手机号需要将设置native-type="button"
        await this.$refs.loginForm.validate('mobile')
      } catch (err) {
        this.$toast.fail('手机号码格式不正确')
        return
      }

      // 2. 验证通过，显示倒计时
      this.isCountDownShow = true
      // 3. 请求发送验证码
      try {
        await getSmsCode(this.user.mobile)
        this.$toast('发送成功')
      } catch (err) {
        // 发送失败，关闭倒计时
        this.isCountDownShow = false
        if (err.response.status === 429) {
          this.$toast('发送太频繁了，请稍后重试')
        } else {
          this.$toast('发送失败，请稍后重试')
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login-container {
  .iconfont {
    // 设置图标大小
    font-size: 37px;
  }

  .send-sms-btn {
    width: 156px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    // 复写vant按钮的字体大小和颜色
    font-size: 22px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      // 将vant按钮中的外边框给去掉
      border: none;
    }
  }
}
</style>
