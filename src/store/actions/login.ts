import { login } from '../../api/http';
import { Dispatch } from 'redux';
import { SETTOKEN } from '../type';
export const getToken: (data:any)=>any = (data)=>{
  return (dispatch:Dispatch)=>{
    return login(data).then((token)=>{
      localStorage.setItem('token', token);
      dispatch({ type: SETTOKEN, token });
    })
  }
}