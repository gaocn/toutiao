/**
 * 评论请求模块
 */
// import request from '@/utils/request'

/**
  * 获取文章评论列表
  */
export const getComments = params => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          data: {
            total_count: 87,
            results: [
              {
                aut_name: '张三',
                content: '评论' + Math.random(),
                pubdate: new Date(),
                com_id: 1
              }, {
                aut_name: 'David.Jack',
                content: '评论' + Math.random(),
                pubdate: new Date(),
                com_id: 2
              }
            ]
          }
        }
      })
    }, 1000)
  })
}

/**
  * 评论点赞
  */
export const addCommentLike = target => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          data: {
            new_obj: {
              aut_name: 'Rose.Lo',
              content: '最新评论' + Math.random(),
              pubdate: new Date(),
              com_id: 5
            }
          }
        }
      })
    }, 1000)
  })
}

/**
  * 取消评论点赞
  */
export const deleteCommentLike = target => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ code: 200, data: [] })
    }, 1000)
  })
}

/**
  * 发布文章评论或评论回复
  */
export const addComment = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ code: 200, data: [] })
    }, 1000)
  })
}
