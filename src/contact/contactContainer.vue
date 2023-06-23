<template>
<div class="container-fluid">
    <div class="title row col-lg-10">
    </div>
    <ContactMain class="margin-top"
    :heading="`Contact`"
    :contact="contact"
    :image="`url(${require('../assets/images/agent_showing_home.jpeg')})`"
    :altimage="`Real Estate Agent Showing Home To Clients`"
    :bgPosition="`center center`"
    />
    <!-- <ContactMain class="mt-3"
    :heading="`Contact Me`"
    :contact="contact"
    :image="`url(${require('../assets/images/SuburbanHomesDrone.jpeg')})`"
    :altimage="`Suburban Homes`"
    :bgPosition="`center right`"
    />
     <ContactMain class="mt-3"
     :heading="`Drop Me A Line`"
    :contact="contact2"
    :image="`url(${require('../assets/images/homeforsale.jpg')})`"
    :altimage="`House With For Sale Sign`"
    :bgPosition="`center center`"
    /> -->
    <ContactJohn />
</div>
</template>

<script lang="ts">
import ContactJohn from "../components/contactJohn.vue"
import ContactMain from "../components/contactMain.vue"
import johnContact from "@/js/components/johnContact";
import danContact from "@/js/components/danContact"
import { defineComponent } from "vue";

    export default defineComponent ({
        name: "ContactContainer",
        components: {
            ContactJohn,
            ContactMain
        },
        data() {
            return {
                contact: johnContact,
                contact2: danContact
            }
        }
    })
</script>

<style scoped>
h2 {
  color: #cc2a38;
  text-transform: uppercase;
  font-weight: bold;
}
.margin-top {
  margin-top: 100px;
}
.title {
    margin: auto;
}

</style>