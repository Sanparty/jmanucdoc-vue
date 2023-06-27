<template>
  <div
    class="
      col-12
      d-lg-flex d-flex
      justify-content-center
      align-items-center
      blog-container
      py-3
    "
  >
  <Transition appear>
    <div class="blog-main container-md">
      <h1>{{ pageInfo.title.title1 }}</h1>
      <div v-html="pageInfo.content.content1"></div>
      <div v-if="pageInfo.title.title2">
        <h1>{{ pageInfo.title.title2 }}</h1>
        <div v-html="pageInfo.content.content2"></div>
      </div>
      <div v-if="pageInfo.title.title2">
        <h1>{{ pageInfo.title.title3}}</h1>
        <div v-html="pageInfo.content.content3"></div>
      </div>
      <div v-if="pageInfo.title.title2">
        <h1>{{ pageInfo.title.title4}}</h1>
        <div v-html="pageInfo.content.content4"></div>
      </div>
    </div>
  </Transition>

  </div>
  <div v-if="pageInfo.lookingBuy" class="container-md" >
      <LookingBuy :includeHeading="true" class="mt-4"/>
  </div>
  <div v-if="pageInfo.calculator" class="container-md" >
      <mortgageCalculator :includeHeading="true" class="mt-4"/>
  </div>

</template>

<script lang="ts">
import mortgageCalculator from './mortgageCalculator.vue';
import LookingBuy from "../buying/lookingBuy.vue";
import Article from '@/types/article';
import { defineComponent, PropType } from 'vue';

export default defineComponent ({
  name: "BuyingHome",
  components: {
    mortgageCalculator,
    LookingBuy
  },
  props: {
    pageInfo: {
      type: Object as PropType<Article>,
      required: true,
    }
  },
});
</script>

<style scoped>
h1 {
  color: #cc2a38;
  font-weight: bold;
  font-size: 50px;
}
h3 {
  text-transform: uppercase;
  font-weight: bold;
}
.blog-container {
  text-align: left;
  background-color: #d3d3d3ac;
  height: 100%;
}
.blog-main a {
  color: #f7f7f7;
  text-decoration: none;
}
ul {
  list-style-type: disc;
  padding-bottom: 1rem;
  margin-left: 10px;
  padding-left: 10px;
}
li {
  float: none;
  display: list-item;
  text-transform: none;
  padding: 0.5rem 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>