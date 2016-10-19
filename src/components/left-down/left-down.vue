<template lang="html">
  <div id="left-down">
          <div id="blank-ul"></div>
          <ul id="left-down-ul">
            <li class="ldu-li">
              <a href="#" class="ldul-a">店铺管理</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a">建材城</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a">品牌</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a">代理商</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a">订单管理</a>
            </li>
          </ul>
        </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
#left-down{
  height: 100%;
  width: 150px;
  background-color: #E5E9F2;
  overflow: hidden;
}
#blank-ul{
  width: 150px;
  height: 1px;
}
#left-down-ul{
  padding: 0px;
  text-align: center;
  margin: auto;
  width: 120px;
}
.ldu-li{
  list-style: none;
  text-align: center;

}
.ldul-a{
  display: block;
  width: 120px;
  height: 25px;
  color: #999999;
  text-decoration: none;
  line-height: 25px;
  margin-top: 26px;
  font-size: 14px;
}
.ldul-a:hover{
  display: block;
  background-color: rgb(98, 144, 192);
  border-radius: 12.5px;	/* relative value */
  -moz-border-radius: 12.5px;
  -webkit-border-radius: 12.5px;
  color: #fff;
}

</style>
