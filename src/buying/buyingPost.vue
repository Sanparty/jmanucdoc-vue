<template>
  <div class="home-container container-fluid p-0">
    <div v-for="(buyingpost,index) in buyingposts" :key="index" class="d-flex flex-wrap align-items-start">
      <div v-if="buyid == buyingpost.id" class="col-12">
      <BuyingHeadingSmall 
        :heading="buyingpost.heading"
        :image="`url(${require(`../assets/images/${ buyingpost.image }`)})`"
        :altimage="buyingpost.altImage"
        :bgPosition="buyingpost.imageSize"
      />
      </div>
      <div v-if="buyid == buyingpost.id" class="col-12">
        <BuyingHome :pageInfo="buyingpost" />
      </div>
    
    </div>
    <div class="container-fluid">
        <ContactJohn />
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactJohn from "../components/contactJohn.vue";
import BuyingHeadingSmall from "../containers/buyingHeadingSmall.vue";
import BuyingHome from "./buyingHome.vue";
import { buyingPosts } from "@/js/components/data";
export default defineComponent ({
  name: "buyingPost",
  components: {
    BuyingHeadingSmall,
    BuyingHome,
    ContactJohn,
  },
  data () {
    return {
      buyingposts: buyingPosts,
      buyid: this.$route.params.buyingid,
    }
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home-container {
  padding-top: 20px;
  background-color: #f7f7f7;
}
</style>