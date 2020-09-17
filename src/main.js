import Vue from 'vue'
import App from './App.vue'

import '../src/styles/index.less'

// import 'element-ui/lib/theme-chalk/index.css'; 
// import ElementUI from 'element-ui'; //全局引入
// Vue.use(ElementUI)

import 'element-ui/lib/theme-chalk/index.css'; 
import { Button,ButtonGroup,Input,Form,FormItem,Message,Menu,Submenu,
MenuItemGroup,MenuItem,DropdownMenu,Container,Aside,Header,Main,Row,Col
   } from 'element-ui'; // 按需引入
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.component(Message)
Vue.prototype.$message = Message;
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(DropdownMenu);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Row);
Vue.use(Col);


Vue.config.productionTip = false

// 引入路由
import router from "./router/01-index"

new Vue({
  router, // 注入路由
  render: h => h(App),
}).$mount('#app')
