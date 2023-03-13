<template>
  <div class="home-container container-fluid p-0">
    <div v-for="(sellingpost,index) in sellingposts" :key="index" class="d-flex flex-wrap align-items-start">
      <div v-if="sellid == sellingpost.id" class="col-12">
      <SellingHeadingSmall 
        :heading="sellingpost.heading"
        :contact="contact"
        :image="`url(${require(`../assets/images/${ sellingpost.image }`)})`"
        :altimage="sellingpost.altImage"
        :bgPosition="sellingpost.imageSize"
      />
      </div>
      <div v-if="sellid == sellingpost.id" class="col-12">
        <SellingHome :pageInfo="sellingpost" />
      </div>
    
    </div>
    <div class="container-fluid">
        <ContactJohn />
      </div>
  </div>
</template>

<script>
import ContactJohn from "../components/contactJohn.vue";
import SellingHeadingSmall from "../containers/sellingHeadingSmall.vue";
import SellingHome from "../selling/sellingHome.vue";
import { sellingPosts } from "../js/components/data";
export default {
  name: "sellingPost",
  components: {
    SellingHeadingSmall,
    SellingHome,
    ContactJohn,
  },
  data () {
    return {
      sellingposts: sellingPosts,
      sellid: this.$route.params.sellingid,
    }
  },
};
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