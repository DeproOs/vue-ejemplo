import Vue from 'vue'
import VueRouter from 'vue-router'
import Yosoy from '@/views/YoSoy.vue'
import MiInfo from '@/views/MiInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/yo-soy',
    name: 'yo-soy',
    component: Yosoy
  },
  {
    path: '/mi-info',
    name: 'mi-info',
    component: MiInfo
  }
]

const router = new VueRouter({
  routes
})

export default router
