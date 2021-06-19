<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <div class="app-main">
      <div class="title">{{$route.meta.title}}</div>
      <div class="containt">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Header from './components/Header'
export default {
  name: 'App',
  components: {
      Menu,
      Header
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-top: 140px;
  }
  #app.mobile {
    padding-top: 0;
  }
  body {
    height: auto !important;
    background: #F0F0F9 !important;
  }
  .app-main {
    min-height: 200px;
    border-radius: 2px;
    box-sizing: border-box;
    margin: 100px 20px 20px 256px;
    &>.title {
      height: 54px;
      line-height: 54px;
      padding: 0 24px;
      box-sizing: border-box;
      background: #fff;
      margin-bottom: 20px;
    }
    .containt {
      padding: 0 24px 24px 24px;
      background: #fff;
    }
  }
</style>
