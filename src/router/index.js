import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUp.vue'
import NewLead from '../views/NewLead.vue'
import ShowLeads from '../views/ShowLeads.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/showleads',
    name: 'ShowLead',
    component: ShowLeads
  },
  {
    path: '/newlead',
    name: 'NewLead',
    component: NewLead
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
