import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import HomePage from './components/HomePage.vue'
import VehicleDetails from '@/components/VehicleDetails.vue'
import VehicleMonitoring from '@/components/VehicleMonitoring.vue'
import VehicleStatistics from '@/components/VehicleStatistics.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
        children: [
            { path: '', component: VehicleDetails },
            { path: 'vehicle-details', component: VehicleDetails },
            { path: 'vehicle-monitoring', component: VehicleMonitoring },
            { path: 'vehicle-statistics', component: VehicleStatistics }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
