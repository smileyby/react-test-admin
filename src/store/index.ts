import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer, ILoginState } from './reducers/login';
import { IUserState, userReducer } from './reducers/user';
import { authReducer, IAuthState } from './reducers/auth'

export interface IState {
  login: ILoginState,
  auth: IAuthState,
  user: IUserState
}

let rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  auth: authReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
