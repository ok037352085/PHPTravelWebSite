import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Home.vue'
import Attraction from '../Attraction.vue'
import AttractionDetail from '../AttractionDetail.vue'
import Login from '../Login.vue'
import Schedule from '../Schedule.vue'
import Register from '../Register.vue'
import Member from '../Member.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/attraction', name: 'Attraction', component: Attraction},
    {path: '/attraction/:id', name: 'AttractionDetail', component: AttractionDetail, props: true},
    {path: '/login', name: 'Login', component: Login},
    {path: '/schedule', name: 'Schedule', component: Schedule},
    {path: '/register', name: 'Register', component: Register},
    {path: '/member', name: 'Member', component: Member}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router