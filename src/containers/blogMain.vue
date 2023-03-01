<template>
  <div class="container-md px-4 mt-4 col-sm-12 d-md-block">
    <div class="row row-flex gx-3 gy-3 d-lg-none">
      <!-- <h2 class="col-12 latest">Latest News</h2> -->
      <blog-boximage
        v-for="blog in blogs"
        :key="blog.id"
        :blogId="blog.id"
        :blogName="blog.blogName"
        :blogParagraph1="blog.paragraph1"
        :blogImage="undefined"
        :blogImagealt="blog.imageAlt"
        :blogLink="blog.link"
        :blogContent="blog.content"
        :blogDate="blog.date"
        class="col-lg-3"
      >
      </blog-boximage>
      </div>
      <div class="row row-flex gx-3 gy-3 d-none d-lg-flex">
      <blog-boximage
        v-for="blog in blogsNolatest"
        :key="blog.id"
        :blogId="blog.id"
        :blogName="blog.blogName"
        :blogParagraph1="blog.paragraph1"
        :blogImage="undefined"
        :blogImagealt="blog.imageAlt"
        :blogLink="blog.link"
        :blogContent="blog.content"
        :blogDate="blog.date"
        class="col-lg-3"
      >
      </blog-boximage>
    </div>
  </div>
</template>

<script>
import BlogBoximage from "@/components/blogBoximage.vue";
import blogpostArray from "../js/components/blogposts.js";
export default {
  Name: "blogMain",
  components: {
    BlogBoximage,
  },
  computed: {
    blogs: function () {
      let blogsData = [...blogpostArray];
      return blogsData.reverse();
    },
    blogsNolatest: function () {
      let blogsData = [...blogpostArray];
      blogsData.pop()
      return blogsData.reverse();
    }
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