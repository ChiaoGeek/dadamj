<template lang="html">
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "container",
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style lang="css">
.container{
  width: 1000px;
  height:100%;
  margin: auto;
}
</style>
