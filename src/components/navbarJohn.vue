<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid justify-content-between">
          <button
        class="navbar-toggler col-2 col-sm-1 navbar-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
          </button>
      <div class="order-lg-2">
        <div class="d-flex flex-column-reverse flex-xl-row align-items-end">
          <div class="phone">
            <a :href="`tel:${contact.contactNumber}`">{{ contact.contactNumber }}</a>
          </div>
          <div class="email">  
            <a :href="`mailto:${contact.contactEmail}`">{{ contact.contactEmail }}</a>
          </div>
        </div>
        <div class="d-none d-lg-block">
          <a :href="contact.contactTwitter" target="_blank"
            ><img v-if="contact.contactTwitter"
              class="social twitter col-1"
              src="../assets/images/social_tw_white.svg"
              alt="Twitter"
          /></a>
          <a :href="contact.contactFacebook" target="_blank"
            ><img v-if="contact.contactFacebook"
              class="social col-1"
              src="../assets/images/social_fb_white.svg"
              alt="Facebook"
          /></a>
          <a :href="contact.contactLinkedin" target="_blank"
            ><img v-if="contact.contactLinkedin"
              class="social col-1"
              src="../assets/images/social_in_white.svg"
              alt="LinkedIn"
          /></a>
        </div>
      
      </div>
  
      <div
        class="collapse navbar-collapse justify-content-start"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav navbar-nav-scroll">
          <li v-for="navlink in navlinks" :key="navlink.id" class="nav-item">
            <router-link :to="{ name: navlink.routerlink }" class="d-none d-lg-block">{{ navlink.name }}</router-link>
            <router-link :to="{ name: navlink.routerlink }" class="d-lg-none"><span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">{{ navlink.name }}</span></router-link>
          </li>
          <li class="nav-item"></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { navLinks } from "@/js/components/pagelinks"
import { PropType, defineComponent } from 'vue'
import Contact from "@/types/contact"


export default defineComponent({
  Name: "NavbarJohn",
  props: {
    contact: {
      type: Object as PropType<Contact>,
      required: true
    },
  },
  data() {
    return {
      navlinks: navLinks,
    };
  },
});
</script>

<style scoped>
nav {
  /* background-color: #c1202f; */
  background-color: #272727;
  padding: 10px;
  top: 0;
  width: 100%;
  text-align: left;
}
.nav-item {
  margin-top: 10px;
}
.nav-link,
.dropdown-item,
.dropdown-menu {
  background-color: #c1202f;
  color: #f7f7f7;
  border: 0px;
}
.dropdown-item:hover {
  background-color: #fff;
  color: #272727;
}
.nav-link {
  padding: 0;
}
.nav-link:focus,
.nav-link:hover {
  color: #272727;
}
.navbar-nav {
  height: 100vh;
}
.navbar-nav .show > .nav-link {
  color: #272727;
}

.navbar-nav li {
  font-weight: bold;
  font-size: .9rem;
  border-bottom: 2px solid rgb(211, 211, 211, 0.5);
  border-bottom-width: 50%;
  padding: 20px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  float: left;
  display: block;
  padding-left: 20px;
  color: #f7f7f7;
  text-transform: uppercase;
}
.social {
  max-height: 18px;
  float: right;
}
.twitter {
  margin-top: 2px;
  max-height: 15px;
}
.navbar-toggler-icon:hover {
  color: #f7f7f7;
  outline: none;
}
.email,
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
}
button a {
  color: #f7f7f7;
  text-decoration: none;
}
.nav-item a {
  text-decoration: none;
}
.navbar-nav li > a,
.navbar-nav li > a:visited {
  color: #f7f7f7;
}
.navbar-nav li > a:hover {
  color: #c1202f;
  /* color: #272727; */
  transition: 0.25s ease;
}
.navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 100vh);
}
.navbar-nav li:nth-last-child(2),
.navbar-nav li:last-child {
  border: none;
}
@media screen and (min-width: 992px) {
  .navbar-nav {
    height: auto;
  }
  .nav-item {
    margin-top: 0;
  }
  li {
    padding-left: 25px;
  }
  .navbar-nav li {
    border-bottom: none;
    padding: 0 10px;
    border-right: 2px solid rgb(211, 211, 211, 0.5);
    border-width: 50%;
  }
  .navbar-nav li > a:hover,
  .navbar-nav a:active,
  .navbar-nav a:focus {
    color:#c1202f
    /* color: #272727; */
  }
}
@media screen and (min-width: 1200px) {
  .navbar-nav li {
  font-size: inherit;
  }
}
</style>