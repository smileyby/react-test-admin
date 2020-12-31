import { SETTOKEN } from '../type';
export interface ILoginState {
  token: string;
  userInfo: any;
}

const token = localStorage.getItem('token');
const initState:ILoginState = {
  token: token ? token : '',
  userInfo: {}
}
export const loginReducer = (state:ILoginState, action:any) => {
  switch (action.type) {
    case SETTOKEN:
      return {
        ...state,
        token: action.token
      }
    default: 
      return {
        ...state
      }
  }
}