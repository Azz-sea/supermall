import Home from '../views/home/Home'
import List from '../views/list/List'
import Cart from '../views/cart/Cart'
import Profile from '../views/profile/Profile'
import Detail from '../views/detail/Detail'
import { createRouter, createWebHistory } from 'vue-router'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/",redirect:"/home"},
        { path: "/home", component: Home },
        {path:"/list",component:List},
        {path:"/cart",component:Cart},
        {path: "/profile", component: Profile},
        {path:"/detail/:iid",component:Detail},
    ]
 
})

export default router