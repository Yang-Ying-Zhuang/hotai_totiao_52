import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Iogin from "../views/login.vue"
import Index from "../views/index.vue"
import Welcome from "../views/welcome.vue"
import Postlist from "../views/posts/postlist.vue"

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect:{name:"index"},
    },
    {
      name: "login",
      path: "/login",
      component: Iogin
    },
    {
      name: "index",
      path: "/index",
      component: Index,
      // 重定向的时候要使用name,如果在嵌套路由的时候，使用path，会被当成根路由来看待
      redirect:{name:"welcome"},
      children:[
        {
          name: "welcome",
          path: "welcome",
          component: Welcome,
        },
        {
          name: "postlist",
          path: "postlist",
          component: Postlist,
        }
      ]
    }
  ]
})

// 全局导航守卫,拦截路由跳转
router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next()
  }else{
     // 获取本地存储token
    let token = localStorage.getItem("hotai_52")
    // 判断有没有token
    if (token) {
      next()
    } else {
      next({path:"/login"})
    }
  }

})


// 暴露路由
export default router