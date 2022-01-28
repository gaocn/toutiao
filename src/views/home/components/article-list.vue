<template>
  <div class="article-list">
    <van-pull-refresh v-model="isLoading" :success-duration="1500" :success-text="refreshSuccessText" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
          <article-item v-for="(article, index) in list" :key="index" :article="article"></article-item>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { getArticles } from '@/api/user'
import ArticleItem from '@/components/article-item'
export default {
  name: 'ArticleList',
  components: { ArticleItem },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      list: [], // 存储列表数据的数组
      loading: false, // 控制加载中 loading 状态
      finished: false, // 控制数据加载结束的状态,
      timestamp: undefined,
      error: false,
      isLoading: false, // 下拉加载
      refreshSuccessText: ''
    }
  },
  methods: {
    async onLoad () {
      try {
        const data = await getArticles({
          channel: this.channel.id,
          timestamp: this.timestamp || new Date().getTime()
        })

        this.list.push(...data.data.list)
        // 本次加载结束
        this.loading = false

        if (data.data.list.length > 0) {
          this.timestamp = data.data.preTimeStamp
        } else {
          this.finished = true
        }
      } catch (err) {
        this.loading = false
        this.error = true
      }
    },
    async onRefresh () {
      try {
        const data = await getArticles({
          channel: this.channel.id,
          timestamp: this.timestamp || new Date().getTime()
        })

        this.list.unshift(...data.data.list)
        this.isLoading = false
        this.refreshSuccessText = `刷新成功，更新了${data.data.list.length}条数据`
      } catch (err) {
        this.isLoading = false
        this.refreshSuccessText = '刷新失败'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.article-list {
  // position: fixed;
  // top: 180px;
  // // bottom: 100px;
  // right: 0;
  // left: 0;
  height: 79vh;
  overflow-y: auto;
}
</style>
