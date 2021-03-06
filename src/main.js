import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from  '@/store'
import vuetify from '@/plugins/vuetify'
import VueFbCustomerChat from 'vue-fb-customer-chat'
import VueParticles from 'vue-particles'
import Carousel3d from 'vue-carousel-3d'
import { apolloProvider } from '@/services'
import AOS from 'aos'


Vue.use(VueFbCustomerChat, {
  page_id: null, //  change 'null' to your Facebook Page ID, 106304557778712
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})


Vue.use(VueParticles)
Vue.use(Carousel3d)


Vue.config.productionTip = false

import 'aos/dist/aos.css'


new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount("#app")
