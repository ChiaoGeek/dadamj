<template lang="html">
   <!-- <container> -->
      <!-- <left>
         <left-down></left-down>
      </left> -->
   <!-- </container> -->
   <container><left></left></container>

</template>

<script>
import container from "../../components/container/container.vue";
import left from "../../components/left/left.vue";
// import leftDown from "../components/left-down/left-down.vue";
console.log(container);
export default {
  components: {
    container,
    left,
    // leftDown,


  },
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {

  },
  components: {}
}
</script>

<style lang="css">

</style>
