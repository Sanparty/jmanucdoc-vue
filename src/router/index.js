import { createRouter,
         createWebHashHistory,
 } from "vue-router";
import HomeJohn from "../home/homeJohn.vue";
import BlogJohn from "../blog/blogJohn.vue";
import BlogPost from "../blogposts/blogPost.vue"

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
    }, {
        path:'/blogposts/:blogId',
        name: 'Blogposts',
        component: BlogPost,
    }],
}) ;