<template>
  <div class="channel-edit-wrap">
    <van-cell class="title-text" title="我的频道" :border="false">
      <van-button
        class="edit-btn"
        size="mini"
        round
        type="danger"
        plain
        @click="isEditShow = !isEditShow"
      >编辑</van-button>
    </van-cell>
    <van-grid class="my-grid" :gutter="10">
      <van-grid-item
        class="channel-item"
        v-for="(item, index) in myChannels"
        :key="item.id"
      >
      <div slot="text">
        <van-icon v-if="isEditShow && item.name !=='关注'" class="channel-clear" name="clear" @click="onClearChannel(item, index)"/>
        <span class="text" :class="{active: index === activeIndex}" slot="text" @click="onClickMyChannel(item, index)">
          {{item.name}}
        </span>
      </div>
      </van-grid-item>
    </van-grid>

    <van-cell class="title-text" title="频道推荐" :border="false"></van-cell>
    <van-grid class="recommend-grid" :gutter="10">
      <van-grid-item
        class="channel-item"
        v-for="item in recommendChannels"
        :key="item.id"
        :text="item.name"
        @click="onAddChannel(item)"
      >
      <div slot="text" class="text-wrap">
        <van-icon name="plus"/>
        <span>{{item.name}}</span>
      </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { getAllChannels, deleteUserChannel, addUserChannel } from '@/api/user'
import { setItem } from '@/utils/storage'
export default {
  name: 'ChannelEdit',
  props: {
    myChannels: {
      type: Array,
      required: true
    },
    activeIndex: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      allChannels: [],
      isEditShow: false
    }
  },
  computed: {
    ...mapState(['user']),
    recommendChannels () {
      return this.allChannels.filter(c => {
        return this.myChannels.findIndex(u => {
          return u.id === c.id
        }) === -1
      })
    }
  },
  created () {
    this.loadAllChannels()
  },
  methods: {
    async loadAllChannels () {
      try {
        const data = await getAllChannels()
        this.allChannels = data.data.channels
      } catch (err) {
        this.$toast('数据获取失败')
      }
    },
    onAddChannel (channel, index) {
      this.myChannels.push(channel)
      this.addChannel(channel)
    },
    onClearChannel (channel, index) {
      if (channel.name === '关注') {
        return
      }

      if (index <= this.activeIndex) {
        this.$emit('update:active-index', this.activeIndex - 1)
      }

      const found = this.myChannels.findIndex(item => item.id === channel.id)
      if (found !== -1) {
        this.myChannels.splice(found, 1)
        this.deleteChannel(channel)
      }
    },
    onClickMyChannel (channel, index) {
      if (this.isEditShow) {
        this.onClearChannel(channel)
      } else {
        // 跳转到激活页
        this.$emit('update:active-index', index)
        this.$emit('close-popup')
        this.isEditShow = false
      }
    },
    async deleteChannel (channel) {
      try {
        if (this.user) {
          await deleteUserChannel(channel)
        } else {
          setItem('MY_CHANNEL', this.myChannels)
        }
      } catch (err) {
        this.$toast('删除频道失败')
      }
    },
    async addChannel (channel) {
      try {
        if (this.user) {
          await addUserChannel(channel)
        } else {
          setItem('MY_CHANNEL', this.myChannels)
        }
      } catch (err) {
        this.$toast('添加频道失败')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.channel-edit-wrap {
  .title-text {
    font-size: 32px;
    color:#333;
  }
  .edit-btn {
    width: 104px;
    height: 48px;
    font-size: 26px;
    color: #f85959;
    border: 1px solid #f85959;
  }
  .channel-item{
    width: 160px;
    height: 86px;
    /* 由于存在子容器，因此需要将背景色也设置给子容器 */
   // background-color: #f4f5f6;
    /* 作用域样式需要采用/deep/ */
    /deep/ .van-grid-item__content {
      /* 不让文字折行 */
      white-space: nowrap;
      background-color: #f4f5f6;
      .van-grid-item__text, .text, .text-wrap {
        font-size: 28px;
        color:#222;
        margin-top: 0;
      }

      .active {
        color: red;
      }

    }
  }

  /* 修改推荐频道的样式，让其水平排列 */
  .recommend-grid {
    .channel-item {
      /deep/ .van-grid-item__content {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .van-icon-plus {
          font-size: 28px;
          margin-right: 6px;
        }
        .van-grid-item__text {
          margin-top: 0;
        }
      }
    }
  }

  /* 当点击编辑时，显示清除图标，通过绝对定位定义其样式 */
  .my-grid {
    .channel-item {
      /deep/ .van-grid-item__content {
        .van-icon-clear{
         position: absolute;
         right: -5px;
         top: -5px;
         color: #cacaca;
         font-size: 30px;
        }
      }
      .channel-clear:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
