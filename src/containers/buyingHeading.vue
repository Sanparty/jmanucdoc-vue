<template>
  <div class="container-fluid p-0">
    <div class="d-flex flex-wrap">
    <div class="col-12 col-lg-6">
      <SubMainJohn 
      :heading="buying.heading"
      :image="`url(${require(`../assets/images/${ buying.image }`)})`"
      :altimage="buying.altImage"
      :bgPosition="buying.imageSize"
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

<script lang="ts">
import SubMainJohn from "../components/subMainJohn.vue"
import BuyingMenu from "@/components/buyingMenu.vue";
import BuyingMenuSmall from '@/components/buyingMenuSmall.vue';
import { buying } from "@/js/components/data/buying";
import { defineComponent } from "vue";

export default defineComponent ({
  Name: "buyingHeading",
  components: {
    SubMainJohn,
    BuyingMenu,
    BuyingMenuSmall
  },
  data () {
    return {
      buying: buying,
    }
  },
});
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