<template>
  <div id="app" :class="{'mobile': isMobile}">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    <MouseNode></MouseNode>
  </div>
</template>

<script>
import MouseNode from '@/pages/px/web/components/mouse'
import Header from '@/pages/px/web/components/header'
import Footer from '@/pages/px/web/components/footer'
export default {
  name: 'App',
  components: {
    MouseNode,
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
