<template>
<div class="home-container container-fluid">
   <div class="home-bio container-md mt-5">
     <h1>{{ buyingInfo.title.title1 }}</h1>
     <div v-html="buyingInfo.content.content1"></div>
     <h1>{{ buyingInfo.title.title2 }}</h1>
     <div v-html="buyingInfo.content.content"></div>
    </div>
</div>

</template>

<script>
    import { buying } from "../js/components/buying"
    export default {
       name: "buyingContainer",
      data() {      
        return {
          buyingInfo: buying
        };
      },
    }
   
    
    
</script>

<style scoped>
.home-container {
    padding-top: 20px;
    background-color: #f7f7f7;
}
</style>