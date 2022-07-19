import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router'
// ↓创建路由实例并传递routes
const router = createRouter({
    // ↓router内部提供了history模式的实现，使用hash模式
    history: createWebHashHistory(),
    routes,
  })
  
export default router
  