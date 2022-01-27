import axios from 'axios'

const request = axios.create({
  // 基础路径
  baseURL: '/api'
})

export default request
