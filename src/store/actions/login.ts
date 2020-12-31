import { login } from '../../api/http';
import { Dispatch } from 'redux';
import { SETTOKEN } from '../type';
export const getToken: (data:any)=>any = (data)=>{
  return (dispatch:Dispatch)=>{
    return login(data).then((res)=>{
      let { status, obj: { accessToken } } = res;
      if (status === '200') {
        localStorage.setItem('token', accessToken);
        dispatch({ type: SETTOKEN, token: accessToken });
      } else {
        console.log('请求登录报错：',{res})
      }
    })
  }
}