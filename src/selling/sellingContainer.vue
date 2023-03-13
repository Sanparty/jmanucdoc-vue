<template>
<div class="home-container container-fluid p-0">
  <div class="d-flex flex-wrap align-items-start">
    <div class="col-12">
    <SellingHeading />
    </div>
    <div class="col-12">
   <SellingHome 
   :pageInfo="selling"
   /> 
  </div>
  <div class="container-fluid">
  <ContactJohn />
  </div>
  </div>
   
</div>

</template>

<script>
    import ContactJohn from "../components/contactJohn.vue"
    import SellingHeading from "../containers/sellingHeading.vue"
    import SellingHome from "../selling/sellingHome.vue"
    import { selling } from "../js/components/selling"
    export default {
       name: "sellingContainer",
       components: {
        SellingHeading,
        SellingHome,
        ContactJohn,
      },
      data() {      
        return {
          selling: selling
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