<template>
  <div class="container-fluid p-0">
    <div class="d-flex flex-wrap">
      <div class="col-12 col-lg-6">
        <SubMainJohn
          :heading="`Blog`"
          :image="`url(${require('../assets/images/homeforsale.jpg')})`"
          :altimage="`Home For Sale`"
          :bgPosition="`center top`"
          :bgSize="`cover`"
        />
      </div>
      <div class="d-none d-lg-block col-lg-6">
        <SubStory
          :key="latestBlogpost.id"
          :blogId="latestBlogpost.id"
          :blogName="latestBlogpost.blogName"
          :blogParagraph1="latestBlogpost.paragraph1"
          :blogImage="latestBlogpost.image"
          :blogImagealt="latestBlogpost.imageAlt"
          :blogLink="latestBlogpost.link"
          :blogContent="latestBlogpost.content"
          :blogDate="latestBlogpost.date"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubMainJohn from "../components/subMainJohn.vue";
import SubStory from "../components/subStory.vue";
import blogpostArray from "@/js/components/data/blogposts";
export default defineComponent({
  Name: "blogHeading",
  components: {
    SubMainJohn,
    SubStory,
  },
  computed: {
    latestBlogpost: function () {
      const blogsData = [...blogpostArray];
      let latestindex = blogsData.length - 1;
      return blogsData[latestindex];
    },
  },
});
</script>

<style scoped>
.container-fluid {
  background-color: #272727;
}
h1 {
  font-weight: bold;
  font-size: 50px;
}
h2 {
  color: #cc2a38;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
