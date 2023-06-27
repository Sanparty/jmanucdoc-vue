<template>
<div class="home-container container-fluid p-0">
  <div class="d-flex flex-wrap align-items-start">
    <div class="col-12">
    <BuyingHeading />
    </div>
    <div class="col-12">
   <BuyingHome 
   :pageInfo="buying"
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
    import BuyingHeading from "../containers/buyingHeading.vue"
    import BuyingHome from "../buying/buyingHome.vue"
    import { buying } from "@/js/components/data"
import { defineComponent } from "vue"
    export default defineComponent ({
       name: "buyingContainer",
       components: {
        BuyingHeading,
        BuyingHome,
        ContactJohn,
      },
      data() {      
        return {
          buying: buying
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