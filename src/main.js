import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'

import homePage from '/src/pages/homePage.vue';

createApp(App)
    .use(VueRouter.createRouter({
        history: VueRouter.createWebHistory(process.env.BASE_URL),
        routes: [
            {
                path: '/',
                component: homePage
            }
        ]
    }))
    .mount('#app')
