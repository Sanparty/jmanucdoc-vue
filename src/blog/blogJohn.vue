<template>
  <div class="home-container container-fluid p-0">
    <BlogHeading />
    <BlogMain />
    <div class="container-fluid">
      <ContactJohn />
    </div>
  </div>
</template>

<script>
import BlogHeading from "../containers/blogHeading.vue"
import BlogMain from "../containers/blogMain.vue";
import ContactJohn from "../components/contactJohn.vue"
export default {
  name: "HomeJohn",
  components: {
    BlogHeading,
    BlogMain,
    ContactJohn,
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
.home-container {
  background-color: #f7f7f7;
}
</style>
