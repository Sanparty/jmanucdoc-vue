<template>
  <div class="col-sm-12 col-md-6 my-3">
    <div v-if="blogImage" class="p-3 content blog-link mb-3">
      <h3>{{ blogName }}</h3>
      <img
        :src="require('../assets/images/blog/' + blogImage)"
        :alt="blogImagealt"
        class="blogimage"
      />
      <p>{{ blogParagraph1 }}</p>

      <div class="no-underline" @click="showBlogpost()">
        <button class="btn btn-primary mt-3 cont-reading" type="submit">
          <span class="cont-reading-text">Continue Reading</span
          ><i class="fa fa-long-arrow-right px-3" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div v-else class="p-3 content blog-link mb-3">
      <h3>{{ blogName }}</h3>
      <p>{{ blogParagraph1 }}</p>

      <div class="no-underline" @click="showBlogpost()">
        <button class="btn btn-primary mt-3 cont-reading" type="submit">
          <span class="cont-reading-text">Continue Reading</span
          ><i class="fa fa-long-arrow-right px-3" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  Name: "BlogBoximage",
  methods: {
    showBlogpost() {
      this.$router.push({
        name: "Blogposts",
        params: { blogId: this.blogId },
      });
    },
  },
  props: {
    blogId: String,
    blogName: String,
    blogParagraph1: String,
    blogImage: String,
    blogImagealt: String,
    blogLink: String,
  },
};
</script>

<style scoped>
.blogimage {
  border-radius: 5px;
  margin-bottom: 10px;
}
.blog-link {
  background-color: #d3d3d3ac;
  border-radius: 5px;
  min-height: 300px;
  transition: all 0.25s;
  text-align: left;
}
.blog-link:hover {
  box-shadow: 0 0 10px black;
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
@media screen and (min-width: 576px) {
  .content {
    height: 100%;
  }
}
@media screen and (min-width: 768px) {
  .blogimage {
    float: left;
    margin: 0 10px 0 0;
  }
}
</style>