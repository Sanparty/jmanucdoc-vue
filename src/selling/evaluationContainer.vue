<template>
<div class="home-container container-fluid p-0">
  <div class="d-flex flex-wrap align-items-start">
    <!-- <div class="col-12">
      <AboutHeadingSmall 
        :heading="evaluation.heading"
        :name="true"
        :contact="contact"
        :image="`url(${require(`../assets/images/${ evaluation.image }`)})`"
        :altimage="evaluation.altImage"
        :bgPosition="evaluation.imageSize"
      />
    </div> -->
    <div class="col-12">
      <SellingHeadingSmall 
        :heading="evaluation.heading"
        :name="true"
        :image="`url(${require(`../assets/images/${ evaluation.image }`)})`"
        :altimage="evaluation.altImage"
        :bgPosition="evaluation.imageSize"
      />
    </div>
    <div class="col-12">
   <aboutHome 
   :pageInfo="evaluation"
   /> 
  </div>
    <div class="col-12">
      <HomeEvaluation :includeHeading="false"/>
    </div>
    <div class="container-fluid">
      <ContactJohn />
    </div>
  </div>
   
</div>

</template>

<script lang="ts">
    import ContactJohn from "../components/contactJohn.vue"
    import SellingHeadingSmall from "../containers/sellingHeadingSmall.vue"
    import AboutHome from "../about/aboutHome.vue"
    import HomeEvaluation from "../selling/homeEvaluation.vue"
    import evaluation from "@/js/components/data/evaluation"
    import { defineComponent } from "vue"
    export default defineComponent ({
       name: "evaluationContainer",
       components: {
        SellingHeadingSmall,
        AboutHome,
        HomeEvaluation,
        ContactJohn,
      },
      data() {      
        return {
          evaluation: evaluation
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