<template>
<div class="home-container container-fluid p-0">
  <div class="d-flex flex-wrap align-items-start">
    <div class="col-12">
    <BuyingHeading />
    </div>
    <div class="container-md">
   <BuyingHome 
   :pageInfo="buying"
   /> 
<!-- 
 <BuyingHome 
   :pageInfo="selectingAgent"
   />
   <BuyingHome 
   :pageInfo="arrangeFinancing"
  
   />
   <BuyingHome 
   :pageInfo="viewingHomes"
  
   />
   <BuyingHome 
   :pageInfo="makingOffer"
 
   />
   <BuyingHome 
   :pageInfo="closingSale"
 
   />  -->
  </div>
  <div class="container-fluid">
  <ContactJohn />
  </div>
  </div>
   
</div>

</template>

<script>
    import ContactJohn from "../components/contactJohn.vue"
    import BuyingHeading from "../containers/buyingHeading.vue"
    import BuyingHome from "../buying/buyingHome.vue"
    import { buying, selectingAgent, arrangeFinancing, viewingHomes, makingOffer, closingSale } from "../js/components/buying"
    export default {
       name: "buyingContainer",
       components: {
        BuyingHeading,
        BuyingHome,
        ContactJohn,
      },
      data() {      
        return {
          buying: buying,
          selectingAgent: selectingAgent,
          arrangeFinancing: arrangeFinancing,
          viewingHomes: viewingHomes,
          makingOffer: makingOffer,
          closingSale: closingSale
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