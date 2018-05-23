//所有接口的具体调用
import request from'@/utils/request'
// 例子


export function getdata(obj) {
  return request({
    url:'',
    method:'',
    params:obj //如果不是get请求,请用data
  })
}
