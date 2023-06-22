<template>
  <div v-for="cta in ctaData" :key="cta.id" class="col-6 col-md-3">
    <router-link :to="{name: cta.routerLink}">
      <div class="cta">
        <img class="cta-image col-12" :src="require('../assets/images/' + cta.image)" :alt="cta.altImage" />
        {{ cta.heading }}
      </div>
    </router-link>        
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ctaData from "@/js/components/data/ctadata"

export default defineComponent ({
  Name: "CtaJohn",
  data () {
    return {
      ctaData: ctaData
    }
  },
});
</script>

<style scoped>
.cta {
    display: inline-block;
    width: 150px;
    height: 150px; 
    text-align: center;
    background-color: #272727;
    border-radius: 50%;
    padding: 10px;
    color: #f7f7f7;
    text-transform: uppercase;
    margin: 10px;
    font-size: .9rem;
    transition: all 0.25s;

}
.cta:hover {
    transform: scale(1.1);
    background-color: black;
    box-shadow: 0 0 10px black;
}
.cta-image {
    height: 5em;
}
</style>