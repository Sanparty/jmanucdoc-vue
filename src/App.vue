<template>
<!-- <NavbarJohn/> -->
<NavbarJohnTemp />
 <router-view/>
<FooterJohn/>
<SocialBar/>
</template>

<script>
// import NavbarJohn from "./components/navbarJohn.vue"
import NavbarJohnTemp from "./components/navbarJohnTemp.vue"
import FooterJohn from "./components/footerJohn.vue"
import SocialBar from "./components/socialBar.vue"
export default {
  name: "App",
  components: {
    // NavbarJohn,
    NavbarJohnTemp,
    FooterJohn,
    SocialBar
  }

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
