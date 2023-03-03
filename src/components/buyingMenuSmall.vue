<template>
    <div class="container-md">
        <div class="row main d-flex flex-wrap justify-content-center align-items-center">
            <div class="bio-image col-12 col-md-9"
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
            <div class="contact-box content d-flex flex-column justify-content-start align-items-start p-3 col-12 col-md-3">
                <ul>
        <li>
          <span class="no-underline" @click="BuyingSelect()"
            >Selecting an Agent</span
          >
        </li>
        <li><a class="dropdown-item" href="#">Arrange Financing</a></li>
        <li><a class="dropdown-item" href="#">Viewing Homes</a></li>
        <li><a class="dropdown-item" href="#">Making an Offer</a></li>
        <li><a class="dropdown-item" href="#">Closing the Sale</a></li>
      </ul>
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
            heading: String,
            altimage: String
        },
    }
</script>

<style scoped>
.content {
    height: 100%;
}
.main {
    margin-top: 100px;
    margin-bottom: 10px;
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
  font-size: 5rem;
  margin-top: 10px;
  align-content: center;
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