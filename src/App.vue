<template>
  <NavbarJohn />
  <MainJohn />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <CtaContainer />
  <BlogHome />
  <ContactJohn />
  <FooterJohn />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import NavbarJohn from "./components/navbarJohn.vue";
import MainJohn from "./components/mainJohn.vue";
import BlogHome from "./containers/blogHome.vue";
import CtaContainer from "./containers/ctaContainer.vue";
import ContactJohn from "./components/contactJohn.vue"
import FooterJohn from "./components/footerJohn.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    NavbarJohn,
    MainJohn,
    BlogHome,
    CtaContainer,
    ContactJohn,
    FooterJohn,
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100vh;
  background-color: #f7f7f7;
  font-family: Helvetica, "Arial Narrow Bold", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
