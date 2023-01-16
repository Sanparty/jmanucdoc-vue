<template>
   <div class="container-md px-4 mt-3 d-none d-md-block">
      <div class="row row-flex gx-3 gy-3">
        <h2 class="col-12 latest">Latest News</h2>
        <blog-boximage 
          v-for="blog in blogs" 
          :key="blog.id"
          :blogName="blog.blogName"
          :blogParagraph1="blog.paragraph1"
          :blogImage=undefined
          :blogImagealt="blog.imageAlt"
          :blogLink="blog.link"
          class="col-lg-3">
        </blog-boximage>
      </div>
    </div>
</template>

<script>
import BlogBoximage from '@/components/blogBoximage.vue'
import blogpostArray from "../js/components/blogposts.js";
export default {
  Name: "blogMain",
  components: {
    BlogBoximage
  },
  computed: {
    latestBlog: function () {
      return blogpostArray.pop();
    },
    filteredBlogs: function () {
     let blogpostLatest = blogpostArray.slice(Math.max(blogpostArray.length - 4, 0));
     return blogpostLatest.reverse();
    }
  },
  data () {
    return {
      blogs: blogpostArray.reverse(),
    }
  }
}
</script>

<style scoped>
.latest {
    text-align: left;
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
    --bs-btn-focus-shadow-rgb: 49,132,253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #0a58ca;
    --bs-btn-active-border-color: #0a53be;
    --bs-btn-active-shadow: inset 0 3px 5pxrgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #0d6efd;
    --bs-btn-disabled-border-color: #0d6efd;
}
</style>