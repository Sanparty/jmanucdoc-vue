import { createRouter,
         createWebHistory,
 } from "vue-router";
import HomeJohn from "../home/homeJohn.vue";
import BlogJohn from "../blog/blogJohn.vue";
import BlogPost from "../blogposts/blogPost.vue";
import ContactContainer from "../contact/contactContainer.vue"

let router =  createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [{
        path:'/',
        name: 'Home',
        meta: {
            title: "John Manucdoc"
        },
        component: HomeJohn,
    }, 
    {
        path:'/blog',
        name: 'Blog',
        meta: {
            title: "John Manucdoc | Blog"
        },
        component: BlogJohn,
    }, 
    {
        path:'/blogposts/:blogId',
        name: 'Blogposts',
        meta: {
            title: "John Manucdoc | Blog"
        },
        props: true,
        component: BlogPost,
    },
    {
        path: "/blogposts/",
        redirect: "/blog",
        meta: {
            title: "John Manucdoc | Blog"
        },
    },
    {
        path:'/contact/',
        name: 'Contact',
        meta: {
            title: "John Manucdoc | Contact"
        },
        component: ContactContainer,
    },
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
 // eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
    const titleFromParams = to.params?.blogName
   
    if (titleFromParams) {
      document.title = `${titleFromParams}`
    } else {
      document.title = to.meta?.title ?? 'John Manucdoc'
    }
    next()
  })

  export default router