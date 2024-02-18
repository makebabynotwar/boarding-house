import { createRouter, createWebHistory } from 'vue-router'
import isAdmin from '@/middlewares/isAdmin';
import isTenant from '@/middlewares/isTenant';
import isAuthenticated from '@/middlewares/isAuthenticated';

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: ()=>import(`@/pages/LandingPage`),
    beforeEnter: isAuthenticated,
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import(`@/pages/LoginPage`),
    beforeEnter: isAuthenticated,

  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import(`@/pages/RegisterPage`),
    beforeEnter: isAuthenticated,
  },
  {
    path: '/room-list',
    name: 'roomlist',
    component: ()=>import(`@/pages/BoardingRooms`),
    beforeEnter: isTenant,
  },
  {
    path: '/user-profile',
    name: 'user',
    component: ()=>import(`@/pages/UserPage`),
    beforeEnter: isTenant,
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    component: ()=>import(`@/pages/MaintenancePage`),
    beforeEnter: isTenant,
  },
  {
    path: '/reservations',
    name: 'reservation',
    component: ()=>import(`@/pages/ReservationPage`),
    beforeEnter: isTenant,
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