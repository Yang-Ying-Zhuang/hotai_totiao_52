import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Iogin from "../views/login.vue"

const router = new VueRouter({
  routes:[
    {
      name:"login",
      path:"/login",
      component: Iogin
    }
  ]
})


// 暴露路由
export default router