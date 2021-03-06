// import request from '@/utils/request'

export const login = async data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { token: 'asdfjkl2349w3er23u4oi234' }, code: 200 })
    }, 3000)
  })
  // return request({
  //   method: 'POST',
  //   url: '/app/v1_0/authorizations',
  //   data: data
  // })
}

export const getSmsCode = mobile => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { code: '123456' }, code: 200 })
    }, 3000)
  })
  // return request({
  //   method: 'GET',
  //   url: `/app/v1_0/sms/codes/${mobile}`
  // })
}

export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { username: 'HelLsdf', toutiao: 23, focus: 120, likes: 239, fensi: 87 }, code: 200 })
    }, 3000)
  })
  // return request({
  //   method: 'GET',
  //   url: `/app/v1_0/sms/codes/${mobile}`,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     token: this.$store.state.user.token
  //   }
  // })
}

// 获取用户频道接口
export const getUserChannels = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          channels: [
            { id: 0, name: '关注' },
            { id: 2, name: '附近' },
            { id: 4, name: '体育' },
            { id: 5, name: '要闻' },
            { id: 7, name: '北京' },
            { id: 9, name: '科技' },
            { id: 11, name: '段子' },
            { id: 15, name: '汽车' },
            { id: 16, name: '网易号' },
            { id: 17, name: '时尚' },
            { id: 19, name: 'NBA' },
            { id: 21, name: '游戏' }
          ]
        },
        code: 200
      })
    }, 1000)
  })
}

export const getAllChannels = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          channels: [
            { id: 0, name: '关注' },
            { id: 1, name: '头条' },
            { id: 2, name: '附近' },
            { id: 3, name: '娱乐' },
            { id: 4, name: '体育' },
            { id: 5, name: '要闻' },
            { id: 6, name: '和文化' },
            { id: 7, name: '北京' },
            { id: 8, name: '财经' },
            { id: 9, name: '科技' },
            { id: 10, name: '新时代' },
            { id: 11, name: '段子' },
            { id: 12, name: '知否' },
            { id: 13, name: '公开课' },
            { id: 14, name: '圈子' },
            { id: 15, name: '汽车' },
            { id: 16, name: '网易号' },
            { id: 17, name: '时尚' },
            { id: 18, name: '图片' },
            { id: 19, name: 'NBA' },
            { id: 20, name: '房产' },
            { id: 21, name: '游戏' }
          ]
        },
        code: 200
      })
    }, 1000)
  })
}

export const getArticles = (req) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          list: [
            { articleId: '1', title: '文章将右侧图片固定宽度，让标题占空剩余空间，标题1', authorName: 'David', commentCount: 20, publishDate: new Date(), cover: { type: 3, images: ['https://img01.yzcdn.cn/vant/apple-1.jpg'] } },
            { articleId: '2', title: '文章标题2', authorName: 'Lilei', commentCount: 34, publishDate: new Date(), cover: {} },
            { articleId: '3', title: '文章章标题2章标题2标将右侧图片固定宽度，让标题占空剩余空间，题3', authorName: 'WangS', commentCount: 2120, publishDate: new Date(), cover: { type: 3, images: ['https://img01.yzcdn.cn/vant/apple-2.jpg', 'https://img01.yzcdn.cn/vant/cat.jpeg'] } },
            { articleId: '4', title: '文章标题4', authorName: 'ZhangCU', commentCount: 230, publishDate: new Date(), cover: {} },
            { articleId: '5', title: '将右侧图章标题2章标题2章标题2片固定宽度，让标题占空剩余空间，', authorName: 'Jack.LDavid', commentCount: 260, publishDate: new Date(), cover: { type: 1, images: ['https://img01.yzcdn.cn/vant/apple-2.jpg'] } },
            { articleId: '6', title: '文章标余空间，题6', authorName: 'Gowe.S', commentCount: 78, publishDate: new Date(), cover: {} },
            { articleId: '7', title: '文章标章标题2题7', authorName: 'Marri', commentCount: 56, publishDate: new Date(), cover: { type: 3, images: ['https://img01.yzcdn.cn/vant/cat.jpeg', 'https://img01.yzcdn.cn/vant/apple-1.jpg', 'https://img01.yzcdn.cn/vant/cat.jpeg'] } },
            { articleId: '8', title: '文章标将右章标题2章标题2侧图片固定宽度，让标题占空剩余空间，题8', authorName: 'Mys', commentCount: 32, publishDate: new Date(), cover: {} },
            { articleId: '9', title: '文章标题9', authorName: 'Da', commentCount: 45, publishDate: new Date(), cover: { type: 3, images: ['https://img01.yzcdn.cn/vant/cat.jpeg'] } }
          ],
          preTimeStamp: new Date().getTime
        },
        code: 200
      })
    }, 2000)
  })
}

export const addUserChannel = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('addUserChannel', data)
      resolve({ data: '保存成功', code: 200 })
    }, 1000)
  })
}

export const deleteUserChannel = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('deleteUserChannel', data)
      resolve({ data: '删除成功', code: 200 })
    }, 1000)
  })
}

export const addFollow = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: '关注成功', code: 200 })
    }, 1000)
  })
}

export const deleteFollow = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: '取消关注成功', code: 200 })
    }, 1000)
  })
}

/**
 * 获取当前登录用户的个人资料
 */
export const getUserProfile = target => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { data: { name: 'govind', gender: 0, birthday: '2022-01-29', photo: 'https://img01.yzcdn.cn/vant/cat.jpeg' } }, code: 200 })
    }, 1000)
  })
}

/**
 * 更新用户资料
 */
export const updateUserProfile = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: '取消关注成功', code: 200 })
    }, 1000)
  })
}

/**
 * 更新用户照片资料
 */
export const updateUserPhoto = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: '取消关注成功', code: 200 })
    }, 1000)
  })
}
