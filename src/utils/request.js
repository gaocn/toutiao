import axios from 'axios'
import store from '@/store'
import JSONBig from 'json-bigint'

const request = axios.create({
  // 基础路径
  baseURL: '/api',
  // 自定义后端返回的原始数据
  // data: 后端返回的原始数据，说白了就是 JSON 格式的字符串
  transformResponse: [function (data) {
    try {
      return JSONBig.parse(data)
    } catch (err) {
      return data
    }

    // axios 默认会在内部这样来处理后端返回的数据
    // return JSON.parse(data)
  }]
})

request.interceptors.request.use(config => {
  const { user } = store.state
  if (user && user.token) {
    config.headers.token = user.token
  }
}, (err) => {
  return Promise.reject(err)
})

export default request
