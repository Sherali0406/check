import { createRouter, createWebHistory } from 'vue-router'
import admin from './admin'
import auth from './auth'
import director from './director'
import finance from './finance'
import teacher from './teacher'
import notFound from './not-found'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    admin,
    auth,
    director,
    finance,
    teacher,
    notFound
  ]
})

export default router
