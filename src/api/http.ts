export interface IHttpOption {
  method?: 'get' | 'post';
  data?: {};
  headers?: any;
}

function toQuery(obj:any) {
  let str = '';
  for (let k in obj) {
    str += `${k}=${obj[k]}&`;
  }
  str = str.slice(0, -1);
  return str;
}

const baseUrl = 'http://106.12.120.79:8999';

export const http = (url:string, options:IHttpOption) => {
  const { 
    method = 'get', 
    data = {},
    headers = {} 
  } = options || {};

  const token = localStorage.getItem('token');
  if (token) {
    headers['token'] = token;
  }

  let params = {
    method,
    body: method === 'get' ? undefined : JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
      ...headers
    }
  }

  if (method === 'get') {
    url += '?' + toQuery(data);
  }

  return fetch(url, params).then((res)=>(res.json()))
}

export const $get = (url:string, data?:any) => {
  return http(baseUrl + url, {method: 'get', data})
}

export const $post = (url:string, data?:any) => {
  return http(baseUrl + url, {method: 'post', data})
}

export const login = (data:any) => { // 登录
  return $post('/admin/login?' + toQuery(data))
} 

export const register = (data:any) => { // 注册
  return $post('/userAdmin/register', data)
}

export const getUserList = (data:any) => { // 用户列表
  return $post('/userAdmin/getUserPage', data)
}

export const addRole = (data:any) => { // 添加角色
  return $post('/role/addRole', data)
}

export const getRoleList = (data:any) => { // 角色列表
  return $post('/role/getRolePage', data)
}

export const getAuthList = (data:any) => { // 权限列表
  return $get('/permission/getPermissionZTreeNodes', data)
}
