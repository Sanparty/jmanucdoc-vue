<template>
  <div class="home-container container-fluid p-0">
    <div class="d-flex flex-wrap align-items-start">
      <!-- <div class="col-12">
        <BuyingHeading />
      </div> -->
      <div class="col-12">
      <BuyingHeadingSmall 
        :heading="selectingAgent.heading"
        :contact="contact"
        :image="`url(${require('../assets/images/homeforsale.jpg')})`"
        :altimage="`Home for Sale`"
        :bgPosition="`center center`"
      />
  </div>
      <div class="col-12">
        <BuyingHome :pageInfo="selectingAgent" />
      </div>
      <div class="container-fluid">
        <ContactJohn />
      </div>
    </div>
  </div>
</template>

<script>
import ContactJohn from "../components/contactJohn.vue";
import BuyingHeadingSmall from "../containers/buyingHeadingSmall.vue";
import BuyingHome from "./buyingHome.vue";
import { selectingAgent } from "../js/components/buying";
export default {
  name: "buyingSelect",
  components: {
    BuyingHeadingSmall,
    BuyingHome,
    ContactJohn,
  },
  data() {
    return {
      selectingAgent: selectingAgent,
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