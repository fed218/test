<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
  name: 'home',
  components: { Navbar, Footer },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import '@/assets/reset.scss';
</style>
