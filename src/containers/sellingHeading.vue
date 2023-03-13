<template>
  <div class="container-fluid p-0">
    <div class="d-flex flex-wrap">
    <div class="col-12 col-lg-6">
      <SubMainJohn 
      :heading="selling.heading"
      :image="`url(${require(`../assets/images/${ selling.image }`)})`"
      :altimage="selling.altImage"
      :bgPosition="selling.imageSize"
      :bgSize="`cover`"
      />
    </div>
    <div class="d-none d-lg-block col-lg-6">
     <SellingMenu />
    </div>
    <div class="d-lg-none col-12">
      <SellingMenuSmall />
    </div>
    </div>
  
  </div>
</template>

<script>
import SubMainJohn from "../components/subMainJohn.vue"
import SellingMenu from "@/components/sellingMenu.vue";
import SellingMenuSmall from '@/components/sellingMenuSmall.vue';
import { selling} from "../js/components/selling";

export default {
  Name: "sellingHeading",
  components: {
    SubMainJohn,
    SellingMenu,
    SellingMenuSmall
  },
  data () {
    return {
      selling: selling,
    }
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