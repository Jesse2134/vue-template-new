import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Utils from '@/utils';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: routes
});

// 路由拦截器
router.beforeEach((to, from, next) => {
  console.log(to.path);
  if (to.path === '/login') {
    Utils.removeCookies('token');
    Utils.removeCookies('role');
    next()
  } // 判断是否需要登录才能访问
  else if (to.matched.some(record => record.meta && record.meta.requireAuth)) {
    const token = Utils.getCookies('token');
    const role = Utils.getCookies('role');
    // 无 token 即未登录，跳转到登录页面
    if (!token || !role) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      }) // 验证当前登录用户是否有权限访问该路由
    } else if (to.meta && to.meta.onlyAuth && !to.meta.onlyAuth.includes(role)) {
      next({
        path: '/index'
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router;
