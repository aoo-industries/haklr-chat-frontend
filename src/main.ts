import Vue from 'vue'
import App from './App.vue'
import router from './router'



//@ts-expect-error Simple directive module
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
