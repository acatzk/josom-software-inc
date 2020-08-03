import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from  '@/store'
import vuetify from '@/plugins/vuetify'
import VueFbCustomerChat from 'vue-fb-customer-chat'
import VueAgile from 'vue-agile'

Vue.use(VueFbCustomerChat, {
  page_id: null, //  change 'null' to your Facebook Page ID, 106304557778712
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})

Vue.use(VueAgile)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app")
