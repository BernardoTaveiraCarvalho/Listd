import {createRouter,createWebHistory} from 'vue-router'


const routes = [
   // {path: '/',component: Home},
    {path: '/formTask',name: 'formTask', component: () => import('../components/FormTask.vue')},
    {path: '/taskList',name: 'taskList',component: () => import('../components/TaskList.vue')},
    {path: '/taskDetail/:id',name: 'taskDetail',component: () => import('../components/TaskDetail.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router