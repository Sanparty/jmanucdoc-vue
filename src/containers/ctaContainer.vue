<template>
    <div class="container-md">
      <div class="row text-center">
        <CtaJohn />
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CtaJohn from "../components/ctaJohn.vue"
export default defineComponent ({
  Name: "ctaContainer",
  components: {
    CtaJohn
  }
})
</script>

<style>

</style>