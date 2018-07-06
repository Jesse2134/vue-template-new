const NotFound = resolve => require(['@/views/common/404'], resolve);
const Login = resolve => require(['@/views/common/login'], resolve);

export default [{
    path: '/',
    redirect: '/project/index',
    meta: {
      requireAuth: true,
      hidden: true
    }
  },
  {
    path: '/index',
    redirect: '/project/index',
    meta: {
      requireAuth: true,
      hidden: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requireAuth: true,
      hidden: true,
      title: '登录',
    }
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    meta: {
      hidden: true,
      title: '未找到页面',
    }
  },
  {
    path: '*',
    redirect: '/404',
    meta: {
      hidden: true
    }
  }
]
