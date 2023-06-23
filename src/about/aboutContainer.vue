<template>
<div class="home-container container-fluid p-0">
  <div class="d-flex flex-wrap align-items-start">
    <div class="col-12">
      <AboutHeadingSmall 
        :heading="about.heading"
        :image="`url(${require(`../assets/images/${ about.image }`)})`"
        :altimage="about.altImage"
        :bgPosition="about.imageSize"
      />
    </div>
    <div class="col-12">
   <aboutHome 
   :pageInfo="about"
   /> 
  </div>
  <div class="container-fluid">
  <ContactJohn />
  </div>
  </div>
   
</div>

</template>

<script lang="ts">
    import ContactJohn from "../components/contactJohn.vue"
    import AboutHeadingSmall from "../containers/aboutHeadingSmall.vue"
    import AboutHome from "../about/aboutHome.vue"
    import about from "@/js/components/data/about"
    
import { defineComponent } from "vue"
    export default defineComponent ({
       name: "aboutContainer",
       components: {
        AboutHeadingSmall,
        AboutHome,
        ContactJohn,
      },
      data() {      
        return {
          about: about
        };
      },
    })
   
    
    
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