<template>
<div class="home-container container-fluid p-0">
  <MainJohn 
  :contact="john"/>
  <HomeContainer />
  <CtaContainer />
  <BlogHome />
<div class="container-fluid">
  <ContactJohn />
  </div>
</div>
</template>

<script lang="ts">

import MainJohn from "../components/mainJohn.vue";
import BlogHome from "../containers/blogHome.vue";
import HomeContainer from "../containers/homeContainer.vue"
import CtaContainer from "../containers/ctaContainer.vue";
import ContactJohn from "../components/contactJohn.vue"
import johnContact from "@/js/components/johnContact";
import danContact from "@/js/components/danContact"
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeJohn",
  data () {
    return {
      john: johnContact,
      dan: danContact
    }
  },
  components: {

    MainJohn,
    BlogHome,
    HomeContainer,
    CtaContainer,
    ContactJohn,

  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  background-color: #f7f7f7;
}
</style>
