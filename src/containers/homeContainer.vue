<template>
<div class="home-container container-fluid">
   <div class="home-bio container-md">
      <WelcomeJohn 
      :heading="welcome.heading"
      :message="welcome.message" />
      <PledgeJohn 
      :pledges="pledgesMessage"  />
    </div>
    <!-- <hr style="width: 50%; margin: auto; padding: 10px"> -->
    <div class="container-md">
      <SellbuyJohn
      :pledges="pledgesMain" />
    </div>
</div>

</template>

<script lang="ts">
    import WelcomeJohn from "../components/welcomeJohn.vue";
    import PledgeJohn from "../components/pledgeJohn.vue"
    import SellbuyJohn from '@/components/sellbuyJohn.vue';
    import { welcomeMessage, pledgesMessage, pledgesMain } from "@/js/components/homepage"
    import { defineComponent } from "vue";
    export default defineComponent ({
       name: "homeContainer",
       components: {
        WelcomeJohn,
        PledgeJohn,
        SellbuyJohn
       },
       props: {
        heading: String
       },
      data() {      
        return {
          welcome: welcomeMessage,
          pledgesMessage: pledgesMessage,
          pledgesMain: pledgesMain
        };
      },
    })
    
</script>

<style scoped>
.home-container {
    padding-top: 20px;
    background-color: #f7f7f7;
}
</style>