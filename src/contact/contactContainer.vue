<template>
<div class="container-md">
    <div class="title row col-lg-10">
    </div>
    <ContactMain class="margin-top"
    :heading="`Contact`"
    :contact="contact"
    :image="`url(${require('../assets/images/agent_showing_home.jpeg')})`"
    :bgPosition="`center center`"
    />
    <!-- <ContactMain class="mt-3"
    :heading="`Contact Me`"
    :contact="contact"
    :image="`url(${require('../assets/images/Suburban-Homes-1080x675.jpg')})`"
    :bgPosition="`center right`"
    />
     <ContactMain class="mt-3"
     :heading="`Drop Me A Line`"
    :contact="contact"
    :image="`url(${require('../assets/images/homeforsale.jpg')})`"
    :bgPosition="`center top`"
    /> -->
    <ContactJohn />
</div>
</template>

<script>
import ContactJohn from "../components/contactJohn.vue"
import ContactMain from "../components/contactMain.vue"
import johnContact from "../js/components/johnContact.js";
import danContact from "../js/components/danContact.js"

    export default {
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
    }
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