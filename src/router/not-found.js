export default {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: import('../pages/not-found/NotFound.vue')
}