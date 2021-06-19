<template>
    <div class="menu">
      <el-menu
      class="menu-content"
      default-active="2"
      background-color="#545c64"
      text-color="#fff"
      height="100%"
      @select="menuChange"
      router
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>作品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="video">视频管理</el-menu-item>
          <el-menu-item index="case">案例管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="msg">
        <i class="el-icon-menu"></i>
        <span slot="title">收件箱</span>
      </el-menu-item>
      <el-menu-item index="qa">
        <i class="el-icon-document"></i>
        <span slot="title">常见问题</span>
      </el-menu-item>
      <el-menu-item index="client">
        <i class="el-icon-setting"></i>
        <span slot="title">客户管理</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>
<script>
export default {
  name: 'Menu',
  methods: {
    menuChange (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss"  scoped>
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 236px;
    height: 100%;
    padding-top: 80px;
    box-sizing: border-box;
    background: #545c64;
    z-index: 2;
    .menu-content {
      width: 100%;
      height: 100%;
    }
  }
</style>
