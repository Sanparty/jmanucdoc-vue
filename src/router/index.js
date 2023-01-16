import { createRouter,
         createWebHashHistory,
 } from "vue-router";
import HomeJohn from "../components/homeJohn.vue";
import BlogJohn from "../blog/blogJohn.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [{
        path:'/',
        name: 'Home',
        component: HomeJohn,
    }, {
        path:'/blog',
        name: 'Blog',
        component: BlogJohn,
    }],
}) ;