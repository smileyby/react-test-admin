import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer, ILoginState } from './reducers/login';
import { userReducer } from './reducers/user';

export interface IState {
  login: ILoginState
}

let rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
