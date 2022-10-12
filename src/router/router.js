import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '/' , component: ()=>import('@/components/user-list.vue')},
    {path: 'user/id', component: ()=>import('@/components/user-detail.vue')},
    {path: 'user/id/chat', component: ()=>import('@/components/chat.vue')},
    {path: 'message-list', component: ()=>import('@/components/message-list')},
]

const router = createRouter({
    history: createWebHistory,
    routes,
    linkActiveClass: 'routerLinkActive',
})

export default router