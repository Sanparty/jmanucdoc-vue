import { createRouter,
         createWebHistory,
 } from "vue-router";
import HomeJohn from "../home/homeJohn.vue";
import BlogJohn from "../blog/blogJohn.vue";
import BlogPost from "../blogposts/blogPost.vue";
import ContactContainer from "../contact/contactContainer.vue";
import BuyingContainer from "../buying/buyingContainer.vue"
import BuyingPost from "../buying/buyingPost.vue"
import SellingContainer from "../selling/sellingContainer.vue"
import SellingPost from "../selling/sellingPost.vue"
import AboutContainer from "../about/aboutContainer.vue"
import CommunitiesContainer from "../communities/communitiesContainer.vue"
import EvaluationContainer from "../selling/evaluationContainer.vue"
import CalculatorContainer from "../buying/calculatorContainer.vue"

const router =  createRouter({
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
    {
        path:'/buying/',
        name: 'Buying',
        meta: {
            title: "John Manucdoc | Buying"
        },
        component: BuyingContainer,
    },
    {
        path:'/buying/:buyingid',
        name: 'buyingposts',
        meta: {
            title: "John Manucdoc | Buying"
        },
        component: BuyingPost,
    },
    {
        path:'/selling/',
        name: 'Selling',
        meta: {
            title: "John Manucdoc | Selling"
        },
        component: SellingContainer,
    },
    {
        path:'/selling/:sellingid',
        name: 'sellingposts',
        meta: {
            title: "John Manucdoc | Selling"
        },
        component: SellingPost,
    },
    {
        path:'/about/',
        name: 'About',
        meta: {
            title: "John Manucdoc | About"
        },
        component: AboutContainer,
    },
    {
        path:'/communities/',
        name: 'Communities',
        meta: {
            title: "John Manucdoc | Communities"
        },
        component: CommunitiesContainer,
    },
    {
        path:'/selling/home-valuation/',
        name: 'HomeEvaluation',
        meta: {
            title: "John Manucdoc | Free Home Evaluation"
        },
        component: EvaluationContainer,
    },
    {
        path:'/buying/mortgage-calculator/',
        name: 'MortgageCalculator',
        meta: {
            title: "John Manucdoc | Mortgage Calculator"
        },
        component: CalculatorContainer,
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
   
    if (typeof(titleFromParams) === 'string') {
        document.title = `${titleFromParams}`
    } else if (typeof(to.meta?.title) === 'string') {
        document.title = to.meta?.title ?? 'John Manucdoc'
    }
    next()
  })

  export default router