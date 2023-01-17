<template>
  <div
    class="
      col-lg-12
      d-none d-lg-flex d-flex
      justify-content-center
      align-items-center
      py-5
      mt-5
      blog-container
    "
  >
    <div class="p-3 col-lg-6 blog-main">
      <h1>{{ blogpost.blogName }}</h1>
      <h2>{{ blogpost.blogDate }}</h2>
      <img
        :src="require('../assets/images/blog/' + blogpost.image)"
        :alt="blogpost.imageAlt"
        class="blogimage"
      />
      <div class="blogcontent" v-html="blogpost.content"></div>
      <router-link :to="{ name: 'Blog' }">
        <button class="btn btn-primary mt-3 cont-reading" type="submit">
          <span class="cont-reading-text">More Blog News</span
          ><i
            class="fa fa-long-arrow-right px-3"
            aria-hidden="true"
          ></i></button
      ></router-link>
    </div>
  </div>
</template>

// <script>
// import blogpostarray from "../js/components/blogposts.js";
export default {
  name: "BlogPost",
  data() {
    return {
      blogpost: {
        blogId: "Blog16",
        blogName: "4 Ways to Make the Home Hunting Process Easier",
        blogDate: "January 16, 2023",
        image: "blog16.png",
        imageAlt: "Home Hunting",
        content: `<p>Shopping for a new home can be intimidating. With so many things to do and think about, it’s easy to feel overwhelmed. But it doesn’t have to be that way. Here are some good tips for making the home hunting process a lot easier and much less stressful.</p>
    <p><strong>1. Get your mortgage arranged in advance.</strong> </p>
    <p>You don’t want to find the ideal home on the market, only to face problems arranging a suitable mortgage. You might end up losing the opportunity. So, make mortgage arrangements in advance by getting “pre-approved”. With that pre-approval, you can shop for a new home with confidence.</p>
    <p><strong>2. Clearly define the kind of home you want, and the area you want to live in.</strong> </p>
    <p>You can’t view every home that’s on the market. If you try, you’ll burn yourself out! So, write down a clear description of the kind of home you want. How many bedrooms? Big kitchen? Pool? Don’t forget to include the community. Upscale? Close to downtown? Lots of trees and parks? Urban and close to shopping and entertainment? With this information, a shortlist of properties can be created that meet your criteria.</p>
    <p><strong>3. Take good notes.</strong> </p>
    <p>After viewing a few homes, you may easily start to forget the details. Was it the first property that had the large elm tree in the backyard or was that the fourth property you saw? If you take good notes, you’ll be better able to make decisions later on about which homes to shortlist.</p>
    <p><strong>4. Take care of yourself, and your family.</strong> </p>
    <p>Eat right. Pace yourself. Don’t try to view too many homes in one evening or on one Saturday afternoon.</p>`,
      },
    };
  },
  //   computed: {
  //     blogpost() {
  //       const blogId = this.$route.params.blogId;
  //       return blogpostarray.find((blogpost) => blogpost.id === blogId);
  //     },
  //   },
};
</script>

<style scoped>
h1 {
  color: #cc2a38;
  font-weight: bold;
  font-size: 50px;
}
h2 {
  color: #cc2a38;
  text-transform: uppercase;
  font-weight: bold;
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
@media screen and (min-width: 768px) {
  .blogimage {
    float: left;
    margin: 0 10px 0 0;
  }
}
</style>