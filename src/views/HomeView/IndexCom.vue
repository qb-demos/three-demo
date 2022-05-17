<template>
  <div ref="wrap" style="width: 100%;height: 100%"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'HomeView',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {
    this.init()
  },
  methods: {
    init (val) {
      const scene = new THREE.Scene()
      const dom = this.$refs.wrap
      const camera = new THREE.PerspectiveCamera(75, dom.clientWidth / dom.clientHeight, 0.1, 1000)

      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(dom.clientWidth, dom.clientHeight)
      dom.appendChild(renderer.domElement)

      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x00aaaa })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      camera.position.z = 5

      function animate () {
        requestAnimationFrame(animate)
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      animate()
    }
  }
}
</script>

<style lang='scss' scoped></style>
