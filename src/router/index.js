/*
import { createWebHistory, createRouter } from 'vue-router'

import LoginPage from '../Components/AuthPage/AuthPage.vue'
import RegisterPage from '../Components/RegisterPage/RegisterPage.vue'
import store from '../store'
import VueBodyClass from 'vue-body-class';


const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage
    },
    // {
    //     path: '/about',
    //     component: AboutView
    // },
    // {
    //     path: '/rules',
    //     component: Rules
    // },
    // {
    //     path: '/auth',
    //     component: Auth,
    //     name: 'login',
    //     // meta: {
    //     //     bodyClass: '',
    //     // }
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) });

router.beforeEach((to,from) =>{
    if(to.meta.requiresAuth && store.getters.getToken === 0){
        return { name : 'Login'}
    }
    if(to.meta.requiresAuth === false && store.getters.getToken !== 0){
        return { name : 'Dashboard'}
    }
})

export default router
*/

import {createRouter, createWebHistory} from 'vue-router';
import AuthComponent from "../components/Pages/Auth/AuthComponent.vue";
import store from '../store'
import Playground from "../components/Console/Playground/Playground.vue";
import Keys from "../components/Console/Keys/Keys.vue";
import Usage from "../components/Console/Usage/Usage.vue";
import Limits from "../components/Console/Limits/Limits.vue";

const routes = [
    {
        path : '/login',
        name : 'LoginPage',
        component : AuthComponent,
        meta:{
            requiresAuth:false
        }
    },
    {
        path : '/playground',
        name : 'Playground',
        component : Playground,
        meta:{
            requiresAuth:true
        }
    },
    {
        path : '/keys',
        name : 'Keys',
        component : Keys,
        meta:{
            requiresAuth:true
        }
    },
    {
        path : '/settings/usage',
        name : 'Usage',
        component : Usage,
        meta:{
            requiresAuth:true
        }
    },
    {
        path : '/settings/limits',
        name : 'Limits',
        component : Limits,
        meta:{
            requiresAuth:true
        }
    },
    // {
    //     path : '/register',
    //     name : 'Register',
    //     component : register,
    //     meta:{
    //         requiresAuth:false
    //     }
    // },
    // {
    //     path : '/playground',
    //     name : 'Playground',
    //     component : Console,
    //     meta:{
    //         requiresAuth:true
    //     }
    // },
    // {
    //     path : '/keys',
    //     name : 'keys',
    //     component : Keys,
    //     meta:{
    //         requiresAuth:true
    //     }
    // },
    // {
    //     path : '/settings/limits',
    //     name : 'Limits',
    //     component : Limits,
    //     meta:{
    //         requiresAuth:true
    //     }
    // },
    // {
    //     path : '/settings/billing',
    //     name : 'Billing',
    //     component : Billing,
    //     meta:{
    //         requiresAuth:true
    //     }
    // },
    // {
    //     path : '/settings/usage',
    //     name : 'Usage',
    //     component : Usage,
    //     meta:{
    //         requiresAuth:true
    //     }
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach((to,from) =>{
    if(to.meta.requiresAuth && store.getters.getToken === 0){
        return { name : 'LoginPage'}
    }
    if(to.meta.requiresAuth === false && store.getters.getToken !== 0){
        return { name : 'Playground'}
    }
})

export default router;
