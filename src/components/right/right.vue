<template lang="html">
   <div id="right">
    <slot></slot>
   </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="css">
#right{
  width: 850px;
  height: 100%;
  float: right;
  background-color: rgb(248, 241, 237);
}
</style>
