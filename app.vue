<template>
  <d-layout>
      <d-header style="background: #ff">
          <Nav></Nav>
      </d-header>
      <d-content>
          <NuxtLoadingIndicator />
          <NuxtPage />
      </d-content>
      <d-footer>
          <Footer></Footer>
      </d-footer>
  </d-layout>
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
