<template> 
    <div class="contact-box d-none d-lg-flex flex-column justify-content-center align-items-start col-lg-3">
      <ul>
        <li v-for="(sellingpost,index) in sellingposts" :key="index" class="no-underline" @click="showSellingPost(sellingpost.id)">{{  sellingpost.heading }}</li>
        <li><router-link :to="{name: evaluationlink.routerlink}" class="no-underline">{{ evaluationlink.name }}</router-link></li>
      </ul>
    </div>
    <div class="d-lg-none scrollmenu py-3">
        <span v-for="(sellingpost,index) in sellingposts" :key="index" class="smallmenulink" @click="showSellingPost(sellingpost.id)">{{  sellingpost.heading }}</span>
        <router-link :to="{name: evaluationlink.routerlink}" class="smallmenulink">{{ evaluationlink.name }}</router-link>
    </div>
</template>

<script>
   import { sellingPosts } from "../js/components/data";
   import { evaluationLink } from "../js/components/pagelinks";
   export default {
        name: "SellingMenuSmall",
        data () {
          return {
            sellingposts: sellingPosts,
            evaluationlink: evaluationLink
          }
        },
        computed: {

        },
        methods:{
          showSellingPost(id) {
            this.$router.push({name:'sellingposts', params:{sellingid:id}})
          }
        },
    }
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  color: #f7f7f7;
  font-weight: bold;
  font-size: 1rem;
}
li:hover,
.no-underline:hover {
  color: #cc2a38;
  transition: 0.5s ease;
  cursor: pointer;
}
.contact-box {
  text-align: left;
  padding-top: 20px;
}
.contact-box a {
    color: #f7f7f7;
    text-decoration: none;
}
.scrollmenu {
  overflow: auto;
  white-space: nowrap;
  text-align: center;
}
.smallmenulink {
    padding-right: 10px;
    padding-left: 10px;
    font-weight: bold;
    text-decoration: none;
    color: #f7f7f7;
    cursor: pointer;
}
@media screen and (min-width: 992px) {  
    li {
        font-size: 1.15rem;
    }
}
</style>