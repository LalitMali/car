// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../bulma/css/bulma.min.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRouter from 'vue-router'
import Home from './View/Home.vue'
import listing from './View/listing.vue'
import listings from './View/listing2.vue'
import financecategory from './View/financecategory.vue'
import quotes from './View/quotes.vue'
// import vue from 'vue'
import VueCarousel from 'vue-carousel'
Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(VueCarousel)
Vue.config.productionTip = false
/* eslint-disable no-new */
const routes = [
  { path: '/', component: Home },
  { path: '/listing', component: listing },
  { path: '/listing2', component: listings },
  { path: '/financecategory', component: financecategory },
  { path: '/quotes', component: quotes }
]
const router = new VueRouter({
  routes: routes
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
