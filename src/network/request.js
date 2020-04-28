import axios from "axios";

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: "../static/data",
    timeout: 5000
  });

  // 请求拦截器
  instance.interceptors.request.use(
    config => config,
    err => console.log(err)
  );

  // 响应拦截
  instance.interceptors.response.use(
    res => res.data,
    err => console.log(err)
  );

  // 发送真正的网络请求
  return instance(config);
}
