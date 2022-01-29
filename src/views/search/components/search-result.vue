<template>
  <div class="search-history-container">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="loadSearchResult"
    >
      <van-cell
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        clickable>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { searchResult } from '@/api/search'
export default {
  name: 'SearchResult',
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    async loadSearchResult () {
      try {
        const ret = await searchResult(this.searchText)
        this.list.push(...ret.data)
        // 加载状态结束
        this.loading = false
        if (ret.data.length === 0) {
          this.finished = true
        }
      } catch (err) {
        this.$toast('搜索失败')
        this.loading = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search-history-container {
//   position: fixed;
//   top: 98px;
//   left: 0;
//   right: 0;
//   height: 100%;
  height: 93vh;
  overflow-y: auto;
}
</style>
