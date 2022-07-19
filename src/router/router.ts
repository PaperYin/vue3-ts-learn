const  Home  = () => import('@/views/Home/index.vue')


// ↓定义路由
export default  [
  {
    path: '/',
    redirect: { name: 'home' },
  }, {
    path: '/home',
    name:"home",
    component:Home
  }
]

