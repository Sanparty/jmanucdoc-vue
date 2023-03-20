<template>
<NavbarJohn :contact="john"/>
<router-view :key="$route.fullPath"></router-view>
<FooterJohn :contact="john"/>
<SocialBar :contact="john" />
</template>

<script>
import NavbarJohn from "./components/navbarJohn.vue"
import FooterJohn from "./components/footerJohn.vue"
import SocialBar from "./components/socialBar.vue"
import johnContact from "./js/components/johnContact";
import danContact from "./js/components/danContact";
export default {
  name: "App",
  components: {
    NavbarJohn,
    FooterJohn,
    SocialBar
  },
  data () {
    return {
      john: johnContact,
      dan: danContact
    }
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
