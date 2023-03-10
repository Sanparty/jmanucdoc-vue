<template>
  <div class="home-container container-fluid p-0">
    <div class="d-flex flex-wrap align-items-start">
      <div class="col-12">
      <BuyingMenuSmmall 
    :heading="closingSale.heading"
    :contact="contact"
    :image="`url(${require('../assets/images/agent_showing_home.jpeg')})`"
    :altimage="`Real Estate Agent Showing Home To Clients`"
    :bgPosition="`center center`"
    />
  </div>
      <div class="col-12">
        <BuyingHome :pageInfo="closingSale" /> 
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
import {
  closingSale
} from "../js/components/buying";
export default {
  name: "buyingClosing",
  components: {
    BuyingMenuSmmall,
    BuyingHome,
    ContactJohn,
  },
  data() {
    return {
      closingSale: closingSale,
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