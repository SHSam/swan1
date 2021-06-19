<template>
  <div id="app" class="mobile">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/pages/mobile/components/header'
import Footer from '@/pages/mobile/components/footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-top: 140px;
  }
  #app.mobile {
    padding-top: 0;
  }
</style>
