<template>
  <div
    class="
      col-12
      d-lg-flex d-flex
      justify-content-center
      align-items-center
      py-5
      blog-container
    "
  >
    <div class="p-3 blog-main">
      <!-- <h3>{{ pageInfo.heading }}</h3> -->
      <h1>{{ pageInfo.title.title1 }}</h1>
      <div v-html="pageInfo.content.content1"></div>
      <div v-if="pageInfo.title.title2">
        <h1>{{ pageInfo.title.title2 }}</h1>
        <div v-html="pageInfo.content.content2"></div>
      </div>
      <div v-if="pageInfo.title.title2">
        <h1>{{ pageInfo.title.title3}}</h1>
        <div v-html="pageInfo.content.content3"></div>
      </div>
      <div v-if="pageInfo.title.title2">
        <h1>{{ pageInfo.title.title4}}</h1>
        <div v-html="pageInfo.content.content4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyingHome",
  props: {
    pageInfo: Object,
  }  
};
</script>

<style scoped>
h1 {
  color: #cc2a38;
  font-weight: bold;
  font-size: 50px;
}
h3 {
  text-transform: uppercase;
  font-weight: bold;
}
.blog-container {
  text-align: left;
  background-color: #d3d3d3ac;
  height: 100%;
}
.blog-main a {
  color: #f7f7f7;
  text-decoration: none;
}
ul {
  list-style-type: disc;
  padding-bottom: 1rem;
  margin-left: 10px;
  padding-left: 10px;
}
li {
  float: none;
  display: list-item;
  text-transform: none;
  padding: 0.5rem 0;
}
</style>