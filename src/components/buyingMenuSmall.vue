<template> 
    <div class="contact-box d-none d-lg-flex flex-column justify-content-center align-items-start col-lg-3">
      <ul>
        <li v-for="(buyingpost,index) in buyingposts" :key="index" class="no-underline" @click="showBuyingPost(buyingpost.id)">{{  buyingpost.heading }}</li>
      </ul>
    </div>
    <div class="d-lg-none scrollmenu py-3">
        <span v-for="(buyingpost,index) in buyingposts" :key="index" class="smallmenulink" @click="showBuyingPost(buyingpost.id)">{{  buyingpost.heading }}</span>
    
    </div>
</template>

<script>
    import { buyingPosts } from "../js/components/data";
    export default {
        name: "BuyingMenuSmall",
        data () {
          return {
            buyingposts: buyingPosts
          }
        },
        methods:{
          showBuyingPost(id) {
            this.$router.push({name:'buyingposts', params:{buyingid:id}})
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
}
.smallmenulink {
    padding-right: 10px;
    padding-left: 10px;
    font-weight: bold;
    text-decoration: none;
    color: #f7f7f7;
}
@media screen and (min-width: 992px) {  
    li {
        font-size: 1.25rem;
    }
}
</style>