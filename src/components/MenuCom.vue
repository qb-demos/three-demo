<template>
  <el-menu default-active="/" router style="height: 100%">
    <el-submenu index="home">
      <template slot="title">
        <i class="el-icon-folder"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="/">Home</el-menu-item>
    </el-submenu>
    <el-submenu index="about">
      <template slot="title">
        <i class="el-icon-folder"></i>
        <span>导航二</span>
      </template>
      <el-menu-item index="about">About</el-menu-item>
    </el-submenu>
    <!-- <el-menu-item index="about">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>-->
  </el-menu>
</template>

<script>
export default {
  name: 'MenuCom',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='scss' scoped></style>
