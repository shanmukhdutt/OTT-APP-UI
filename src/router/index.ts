import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/HomePage'
  },
  {
    path: '/tabs',
    component: Tabs,
    children:[
      {
        path:'',
        redirect:'/tabs/HomePage'
      },
      {
        path:'HomePage',
        component:()=>import('@/views/HomePage.vue')
      },
      {
        path:'TeluguMovies',
        component:()=>import('@/views/TeluguMovies.vue')
      },
      {
        path:'TamilMovies',
        component:()=>import('@/views/TamilMovies.vue')
      },
      {
        path:'MalayalamMovies',
        component:()=>import('@/views/MalayalamMovie.vue')
        
      },
      {
        path:'KannadaMovies',
        component:()=>import('@/views/KannadaMovie.vue')
      }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
