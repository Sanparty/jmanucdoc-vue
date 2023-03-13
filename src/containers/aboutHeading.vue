<template>
  <div class="container-fluid p-0">
    <div class="d-flex flex-wrap">
    <div class="col-12 col-lg-6">
      <SubMainJohn 
      :heading="about.heading"
      :image="`url(${require(`../assets/images/${ about.image }`)})`"
      :altimage="about.altImage"
      :bgPosition="about.imageSize"
      :bgSize="`cover`"
      />
    </div>
    <!-- <div class="d-none d-lg-block col-lg-6">
     <BuyingMenu />
    </div>
    <div class="d-lg-none col-12">
      <BuyingMenuSmall />
    </div> -->
    </div>
  
  </div>
</template>

<script>
import SubMainJohn from "../components/subMainJohn.vue"
import about from "../js/components/data/about";

export default {
  Name: "aboutHeading",
  components: {
    SubMainJohn,
  },
  data () {
    return {
      about: about,
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