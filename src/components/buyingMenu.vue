<template>
  <div class="container-fluid d-lg-flex d-flex justify-content-start align-items-center">
          <div class="p-3 blog-main">
            <ul>
            <li><a class="dropdown-item" href="#">Selecting an Agent</a></li>
            <li><a class="dropdown-item" href="#">Arrange Financing</a></li>
            <li><a class="dropdown-item" href="#">Viewing Homes</a></li>
            <li><a class="dropdown-item" href="#">Making an Offer</a></li>
              <li><a class="dropdown-item" href="#">Closing the Sale</a></li>
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
export default {
  Name: "SubStory",
  methods: {
    showBlogpost() {
      this.$router.push({
        name: "Blogposts",
        params: { blogId: this.blogId, blogName: this.blogName },
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
    blogDate: String
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  color: inherit;
  padding: 5px 10px;
  font-size: 3rem;
  font-weight: bold; 
}
li a:hover {
  color: #cc2a38;
  transition: 0.5s ease;
}


h2 {
  color: #cc2a38;
  font-weight: bold;
  font-size: 2.5rem;
}
.blog-main {
    color:#f7f7f7;
    margin-top: 50px;
}
.blog-main a {
    color:#f7f7f7;
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
}

@media screen and (min-width: 992px) {
  h1 {
        font-size: 8rem;
  }
}
</style>