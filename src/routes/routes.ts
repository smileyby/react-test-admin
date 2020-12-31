import Login from '../pages/login/login';
import Index from '../pages/index/index';
import Role from '../pages/manage/role';
import Auth from '../pages/manage/auth';
import User from '../pages/manage/user';
export const routes = [
  {
    breadcrumb: '首页',
    path: '/index',
    component: Index,
    isRoute: true,
  },
  {
    breadcrumb: '管理中心',
    path: '/manage',
    isRoute: false,
    children: [
      {
        breadcrumb: '用户管理',
        path: '/manage/user',
        component: User,
        isRoute: true,
      },
      {
        breadcrumb: '权限管理',
        path: '/manage/auth',
        component: Auth,
        isRoute: true,
      },
      {
        breadcrumb: '角色管理',
        path: '/manage/role',
        component: Role,
        isRoute: true,
      }
    ]
  },
  {
    breadcrumb: '登录',
    path: '/login',
    component: Login,
    isRoute: true,
  },
]