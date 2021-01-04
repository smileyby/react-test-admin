import { GETAUTHLIST } from '../type';
export interface IAuthState {
  authList: [];
}

const initState:IAuthState = {
  authList: []
}

export const authReducer = (state:IAuthState = initState, action:any) => {
  switch (action.type) {
    case GETAUTHLIST:
      return {
        ...state,
        authList: action.authList
      }
    default: 
      return {
        ...state
      }
  }
}