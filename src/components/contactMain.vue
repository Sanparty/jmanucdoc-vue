<template>
    <div class="container-md">
        <Transition appear>
            <div class="row main d-flex flex-wrap justify-content-center">
                
                <div class="bio-image col-12 col-md-6"
                :style="
                    {
                    backgroundImage: image,
                    backgroundPosition: bgPosition,
                    backgroundSize: 'cover'
                    }"
                >
                <span class="background-image" role="img" :aria-label="altimage"> </span>
                    <h1 class="latest">{{ heading }}</h1>
                    <!-- <img class="bio-image img-fluid" src="../assets/images/agent_showing_home.jpeg" /> -->
                </div>
                <div class="contact-box content d-flex flex-column justify-content-start align-items-start p-3 col-12 col-md-6">
                    <h2>{{ contact.contactName }}</h2>
                    <h3 v-if="contact.contactCompany">{{ contact.contactCompany}}</h3>
                    <div class="phone">Direct: <a :href="`tel:${contact.contactNumber}`">{{ contact.contactNumber }}</a></div>
                    <div v-if="contact.contactNumberOffice" class="phone">Office: <a :href="`tel:${contact.contactNumberOffice}`">{{ contact.contactNumberOffice }}</a></div>
                    <div class="email"><a :href="`mailto:${contact.contactEmail}`">{{ contact.contactEmail }}</a></div>
                    <div>{{ contact.contactAddress.contactStreet}}</div>
                    <div>{{ contact.contactAddress.contactCity}}, {{ contact.contactAddress.contactProvince }}</div>
                    <div>{{ contact.contactAddress.contactPostalCode}}</div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
    export default {
        name: "ContactMain",
        props: {
            contact: Object,
            image: String, 
            bgPosition: String,
            heading: String,
            altimage: String
        },
    }
</script>

<style scoped>
.content {
    height: 100%;
}
.contact-box {
  background-color: #d3d3d3ac;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: left;
}
.contact-box a {
    color: #272727;
    text-decoration: none;
}
.bio-image {
    /* border-radius: 10px; */
    /* background-image: url(../assets/images/agent_showing_home.jpeg); */
    background-size: cover;
    /* background-position: center center; */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px; 
}
.phone:before {
  content: "";
  display: block;
  background: url(../assets/images/icon_phone_dark.svg) no-repeat;
  width: 18px;
  height: 18px;
  float: left;
  margin: 2px 1px;
}
.email:before {
  content: "";
  display: block;
  background: url(../assets/images/1011335_email_envelope_mail_message_send_icon_greybg.svg) no-repeat;
  width: 20px;
  height: 20px;
  float: left;
  margin: 2px 1px;
}
h1.latest {
  color: #f7f7f7;
  font-weight: bold;
  text-align: left;
  font-size: 3rem;
  margin-top: 10px;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}
@media screen and (max-width: 767px) {  
    h2 {
        font-size: 1.5rem;
    }
    h3 {
        font-size: 1.25rem;
    }
    .bio-image {
        height: 200px;
    }   
}
@media screen and (min-width: 768px) {  
   .bio-image {
    border-top-right-radius: 0;
    border-bottom-left-radius: 10px; 
   }
    .contact-box {
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0; 
   }
   .v-enter-from,
     .v-leave-to {
        transform: translateX(-40px);
        opacity: 0;
    }
}
</style>