const  Home  = () => import('@/views/Home/index.vue')
const  page0  = () => import('@/views/page0/index.vue')
const  page1 = () => import('@/views/page1/index.vue')
const  page2 = () => import('@/views/page2/index.vue')
const  page3 = () => import('@/views/page3/index.vue')
const  page4  = () => import('@/views/page4/index.vue')
const  page5  = () => import('@/views/page5/index.vue')
const  page6  = () => import('@/views/page6/index.vue')
const  page7  = () => import('@/views/page7/index.vue')
const  page8  = () => import('@/views/page8/index.vue')
const  page9  = () => import('@/views/page9/index.vue')
const  page10  = () => import('@/views/page10/index.vue')
const  page11  = () => import('@/views/page11/index.vue')
const  page12  = () => import('@/views/page12/index.vue')
const  page13  = () => import('@/views/page13/index.vue')
const  page14  = () => import('@/views/page14/index.vue')
// ↓定义路由
export default  [
  {
    path: '/',
    redirect: { name: 'home' },
  }, {
    path: '/home',
    name:"home",
    component:Home
  },
  {
    path: '/0',
    component:page0
  },
  {
    path: '/1',
    component:page1
  },
  {
    path: '/2',
    component:page2
  },
  {
    path: '/3',
    component:page3
  },
  {
    path: '/4',
    component:page4
  },
  {
    path: '/5',
    component:page5
  },
  {
    path: '/6',
    component:page6
  },
  {
    path: '/7',
    component:page7
  },
  {
    path: '/8',
    component:page8
  },
  {
    path: '/9',
    component:page9
  },
  {
    path: '/10',
    component:page10
  },
  {
    path: '/11',
    component:page11
  }
]

