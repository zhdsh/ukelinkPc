//这里用来处理请求过来的数据

import { getdata } from './../data/api'

//例子
export function handleData(obj) {
  return new Promise((resolve, reject) => {
      getdata(obj).then(res => {
        reslove(res)
      }).then(error => {
        reject(error)
      })
  })
}
