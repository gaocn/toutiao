<template>
    <!--
      拼接方式：
      :to="'/article/' + article.articleId"
      :to="`/article/${article.articleId}`"
      :to="{
        name: 'article', //根据路由名称跳转
        params: {
          articleId: article.articleId //属性名：路由设计中的动态路由参数
        }
      }"
     -->
    <van-cell class="article-item" clickable :to="`/article/${article.articleId}`">
      <!-- 最多显示两行，多余的内容会被省略-->
      <div slot="title" class="title van-multi-ellipsis--l2">{{ article.title }}</div>
      <div slot="label">
        <div v-if="article.cover.type === 3" class="cover-wrap">
          <div
            class="cover-item"
            v-for="(img, index) in article.cover.images"
            :key="index">
            <van-image class="cover-item-image" fit="cover" :src="img"/>
          </div>
        </div>
        <div class="label-info-wrap">
          <span>{{ article.authorName }}</span>
          <span>{{ article.commentCount }}评论</span>
          <span>{{ article.publishDate | relativeTime }}</span>
        </div>
      </div>

      <!-- 右侧图片 -->
      <van-image class="right-cover" fit="cover" v-if="article.cover.type === 1" slot="default" :src="article.cover.images[0]"/>
    </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="less">
.article-item {
  .title {
    font-size: 32px;
    color: #3a3a3a;
  }
  /*
    为了解决折行问题，将右侧图片固定宽度，让标题占空剩余空间，实现包裹的效果；
    而默认van-cell__title van-cell__value平分了空间，因此不让van-cell__value参与剩余空间的分配即可
   */
  .van-cell__value {
    flex:unset;
    width: 232px;
    height: 146px;
    //添加左外边距，控制文字和封面的位置
    margin-left: 25px;
  }
  /* 设置右侧封面大小*/
  .right-cover{
    width: 232px;
    height: 146px;
  }
  .label-info-wrap span{
    font-size: 22px;
    color:#b4b4b4;
    margin-right: 25px;
  }

  .cover-wrap{
    display: flex;
    // 设置边距
    padding: 30px 0;
    .cover-item {
      /* 平分剩余空间 */
      flex: 1;
      height: 146px;
      // 不包含最后一个元素 &表示父元素
      &:not(:last-child){
        padding-right: 4px;
      }
      .cover-item-image {
        // 由于父元素是平分剩余空间
        width: 100%;
        height: 146px;
      }
    }
  }
}
</style>
