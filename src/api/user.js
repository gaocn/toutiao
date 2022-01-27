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
