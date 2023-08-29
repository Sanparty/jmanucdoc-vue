<template>
  <div
    class="
      col-12
      d-lg-flex d-flex
      justify-content-center
      align-items-center
      py-5
      mt-5
      blog-container
    "
  >
  <Transition appear>
    <div v-if="blogpost" class="p-3 col-lg-6 blog-main">
      <h1>{{ blogpost.blogName }}</h1>
      <h4>{{ blogpost.date }}</h4>
      <img
        :src="require('../assets/images/blog/' + blogpost.image)"
        :alt="blogpost.imageAlt"
        class="blogimage"
      />
      <div class="blogcontent" v-html="blogpost.content"></div>
      <router-link :to="{ name: 'Blog' }">
        <button class="btn btn-primary mt-3 cont-reading" type="submit">
          <span class="cont-reading-text">More Blog News</span
          ><i class="fa fa-long-arrow-right px-3" aria-hidden="true"></i>
        </button>
      </router-link>
      <div
        v-if="previouspost >= 1"
        class="no-underline"
        @click="previousBlogpost()"
      >
        <button
          class="btn btn-primary no-active mt-3 cont-reading"
          type="submit"
        >
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
          <span class="cont-reading-text px-3">Previous</span>
        </button>
      </div>
      <div
        v-if="nextpost <= blogtotal"
        class="no-underline"
        @click="nextBlogpost()"
      >
        <button
          class="btn btn-primary no-active mt-3 cont-reading"
          type="submit"
        >
          <span class="cont-reading-text px-3">Next</span
          ><i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div v-else class="p-e col-lg-6 blog-main">
      You have reached an unexpected page! Please return home. Thanks!
    </div>
  </Transition>
  </div>
  <div class="container-fluid">
  <ContactJohn />
  </div>
</template>

<script lang="ts">
import blogpostarray from "@/js/components/data/blogposts";
import ContactJohn from "../components/contactJohn.vue";
import Blogpost from "@/types/blogpost";
import { defineComponent } from "vue";
export default defineComponent ({
  name: "BlogPost",
  components: {
    ContactJohn,
  },
  computed: {
    blogpost(): Blogpost {
      const blogId = this.$route.params.blogId;
      let blogpostWanted = blogpostarray.find((blogpost) => blogpost.id === blogId);
      if (blogpostWanted) {
        return blogpostWanted
      } else {
        return this.latestBlogpost
      }
    },
    latestBlogpost(): Blogpost {
       const blogsData = [...blogpostarray];
       let latestindex =  (blogsData.length - 1);
       return blogsData[latestindex]
    },
    blogtotal(): number {
      return blogpostarray.length;
    },
    previouspost(): number {
      return parseInt(this.blogpost.id.slice(4)) - 1;
    },
    nextpost(): number {
      return parseInt(this.blogpost.id.slice(4)) + 1;
    },
  },
  methods: {
    previousBlogpost() {
      if (this.blogpost) {      
        let previousId = parseInt(this.blogpost.id.slice(4)) - 1;
        this.$router.push({
        name: "Blogposts",
        params: { blogId: `blog${previousId}` },
      });
      }
    },
    nextBlogpost() {
      if (this.blogpost) {
       let nextId = parseInt(this.blogpost.id.slice(4)) + 1;
      this.$router.push({
        name: "Blogposts",
        params: { blogId: `blog${nextId}` },
      });
      }
    },
  },
});
</script>

<style scoped>
h1 {
  color: #cc2a38;
  font-weight: bold;
  font-size: 50px;
}
.blog-container {
  text-align: left;
  background-color: #d3d3d3ac;
}
/* .blog-main {
  color: #f7f7f7;
} */
.blog-main a {
  color: #f7f7f7;
  text-decoration: none;
}
.blogimage {
  border-radius: 5px;
  margin-bottom: 10px;
  float: left;
  margin: 0 10px 0 0;
  margin-right: 20px;
}
.blogcontent ul {
  list-style-type: disc;
  padding-bottom: 1rem;
  margin-left: 10px;
  padding-left: 10px;
}
.blogcontent li {
  float: none;
  display: list-item;
  text-transform: none;
  padding: 0.5rem 0;
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
.no-underline {
  text-decoration: none;
}
.no-active {
  text-decoration: none;
  --bs-btn-active-color: inherit;
  float: left;
  margin-right: 10px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
@media (hover: none) {
  .btn:hover {
    color: #f7f7f7;
    background-color: #c1202f;
  }
}
</style>