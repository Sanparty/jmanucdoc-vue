<template>
<div class="home-container container-fluid p-0">
  <div class="d-flex flex-wrap align-items-start">
    <div class="col-12">
      <AboutHeadingSmall 
        :heading="evaluation.heading"
        :contact="contact"
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
      <HomeEvaluation />
    </div>
    <div class="container-fluid">
      <ContactJohn />
    </div>
  </div>
   
</div>

</template>

<script>
    import ContactJohn from "../components/contactJohn.vue"
    import AboutHeadingSmall from "../containers/aboutHeadingSmall.vue"
    import AboutHome from "../about/aboutHome.vue"
    import HomeEvaluation from "../selling/homeEvaluation.vue"
    import evaluation from "../js/components/data/evaluation"
    export default {
       name: "aboutContainer",
       components: {
        AboutHeadingSmall,
        AboutHome,
        HomeEvaluation,
        ContactJohn,
      },
      data() {      
        return {
          evaluation: evaluation
        };
      },
    }
   
    
    
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