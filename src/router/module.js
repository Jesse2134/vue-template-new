const Layout = resolve => require(['@/components/layout'], resolve);
// const ThirdRouter = resolve => require(['@/views/common/thirdRouter.vue'], resolve)

const Project = resolve => require(['@/views/module/project.vue'], resolve);
const User = resolve => require(['@/views/module/user.vue'], resolve);
const Example = resolve => require(['@/views/module/example.vue'], resolve);
const Auth = resolve => require(['@/views/module/auth.vue'], resolve);

export default [{
    path: '/project',
    name: 'project',
    component: Layout,
    iconClass: 'fa fa-tv',
    meta: {
      requireAuth: true,
      title: '我的项目'
    },
    children: [{
      path: 'index',
      name: 'project/index',
      component: Project,
      meta: {
        requireAuth: true,
        title: '我的项目'
      },
    }]
  },
  {
    path: '/example',
    name: 'example',
    component: Layout,
    iconClass: 'fa fa-caret-square-o-right',
    meta: {
      requireAuth: true,
      title: '示例演示'
    },
    children: [{
      path: 'index',
      name: 'example/index',
      component: Example,
      meta: {
        requireAuth: true,
        title: '示例演示'
      },
    }]
  },
  {
    path: '/system',
    name: 'system',
    component: Layout,
    iconClass: 'fa fa-gear',
    meta: {
      requireAuth: true,
      title: '系统设置'
    },
    children: [{
        path: 'auth',
        name: 'system/auth',
        component: Auth,
        meta: {
          requireAuth: true,
          title: '权限管理'
        },
      },
      {
        path: 'user',
        name: 'system/user',
        component: User,
        meta: {
          requireAuth: true,
          title: '用户管理'
        },
      }
    ]
  }
]
