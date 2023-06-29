<template>
<div class="home-container container-fluid p-0">
  <div class="d-flex flex-wrap align-items-start">
    <div class="col-12">
      <AboutHeadingSmall 
        :heading="calculator.heading"
        :name="false"
        :image="`url(${require(`../assets/images/${ calculator.image }`)})`"
        :altimage="calculator.altImage"
        :bgPosition="calculator.imageSize"
      />
    </div>
  </div>
  <!-- <div class="col-12">
    <aboutHome 
      :pageInfo="calculator"
    /> 
  </div> -->
  <div class="col-12">
    <MortgageCalculator 
      :includeHeading="false"  
    />
  </div>
  <div class="container-fluid">
    <ContactJohn />
  </div>
</div>

</template>

<script lang="ts">
    import ContactJohn from "../components/contactJohn.vue"
    import AboutHeadingSmall from "../containers/aboutHeadingSmall.vue"
    import MortgageCalculator from "../buying/mortgageCalculator.vue"
    import calculator from "@/js/components/data/calculator"
import { defineComponent } from "vue"
    export default defineComponent ({
       name: "aboutContainer",
       components: {
        AboutHeadingSmall,
        MortgageCalculator,
        ContactJohn,
      },
      data() {      
        return {
          calculator: calculator
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