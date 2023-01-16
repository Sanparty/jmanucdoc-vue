<template>
  <NavbarJohn />
  <MainJohn />
  <CtaContainer />
  <BlogHome />
  <ContactJohn />
  <FooterJohn />
</template>

<script>
import NavbarJohn from "./navbarJohn.vue";
import MainJohn from "./mainJohn.vue";
import BlogHome from "../containers/blogHome.vue";
import CtaContainer from "../containers/ctaContainer.vue";
import ContactJohn from "./contactJohn.vue"
import FooterJohn from "./footerJohn.vue";
export default {
  name: "HomeJohn",
  components: {
    NavbarJohn,
    MainJohn,
    BlogHome,
    CtaContainer,
    ContactJohn,
    FooterJohn,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
