export const searchSuggestion = searchText => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: [
          {
            title: searchText + '搜索建议' + Math.random(),
            url: 'www.baidu.com'
          },
          {
            title: searchText + '搜索建议' + Math.random() + searchText,
            url: 'www.baidu.com'
          },
          {
            title: '搜索建议' + searchText + +Math.random(),
            url: 'www.baidu.com'
          },
          {
            title: '搜索建议' + Math.random() + searchText,
            url: 'www.baidu.com'
          },
          {
            title: '搜索建议' + searchText + +Math.random(),
            url: 'www.baidu.com'
          }
        ]
      })
    })
  })
}

export const searchResult = searchText => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: [
          {
            title: searchText + '搜索结果' + Math.random(),
            url: 'www.baidu.com'
          },
          {
            title: searchText + '搜索结果' + Math.random() + searchText,
            url: 'www.baidu.com'
          },
          {
            title: '搜索结果' + searchText + +Math.random(),
            url: 'www.baidu.com'
          },
          {
            title: '搜索结果' + Math.random() + searchText,
            url: 'www.baidu.com'
          },
          {
            title: '搜索结果' + searchText + +Math.random(),
            url: 'www.baidu.com'
          },
          {
            title: searchText + '搜索结果' + Math.random() + searchText,
            url: 'www.baidu.com'
          },
          {
            title: '搜索结果' + searchText + +Math.random(),
            url: 'www.baidu.com'
          },
          {
            title: '搜索结果' + Math.random() + searchText,
            url: 'www.baidu.com'
          },
          {
            title: '搜索结果' + searchText + +Math.random(),
            url: 'www.baidu.com'
          },
          {
            title: searchText + '搜索结果' + Math.random() + searchText,
            url: 'www.baidu.com'
          },
          {
            title: '搜索结果' + searchText + +Math.random(),
            url: 'www.baidu.com'
          },
          {
            title: '搜索结果' + Math.random() + searchText,
            url: 'www.baidu.com'
          },
          {
            title: '搜索结果' + searchText + +Math.random(),
            url: 'www.baidu.com'
          }
        ]
      })
    })
  })
}
