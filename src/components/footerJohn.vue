<template>
  <footer class="container-fluid p-4">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-8 order-md-2 mb-3">
          <ul v-for="footerlink in footerlinks" :key="footerlink.id" class="footer-list">
            <li class="col-12 col-sm-6 col-lg-4">
              <router-link :to="{name: footerlink.routerlink}">{{ footerlink.name }}</router-link>
            </li>
          </ul>
        </div>
        <hr class="footerhr d-md-none mb-3 px-3" />
        <div class="col-md-6 col-lg-4 order-md-1 contact-footer">
          <h3>{{ contact.johnName }}</h3>
          <div class="phone">
            <a :href="`tel:${contact.johnNumber}`">{{ contact.johnNumber }}</a>
          </div>
          <div class="email">  
            <a :href="`mailto:${contact.johnEmail}`">{{ contact.johnEmail }}</a>
          </div>
          
          <div>{{ contact.johnTitle }}</div>
          <div>{{ contact.johnCompany }}</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import johnContact from "../js/components/johnContact.js";
import { footerLinks } from "../js/components/pagelinks"

export default {
  Name: "FooterJohn",
  data () {
    return {
      contact: johnContact,
      footerlinks: footerLinks
    }
  }
};
</script>

<style scoped>
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
footer {
  background-color: #272727;
  color: #f7f7f7;
  text-align: left;
}
.footer-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
footer li {
  text-transform: capitalize;
  padding: 0;
}
.footerhr {
  color: #c1202f;
  border-width: 5px;
  width: 100%;
}
.email,
.phone {
  color: white;
  font-weight: bold;
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
  background: url(../assets/images/1011335_email_envelope_mail_message_send_icon_darkbg.svg) no-repeat;
  width: 20px;
  height: 20px;
  float: left;
  margin: 2px 1px;
}
.footer-list a {
  color: #f7f7f7;
  text-decoration: none;
}
@media screen and (min-width: 768px) {
  .contact-footer {
    border-right: 2px solid #c1202f;
  }
  .footer-list {
    padding-left: 10px;
  }
}
</style>