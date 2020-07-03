import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import layout from "./layouts/Applayout.vue"
// pages

import Roulette from "./views/Roulette.vue"
import Profile from "./views/Profile.vue"
import User from "./views/User.vue"
import Faq from "./views/Faq.vue"
import Livetrade from "./views/Livetrade.vue"

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: layout,
            children: [
                {
                    path: '/',
                    name: 'index',
                    component: Roulette
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: Profile
                },
                {
                    path: '/user/:id',
                    name: 'user',
                    component: User
                },
                {
                    path: '/faq',
                    name: 'faq',
                    component: Faq
                },
                {
                    path: '/trade',
                    name: 'livetrade',
                    component: Livetrade
                }
            ]
        }
    ],
});