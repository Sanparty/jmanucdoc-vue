<template>
    <Transition appear>
    <div class="container-fluid bar d-lg-none">
        <!-- <div class="d-flex flex-column-reverse align-items-end">
          <div class="phone">
            <a :href="`tel:${contact.contactNumber}`">{{ contact.contactNumber }}</a>
          </div>
          <div class="email">  
            <a :href="`mailto:${contact.contactEmail}`">{{ contact.contactEmail }}</a>
          </div>
        </div> -->
        <div> 
          <a :href="contact.contactTwitter" target="_blank"
            ><img v-if="contact.contactTwitter"
              class="social twitter col-4"
              src="../assets/images/social_tw_white.svg"
              alt="Twitter"
          /></a>
          <a :href="contact.contactFacebook" target="_blank"
            ><img v-if="contact.contactFacebook"
              class="social col-4"
              src="../assets/images/social_fb_white.svg"
              alt="Facebook"
          /></a>
          <a :href="contact.contactLinkedin" target="_blank"
            ><img v-if="contact.contactLinkedin"
              class="social col-4"
              src="../assets/images/social_in_white.svg"
              alt="LinkedIn"
          /></a>
      
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Contact from '@/types/contact';

export default defineComponent ({
  Name: "SocialBar",
  props: {
    contact: {
      type: Object as PropType<Contact>,
      required: true
    },
  }
});
</script>

<style scoped>
.bar {
  background-color: #c1202f;
  padding: 5px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 100px;
  border-radius: 5px;
}

.social {
  height: 18px;
}
.twitter {
  height: 15px;
}
/* .email,
.phone {
  color: white;
  font-weight: bold;
  margin-left: 10px;
}
.email a,
.email a:visited,
.phone a,
.phone a:visited {
  text-decoration: none;
  color: white;
}
.phone:before {
  content: "";
  display: block;
  background: url(../assets/images/icon_phone_white.svg) no-repeat;
  width: 18px;
  height: 18px;
  float: left;
  margin: 2px 1px;
}
.email:before {
  content: "";
  display: block;
  background: url(../assets/images/1011335_email_envelope_mail_message_send_icon.svg) no-repeat;
  width: 22px;
  height: 22px;
  float: left;
  margin: 2px 1px;
} */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
  transition-delay: .75s;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(110px);
}

</style>