import axios from 'axios'
import store from '@/store'

const request = axios.create({
  // 基础路径
  baseURL: '/api'
})

request.interceptors.request.user(config => {
  const { user } = store.state
  if (user && user.token) {
    config.headers.token = user.token
  }
}, (err) => {
  return Promise.reject(err)
})

export default request
