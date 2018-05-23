import axios from 'axios';            //请求使用axios
import NProgress from 'nprogress';    //进度条使用 nprogress
import 'nprogress/nprogress.css';     //进度条css文件


const service = axios.create({
  timeout: 3000,    //定义请求超时处理时间
  auth: true        //是否携带公共参数
});

//request拦截器
service.interceptors.request.use(config => {
  NProgress.start();

  let authParams = {} //定义公共传参

  if(config.auth) {

  } else {

  }
  return config
},error => {
  Promise.reject(error)
})

//response拦截器
service.interceptors.response.use(response => {
  NProgress.done();

  return Promise.reject(response);
},error => {
  NProgress.done();
  Promise.reject(error)
})

export default service
