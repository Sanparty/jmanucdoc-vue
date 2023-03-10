<template>
  <div class="home-container container-fluid p-0">
    <div class="d-flex flex-wrap align-items-start">
      <div class="col-12">
      <BuyingMenuSmmall 
    :heading="viewingHomes.heading"
    :contact="contact"
    :image="`url(${require('../assets/images/AdobeStock_16789283_New.jpg')})`"
    :altimage="`Suburban Homes`"
    :bgPosition="`center center`"
    />
  </div>
      <div class="col-12">
        <BuyingHome :pageInfo="viewingHomes" />
      </div>
      <div class="container-fluid">
        <ContactJohn />
      </div>
    </div>
  </div>
</template>

<script>
import ContactJohn from "../components/contactJohn.vue";
import BuyingMenuSmmall from "../components/buyingMenuSmall.vue";
import BuyingHome from "./buyingHome.vue";
import { viewingHomes } from "../js/components/buying.js";
export default {
  name: "buyingViewing",
  components: {
    BuyingMenuSmmall,
    BuyingHome,
    ContactJohn,
  },
  data() {
    return {
      viewingHomes: viewingHomes,
    };
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