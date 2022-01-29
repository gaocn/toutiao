<template>
  <div class="search-container">
    <!--
      顶部搜索栏
      Tips: 在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。
     -->
    <form action="/">
      <van-search
        class="search-bar"
        v-model="searchText"
        show-action
        background="#3296fa"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @focus="isResultShow = false"
      />
      <!-- 当获取到焦点时展示搜索建议而不是展示搜索结果-->
    </form>

    <!-- 搜索结果 -->
    <search-result v-if="isResultShow" :search-text="searchText"/>
    <!-- 联想建议 -->
    <search-suggestion v-else-if="searchText" :search-text="searchText" @search="onSearch"/>
    <!-- 搜索历史 -->
    <search-history v-else @search="onSearch"/>
  </div>
</template>
<script>
import SearchHistory from './components/search-history.vue'
import SearchResult from './components/search-result.vue'
import SearchSuggestion from './components/search-suggestion.vue'
import { getItem, setItem } from '@/utils/storage'
export default {
  name: 'Search',
  components: { SearchResult, SearchHistory, SearchSuggestion },
  data () {
    return {
      isResultShow: false,
      searchText: '',
      searchHistories: getItem('MY_SEARCH_HISTORY') || []
    }
  },
  methods: {
    onSearch (val) {
      try {
        this.persistSearchHistory()
        this.searchText = val
        this.isResultShow = true
      } catch (err) {
        console.log('err: ', err)
        this.$toast('搜索失败')
        this.isResultShow = false
      }
    },
    onCancel () {
      this.$router.back()
    },
    persistSearchHistory () {
      if (!this.searchText) {
        return
      }
      const index = this.searchHistories.findIndex(item => item === this.searchText)
      if (index !== -1) {
        this.searchHistories.splice(index, 1)
      }
      this.searchHistories.unshift(this.searchText)
      setItem('MY_SEARCH_HISTORY', this.searchHistories)
    }
  }
}
</script>
<style lang="less" scoped>
.search-container{
  padding-top: 98px;
  .search-bar {
    position: fixed;
    top:0;
    left:0;
    right: 0;
    height:92px;
    z-index: 1;

    .van-search__action {
      color:#fff;
    }
  }
}
</style>
