<template>
  <div class="container-fluid p-0">
    <div class="d-flex flex-wrap">
    <div class="col-12 col-lg-6">
      <SubMainJohn 
      :title="`Buying`"
      :image="`url(${require('../assets/images/agent_showing_home.jpeg')})`"
      :altimage="`Agent Showing Home`"
      :bgPosition="`center top`"
      :bgSize="`cover`"
      />
    </div>
    <div class="d-none d-lg-block col-lg-6">
     <BuyingMenu />
    </div>
    <div class="d-lg-none col-12">
      <BuyingMenuSmall />
    </div>
    </div>
  
  </div>
</template>

<script>
import SubMainJohn from "../components/subMainJohn.vue"
import BuyingMenu from "@/components/buyingMenu.vue";
import BuyingMenuSmall from '@/components/buyingMenuSmall.vue';
export default {
  Name: "buyingHeading",
  components: {
    SubMainJohn,
    BuyingMenu,
    BuyingMenuSmall
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: #272727;
}
h1 {
  font-weight: bold;
  font-size: 50px;
}
h2 {
  color: #cc2a38;
  text-transform: uppercase;
  font-weight: bold;
}
</style>