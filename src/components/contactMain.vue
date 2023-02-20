<template>
    <div class="container-md">
        <div class="row main d-flex flex-wrap justify-content-center">
            <div class="bio-image col-12 col-md-6"
            :style="
                {
                backgroundImage: image,
                backgroundPosition: bgPosition,
                backgroundSize: 'cover'
                }"
            >
                <h1 class="latest">{{ heading }}</h1>
                <!-- <img class="bio-image img-fluid" src="../assets/images/agent_showing_home.jpeg" /> -->
            </div>
            <div class="contact-box content d-flex flex-column justify-content-start align-items-start p-3 col-12 col-md-6">
                <h2>{{ contact.johnName }}</h2>
                <h3 v-if="contact.johnCompany">{{ contact.johnCompany}}</h3>
                <div class="phone">Direct: <a :href="`tel:${contact.johnNumber}`">{{ contact.johnNumber }}</a></div>
                <div v-if="contact.johnNumberOffice" class="phone">Office: <a :href="`tel:${contact.johnNumberOffice}`">{{ contact.johnNumberOffice }}</a></div>
                <div class="email"><a :href="`mailto:${contact.johnEmail}`">{{ contact.johnEmail }}</a></div>
                <div>{{ contact.johnAddress.johnStreet}}</div>
                <div>{{ contact.johnAddress.johnCity}}, {{ contact.johnAddress.johnProvince }}</div>
                <div>{{ contact.johnAddress.johnPostalCode}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactMain",
        props: {
            contact: Object,
            image: String, 
            bgPosition: String,
            heading: String
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
}
</style>