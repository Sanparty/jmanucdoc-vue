<template>
<div class="home-container container-fluid p-0">
  <div class="d-flex flex-wrap align-items-start">
    <div class="col-12">
      <AboutHeadingSmall 
        :heading="`Free Home Evaluation`"
        :contact="contact"
        :image="`url(${require(`../assets/images/${ about.image }`)})`"
        :altimage="about.altImage"
        :bgPosition="about.imageSize"
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
    import HomeEvaluation from "../selling/homeEvaluation.vue"
    import about from "../js/components/data/about"
    export default {
       name: "aboutContainer",
       components: {
        AboutHeadingSmall,
        HomeEvaluation,
        ContactJohn,
      },
      data() {      
        return {
          about: about
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