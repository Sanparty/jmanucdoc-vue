<template>
  <div class="container-md px-4 mt-3 d-md-none">
      <h2 class="col-12 latest">Latest News</h2>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner blog-carousel">
          <div class="carousel-item active">
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
         <div class="carousel-item">
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
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="blog-button col-12 text-center mt-3">
        <button class="btn btn-primary" type="submit">
        <router-link to="/blog/">See All The News</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import BlogBoximage from "@/components/blogBoximage.vue";
import blogpostArray from "../js/components/blogposts.js";
export default {
  Name: "blogCarousel",
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