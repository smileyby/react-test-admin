import { GETUSERLIST } from '../type';
export interface IUserState {
  userList: [];
}

const initState:IUserState = {
  userList: []
}
export const userReducer = (state:IUserState, action:any) => {
  switch (action.type) {
    case GETUSERLIST:
      return {
        ...state,
        userList: action.userList
      }
    default: 
      return {
        ...state
      }
  }
}