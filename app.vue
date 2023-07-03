<template>
  <div class="container">
    <div class="w-full bg-white">
      <Nav></Nav>
    </div>
  </div>
  <div class="w-full">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
  <div class="w-full">
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Nav from '~/components/common/nav/nav.vue';
import Footer from '~/components/common/footer/index.vue'
</script>

<style lang="scss">
html{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #F9FAFB;
  overflow: auto;
}
</style>
