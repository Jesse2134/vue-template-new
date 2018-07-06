/**
 * 统一的请求services
 * @params arg [Object] 调用地方传参数进来
 */
import instance from './instance';

// post
export const _post = arg => {
  return arg.timeout ? instance.post(`${arg.url}`, arg.params, {
    timeout: arg.timeout
  }) : instance.post(`${arg.url}`, arg.params);
};

// delete
export const _delete = arg => {
  return instance.delete(`${arg.url}`);
};
// put
export const _put = arg => {
  return instance.put(`${arg.url}`, arg.params);
};

// get
export const _get = arg => {
  return arg.timeout ? instance.get(`${arg.url}`, {
    timeout: arg.timeout
  }) : instance.get(`${arg.url}`);
};

// patch
export const _patch = arg => {
  return instance.patch(`${arg.url}`);
};
