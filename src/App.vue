<template>
  <div id="app">
    <div class="menu-wrap">
      <MenuCom></MenuCom>
    </div>

    <div class="view-wrap" style="height:100%;flex: 1;padding:15px">
      <router-view />
    </div>
  </div>
</template>

<script>
import MenuCom from '@/components/MenuCom'

export default {
  name: 'App',
  components: { MenuCom },
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

<style lang="scss" scoped>
#app {
  display: flex;
}
.menu-wrap {
  flex: 0 0 240px;
  height: 100%;
}
</style>
