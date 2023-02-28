<template>
  <div class="container-fluid p-0">
    <div class="d-flex flex-wrap">
    <div class="col-12 col-lg-6">
      <SubMainJohn 
      :title="`Blog`"
      :image="`url(${require('../assets/images/homeforsale.jpg')})`"
      :altimage="`Home For Sale`"
      :bgPosition="`center top`"
      :bgSize="`cover`"
      />
    </div>
     <div class="col-12 col-lg-6">
      <SubMainJohn 
      :title="`Contact`"
      :image="`url(${require('../assets/images/Suburban-Homes-1080x675.jpg')})`"
      :altimage="`Suburban Homes`"
      :bgPosition="`left bottom`"
      :bgSize="`cover`"
      />
    </div>
    </div>
  
  </div>
</template>

<script>
import SubMainJohn from "../components/subMainJohn.vue"
import blogpostArray from "../js/components/blogposts.js";
export default {
  Name: "blogHeading",
  components: {
    SubMainJohn,
  },
  computed: {
    blogs: function () {
      let blogsData = [...blogpostArray];
      return blogsData.reverse();
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 50px;
}
h2 {
  color: #cc2a38;
  text-transform: uppercase;
  font-weight: bold;
}
.latest {
  text-align: left;
  margin-top: 100px;
}
.btn {
  background-color: #c1202f;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
}
.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #0d6efd;
  --bs-btn-border-color: #0d6efd;
  --bs-btn-hover-color: #c1202f;
  --bs-btn-hover-bg: #fff;
  --bs-btn-hover-border-color: #0a58ca;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0a58ca;
  --bs-btn-active-border-color: #0a53be;
  --bs-btn-active-shadow: inset 0 3px 5pxrgba (0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #0d6efd;
  --bs-btn-disabled-border-color: #0d6efd;
}
</style>