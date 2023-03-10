<template>
    <div class="container-fluid">
        <div class="row main d-flex">
            <div class="bio-image col-12 col-md-9 py-4"
            :style="
                {
                backgroundImage: image,
                backgroundPosition: bgPosition,
                backgroundSize: 'cover'
                }"
            >
                <span class="background-image" role="img" :aria-label="altimage"> </span>
                <h1 class="latest">{{ heading }}</h1>
            </div>
            <div class="contact-box d-flex flex-column justify-content-center align-items-start col-12 col-md-3">
                <ul>
                    <li>
                         <span class="no-underline" @click="BuyingSelect()"
                             >Selecting an Agent</span>
                    </li>
                    <li><span class="no-underline" @click="BuyingFinancing()"
                        >Arrange Financing</span></li>
                    <li><span class="no-underline" @click="BuyingViewing()"
                        >Viewing Homes</span></li>
                    <li><span class="no-underline" @click="BuyingOffer()"
                        >Making an Offer</span></li>
                    <li><span class="no-underline" @click="BuyingClosing()"
                        >Closing the Sale</span></li>
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
        methods: {
            BuyingSelect() {
            this.$router.push({
                name: "BuyingSelect",
                props: {
                selecting: String
                }
            });
            },
            BuyingFinancing() {
            this.$router.push({
                name: "BuyingFinancing",
                props: {
                selecting: String
                }
            });
            },
            BuyingViewing() {
            this.$router.push({
                name: "BuyingViewing",
                props: {
                selecting: String
                }
            });
            },
            BuyingClosing() {
            this.$router.push({
                name: "BuyingClosing",
                props: {
                selecting: String
                }
            });
            },
            BuyingOffer() {
            this.$router.push({
                name: "BuyingOffer",
                props: {
                selecting: String
                }
            });
            },
        },
    }
</script>

<style scoped>
.container-fluid {
  background-color: #272727;
  height: 100%;
  text-align: left;
}
ul {
  list-style-type: none;
}
li {
  color: #f7f7f7;
  font-weight: bold;
}
li:hover {
  color: #cc2a38;
  transition: 0.5s ease;
  cursor: pointer;
}
.main {
    margin-top: 50px;
}
.bio-image {
    height: 100%;
}
.contact-box {
  text-align: left;
  padding-top: 20px;
}
.contact-box a {
    color: #f7f7f7;
    text-decoration: none;
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

</style>