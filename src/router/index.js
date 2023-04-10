import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Checkout from "../views/Checkout.vue";
import User from "../views/User.vue";
const routes = [
  {
   path: '/' ,
   name: 'Home',
   component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
