import { createRouter, createWebHistory } from 'vue-router'
import isAdmin from '@/middlewares/isAdmin'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import(`@/pages/LandingPage`)
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import(`@/pages/LoginPage`)
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import(`@/pages/RegisterPage`)
  },
  {
    path: '/room-list',
    name: 'roomlist',
    component: ()=>import(`@/pages/BoardingRooms`)
  },
  {
    path: '/user',
    name: 'user',
    component: ()=>import(`@/pages/UserPage`)
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: {name: 'adminDashboard'},
    component: ()=>import(`@/pages/admin/AdminPage`),
    // beforeEnter: isAdmin,
    children: [
      {
        path: 'dashboard',
        name: 'adminDashboard',
        component: ()=>import(`@/pages/admin/dashboard/AdminDashboard`),
        // beforeEnter: isAdmin
      },
      {
        path: 'users',
        name: 'adminUsers',
        component: ()=>import(`@/pages/admin/users/UserList`),
        // beforeEnter: isAdmin
      },
      {
        path: 'rooms',
        name: 'adminRooms',
        component: ()=>import(`@/pages/admin/rooms/AdminRooms`),
        // beforeEnter: isAdmin
      },
      {
        path: 'reservation',
        name: 'adminReservation',
        component: ()=>import(`@/pages/admin/reservation/AdminReservation`),
        // beforeEnter: isAdmin
      },
      {
        path: 'maintenance',
        name: 'adminMaintenance',
        component: ()=>import(`@/pages/admin/maintenance/AdminMaintenance`),
        // beforeEnter: isAdmin
      },
      {
        path: 'reports',
        name: 'adminReports',
        component: ()=>import(`@/pages/admin/reports/AdminReports`),
        // beforeEnter: isAdmin
      },
      {
        path: 'amenities',
        name: 'adminAmenities',
        component: ()=>import(`@/pages/admin/amenities/AdminAmenities`),
        // beforeEnter: isAdmin
      },

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router