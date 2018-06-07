// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/my-mint.css';//全局修改mint-UI样式  


//注册MintUI
Vue.use(MintUI)


Vue.config.productionTip = false

//定义一个VUE内全局用到的名称（标题）
Vue.prototype.appName = '';


//通过components下的index.js文件导入组件
import components from './components/index'

//对导入的组件进行全局组件注册
Object.keys(components).forEach((key) => {
	Vue.component(key, components[key])
});

//通过filters.js导入自定义用于过滤的函数
import filters from './config/filters'

//对导入的函数进行全局过滤器注册
Object.keys(filters).forEach((key) => {
	Vue.filter(key, filters[key])
});

//methods.js导入自定义方法(/变量)用于全局方法
import methods from './config/methods'
//方法挂靠全局
Object.keys(methods).forEach((key) => {
	Vue.prototype[key] = methods[key];
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
