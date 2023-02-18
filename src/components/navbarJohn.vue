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
        <div class="phone">
          <a :href="`tel:${contact.johnNumber}`">{{ contact.johnNumber }}</a>
        </div>
        <div>
          <a :href="contact.johnTwitter" target="_blank"
            ><img
              class="social col-4"
              src="../assets/images/social_tw_white.svg"
              alt="Twitter"
          /></a>
          <a :href="contact.johnFacebook" target="_blank"
            ><img
              class="social col-4"
              src="../assets/images/social_fb_white.svg"
              alt="Facebook"
          /></a>
          <a :href="contact.johnLinkedin" target="_blank"
            ><img
              class="social col-4"
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
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="d-none d-lg-block">Home</router-link>
            <router-link :to="{ name: 'Home' }" class="d-lg-none"><span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Home</span></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Blog' }" class="d-none d-lg-block">Blog</router-link>
            <router-link :to="{ name: 'Blog' }" class="d-lg-none"><span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Blog</span></router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Buying
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Selecting an Agent</a>
              <a class="dropdown-item" href="#">Arrange Financing</a>
              <a class="dropdown-item" href="#">Viewing Homes</a>
              <a class="dropdown-item" href="#">Making an Offer</a>
              <a class="dropdown-item" href="#">Closing the Sale</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Selling
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Selecting the Right Agent</a>
              <a class="dropdown-item" href="#">Setting Your Price</a>
              <a class="dropdown-item" href="#">Attracting Buyers</a>
              <a class="dropdown-item" href="#">Handling Viewings</a>
              <a class="dropdown-item" href="#">Dealing With Offers</a>
              <a class="dropdown-item" href="#">Closing the Sale</a>
              <a class="dropdown-item" href="#">Free Home Evaluation</a>
            </div>
          </li>
          <li class="nav-item"><a href="#">About</a></li>
          <li class="nav-item"><a href="#">Your Mississauga</a></li>
          <li class="nav-item"><a href="#">Communities</a></li>
          <li class="nav-item"></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import johnContact from "../js/components/johnContact.js";
export default {
  Name: "NavbarJohn",
  data() {
    return {
      contact: johnContact,
    };
  },
};
</script>

<style scoped>
nav {
  background-color: #c1202f;
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
.navbar-toggler-icon:hover {
  color: #f7f7f7;
  outline: none;
}
.phone {
  color: white;
  font-weight: bold;
}
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
  color: #272727;
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
    color: #272727;
  }
}
</style>