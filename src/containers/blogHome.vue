<template>
  <div class="container-md px-4 mt-3 d-none d-md-block">
    <div class="row row-flex gx-3 gy-3">
      <h2 class="col-12 latest">Latest News</h2>
      <blog-boximage
        v-for="blog in filteredBlogs"
        :key="blog.id"
        :blogId="blog.id"
        :blogName="blog.blogName"
        :blogParagraph1="blog.paragraph1"
        :blogImage="blog.image"
        :blogImagealt="blog.imageAlt"
        :blogLink="blog.link"
        :blogContent="blog.content"
        :blogDate="blog.date"
      >
      </blog-boximage>
    </div>
    <div class="blog-button col-12 text-center mt-3">
      <button class="btn btn-primary" type="submit">
        <router-link to="/blog/">See All The News</router-link>
      </button>
    </div>
  </div>
  <div class="container-md px-4 mt-3 d-md-none">
    <div class="row row-flex gx-3 gy-3">
      <h2 class="col-12 latest">Latest News</h2>
      <blog-boximage
        :key="latestBlogpost.id"
          :blogId="latestBlogpost.id"
          :blogName="latestBlogpost.blogName"
          :blogParagraph1="latestBlogpost.paragraph1"
          :blogImage="latestBlogpost.image"
          :blogImagealt="latestBlogpost.imageAlt"
          :blogLink="latestBlogpost.link"
          :blogContent="latestBlogpost.content"
          :blogDate="latestBlogpost.date"
      >
      </blog-boximage>
    </div>
    <div class="blog-button col-12 text-center">
      <button class="btn btn-primary" type="submit">
        <router-link to="/blog/">See All The News</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import BlogBoximage from "@/components/blogBoximage.vue";
import blogpostArray from "../js/components/data/blogposts";
export default {
  Name: "blogHome",
  components: {
    BlogBoximage,
  },
  computed: {
     latestBlogpost: function() {
       const blogsData = [...blogpostArray];
       let latestindex =  (blogsData.length - 1);
       return blogsData[latestindex]
    },
    filteredBlogs: function () {
      const blogsData = [...blogpostArray];
      let blogpostLatest = blogsData.slice(Math.max(blogsData.length - 4, 0));
      return blogpostLatest.reverse();
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
}
.btn {
  background-color: #c1202f;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
}
.btn:hover {
  background-color: #d3d3d3ac;
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
.blog-button a {
  color: #f7f7f7;
  text-decoration: none;
}
.blog-button a:hover {
  color: #c1202f;
}
</style>