module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue({ file }) {
        console.log('file: ', file);
        // 设计稿宽度定在750，因此针对vant需要特殊判断后设置
        return file.indexOf('vant') !== -1 ? 37.5 :75
      },
      propList: ['*']
    }
  }
}