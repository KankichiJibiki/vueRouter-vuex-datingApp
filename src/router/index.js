import { createRouter, createWebHistory } from "vue-router";
import userList from '@/pages/user-list.vue'

const routes = [
    {path: '/' , component: userList},
    {
        path: '/user/:id/', 
        name:'user.show', 
        component: ()=>import('@/components/UserDetails.vue'),
        props: route => ({...route.params, id: route.params.id}),
    },
    {path: '/user/id', component: ()=>import('@/pages/user-detail.vue')},
    {
        path: '/user/:id/chat',
        name: 'user.chat',
        component: ()=>import('@/pages/chat.vue'),
    },
    {path: '/message-list', component: ()=>import('@/pages/message-list.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'routerLinkActive',
})

export default router