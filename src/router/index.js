import { createRouter,
         createWebHistory,
 } from "vue-router";
import HomeJohn from "../home/homeJohn.vue";
import BlogJohn from "../blog/blogJohn.vue";
import BlogPost from "../blogposts/blogPost.vue"

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [{
        path:'/',
        name: 'Home',
        component: HomeJohn,
    }, {
        path:'/blog',
        name: 'Blog',
        component: BlogJohn,
    }, 
    {
        path:'/blogposts/:blogId',
        name: 'Blogposts',
        component: BlogPost,
    },
    {
        path: "/blogposts/",
        redirect: "/blog",
    }
    ],
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
    },
}) 
