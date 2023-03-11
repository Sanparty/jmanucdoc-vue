<template>
  <div
    class="container-fluid d-lg-flex d-flex justify-content-start align-items-center"
  >
    <div class="blog-main">
      <ul>
        <li v-for="(buyingpost,index) in buyingposts" :key="index" class="no-underline" @click="showBuyingPost(buyingpost.id)">{{  buyingpost.heading }}</li>
      </ul>
      <!-- <div class="no-underline" @click="showBlogpost()">
        <button class="btn btn-primary mt-3 cont-reading" type="submit">
          <span class="cont-reading-text">Continue Reading</span
          ><i class="fa fa-long-arrow-right px-3" aria-hidden="true"></i>
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import { selectingAgent, arrangeFinancing, viewingHomes, makingOffer, closingSale } from "../js/components/buying";
export default {
  Name: "BuyingMenu",
  data () {
    return {
      buyingposts: [
        selectingAgent, arrangeFinancing, viewingHomes, makingOffer, closingSale
      ]
    }
  },
  methods:{
    showBuyingPost(id) {
      this.$router.push({name:'buyingposts',params:{buyingid:id}})
    }
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-top: 10px;
}
li {
  color: inherit;
  font-weight: bold;
}
li:hover,
.no-underline:hover {
  color: #cc2a38;
  transition: 0.5s ease;
  cursor: pointer;
}

h2 {
  color: #cc2a38;
  font-weight: bold;
  font-size: 2.5rem;
}
.blog-main {
  color: #f7f7f7;
}
.blog-main a {
  color: #f7f7f7;
  text-decoration: none;
}
.no-underline {
  text-decoration: none;
}
.blogimage {
  float: left;
  margin: 0 10px 0 0;
  border-radius: 5px;
  margin-bottom: 10px;
}
.cont-reading {
  display: block;
}
.cont-reading-text {
  z-index: -1;
  width: 0%;
  height: 0%;
  transition: width 0.5s ease-in-out;
}
.cont-reading-text:hover,
.cont-reading-text:focus {
  width: 100%;
  height: 100%;
}
.btn {
  background-color: #c1202f;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
}
.btn:hover {
  background-color: #fff;
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
.no-underline {
  text-decoration: none;
}
.container-fluid {
  background-color: #272727;
  height: 100%;
  text-align: left;
}

@media screen and (min-width: 576px) {
  h1 {
    font-size: 4rem;
  }
  li {
    font-size: 1rem;
  }
}

@media screen and (min-width: 992px) {
  ul {
    padding-top: 0;
  }
  h1 {
    font-size: 8rem;
  }
  .blog-main {
  margin-top: 60px;
  }
  li {
     padding: 10px;
     font-size: 2rem;
  }
}
@media screen and (min-width: 1200px) {
  li {
    font-size: 3rem;
  }
}
</style>