<template lang="html">
   <container>
     <left>
       <left-up></left-up>
       <left-down @onChangeTemplate="selectATemplate"></left-down>
     </left>

     <sp-component v-bind:is="currentView"></sp-component>
   </container>

</template>

<script>
import container from "components/container/container.vue"
import left from "components/left/left.vue"
import leftDown from "components/left-down/left-down.vue"
import leftUp from "components/left-up/left-up.vue"

import storeManage from "./store-manage/index.vue"
import buildingMaterials from "./building-materials/index.vue"
import brand from "./brand/index.vue"
import agent from "./agent/index.vue"
import orderManage from "./order-manage/index.vue"

// var container = require('components/container/container.vue');
// import Vue from 'vue';
// var container = {template:'<div>sss</div>'};

export default {
  components: {
    container: container,
    left: left,
    leftDown: leftDown,
    leftUp: leftUp,
    storeManage: storeManage,
    buildingMaterials: buildingMaterials,
    brand: brand,
    agent: agent,
    orderManage: orderManage

  },
  data () {
    return {
      currentView: 'orderManage'
    }
  },
  computed: {},
  mounted () {},
  methods: {
    selectATemplate: function(arg){
      this.currentView = arg;
    }
  }
}
</script>

<style lang="css">
/*RESET v3*/
html {
  padding: 0px;
  margin: 0px;
  height:100%;
  width: 100%;
}
body{
  padding: 0px;
  margin: 0px;
  height:100%;
  width: 100%;
  overflow:hidden;
}

</style>
