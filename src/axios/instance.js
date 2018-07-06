import axios from 'axios';
// import { Message, MessageBox } from 'element-ui';
import Config from '@/config';
import Utils from '@/utils';

let instance = axios.create({
  baseURL: Config.apiUrl,
  timeout: Config.defaultTimeout
});

// request 请求拦截器
instance.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    // 请求前进行拦截, 验证是否已经登录等
    const token = Utils.getCookies('token');
    if (token) {
      if (token && config.url.indexOf('/login') === -1) {
        config.headers.common['Authorization'] = `Bearer ` + token;
      }
    }
    if (config.method === 'get') { //get请求加时间戳，解决 ie11 下不刷新的bug
      let flag = config.url.indexOf('?') !== -1 ? '&' : '?';
      let url = `${config.url}${flag}timestamp=${new Date().getTime()}`;
      config.url = encodeURI(url);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response 响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应结果统一处理
    return {
      status: response.status,
      data: response.data,
    }
    // return response
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
