<template>
<div class="home-container container-fluid p-0">
  <div class="d-flex flex-wrap align-items-start">
    <div class="col-12 col-lg-6">
    <SubMainJohn 
      :title="`Buying`"
      :image="`url(${require('../assets/images/homeforsale.jpg')})`"
      :altimage="`Home For Sale`"
      :bgPosition="`center top`"
      :bgSize="`cover`"
      class="col-lg-6"
      />
    </div>
    <div class="col-12 col-lg-6">
   <!-- <BuyingHome 
   :pageInfo="buying"
   /> -->

 <BuyingHome 
   :pageInfo="selectingAgent"
   />
   <!---
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
 
   /> -->
  </div>
  </div>
    <div class="container-fluid">
  <ContactJohn />
  </div>
</div>

</template>

<script>
    import ContactJohn from "../components/contactJohn.vue"
    import SubMainJohn from "@/components/subMainJohn.vue"
    import BuyingHome from "../buying/buyingHome.vue"
    import { buying, selectingAgent, arrangeFinancing, viewingHomes, makingOffer, closingSale } from "../js/components/buying"
    export default {
       name: "buyingContainer",
       components: {
        SubMainJohn,
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