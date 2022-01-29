export const getArticleById = articleId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          articleId: articleId,
          title: '2021内地十大高分剧，《风声》只排第十，《觉醒年代》堪称剧王！',
          aut_photo: 'https://pic.rmb.bdstatic.com/b4c0d1a25b5dc2bba9d9c78ad503c66d.jpeg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=16107',
          aut_name: '未来电影局',
          pubdate: new Date(),
          is_followed: true,
          aut_id: 1,
          art_id: 1,
          is_collected: true,
          attitude: -1,
          content: `回味2021年，电视剧市场千变万化，恰逢建党100周年，关于党建和国家建设类的题材不断涌现出来，最为人瞩目的还属《觉醒年代》、《山海情》、《功勋》等等，其他的题材也种类繁多，都市爱情类、盗墓类、古装悬疑类、民国谍战类等等。

          NO10:《风声》
          
          《风声》也是一部谍战剧，此剧胜在有“代入感”。但是我认为《风声》与《叛逆者》、《伪装者》比起来算得上是谍战中的“性价比之王”，因为《风声》中的场景屈指可数，所以大大降低了布景的成本。
          
          
          这部剧的人物和人物之间互相挖坑、埋雷，观众的大脑跟着主角飞速旋转。我认为《风声》有些对话似乎模仿了《潜伏》的风格，适合二刷，每一句话都是笑里藏着刀，值得细细推敲。徐璐饰演的顾晓梦也好，文咏珊饰演的李宁玉也好，各有各的特色，展现了1941年中国汪伪政府统治时期的历史状况。
          
          唯一的缺点就是逻辑不够闭合，但是总体看下来“勉强自圆其说”，许多观众比较苛刻地拿电视剧版和电影版比较，我认为没必要，年轻演员的张力也许没有老演员那么娴熟和收放自如，但是这份新奇和努力，也是我们看到的。特效和逻辑有缺陷，但是整体来评价，我认为不算差。`

        }
      })
    }, 1000)
  })
}

export const addCollect = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: '成功', code: 200 })
    }, 1000)
  })
}

export const deleteCollect = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: '成功', code: 200 })
    }, 1000)
  })
}

export const addLike = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: '成功', code: 200 })
    }, 1000)
  })
}

export const deleteLike = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: '成功', code: 200 })
    }, 1000)
  })
}
