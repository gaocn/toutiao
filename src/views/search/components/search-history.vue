<template>
  <div class="search-history-container">
    <van-cell class="search-history-cell" title="搜索历史">
      <span class="history-delete-all" v-if="isEditShow" @click="onDeleteAll">全部删除</span>
      <span class="history-edit-finished" v-if="isEditShow" @click="isEditShow =false">完成</span>
      <template #right-icon>
        <van-icon name="delete" @click="isEditShow = !isEditShow"/>
      </template>
    </van-cell>

    <van-cell v-for="(item, index) in searchHistories" :key="index" :title="item" clickable @click="$emit('search', item)">
      <template #right-icon>
        <van-icon v-if="isEditShow" name="close" @click="onDelete(item)"/>
      </template>
    </van-cell>
  </div>
</template>

<script>
import { getItem, setItem } from '@/utils/storage'
export default {
  name: 'SearchHistory',
  data () {
    return {
      searchHistories: getItem('MY_SEARCH_HISTORY') || [],
      isEditShow: false
    }
  },
  methods: {
    onDeleteAll () {
      this.searchHistories = []
      this.persistSearchHistory()
    },
    onDelete (history) {
      this.searchHistories = this.searchHistories.filter(item => item !== history)
      this.persistSearchHistory()
    },
    persistSearchHistory () {
      setItem('MY_SEARCH_HISTORY', this.searchHistories)
    }
  },
  watch: {
    searchHistories: {
      handler (value) {
        this.persistSearchHistory()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search-history-container {
  .search-history-cell {
    .van-cell__value {
      display: flex;
      flex-direction: row-reverse;
      span:nth-child(1) {
        margin: 0 5px;
      }
    }
    .van-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }
}
</style>
