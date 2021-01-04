import { getAuthList } from '../../api/http';
import { Dispatch } from 'redux';
import { GETAUTHLIST } from '../type';
import { message } from 'antd';
export const getRoleAuth: (data:any)=>any = (data)=>{
  return (dispatch:Dispatch)=>{
    return getAuthList(data).then((res)=>{
      if (res && res.length > 0) {
        dispatch({ type: GETAUTHLIST, authList: res });
      } else {
        message.error('获取权限列表报错');
        console.log(res)
      }
    })
  }
}