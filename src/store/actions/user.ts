import { getUserList } from '../../api/http';
import { Dispatch } from 'redux';
import { SETTOKEN } from '../type';
export const getToken: (data:any)=>any = (data)=>{
  return (dispatch:Dispatch)=>{
    return getUserList(data).then((data)=>{
      dispatch({ type: SETTOKEN, data });
    })
  }
}