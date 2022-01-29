<template>
  <div class="search-history-container">
    <van-cell
      v-for="(item, index) in suggestionList"
      :key="index"
      icon="search"
      @click="$emit('search', item.title)"
      clickable>
      <div slot="title" v-html="hightKeyword(item.title)" />
    </van-cell>
  </div>
</template>

<script>
import { searchSuggestion } from '@/api/search'
import { debounce } from 'lodash'
export default {
  name: 'SearchSuggestion',
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      suggestionList: []
    }
  },
  methods: {
    hightKeyword (content) {
      const reg = new RegExp(this.searchText, 'gi')
      return content.replace(reg, `<span class="active">${this.searchText}</span>`)
    },
    async loadSearchSuggestion () {
      try {
        const ret = await searchSuggestion(this.searchText)
        if (Math.random() > 0.8) {
          JSON.parse('ret')
        }
        this.suggestionList = ret.data
      } catch (err) {
        this.$toast('搜索失败')
        this.suggestionList = []
      }
    }
  },
  watch: {
    /* 当第一次输入搜索内容时无法监听到，因为此时组件还没有渲染，在初始化时就监听使用关键字immediate */
    searchText: {
      /* 函数名称固定 */
      handler: debounce(async function (value) {
        this.loadSearchSuggestion()
      }, 500),
      immediate: true
    }
  }
}
</script>
<style lang="less" scoped>
.search-history-container {
  /deep/ .active {
    color: red !important;
  }
}
</style>
