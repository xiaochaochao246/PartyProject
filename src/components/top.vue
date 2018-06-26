<template>
      <div class="top">
        <slot></slot>
        <i class="iconfont icon-fanhui" @click="back" style="float: left;margin-left:10px;"></i>
      </div>
</template>
<script>
export default {
  name:"top",
  methods:{
      back(){
          this.$router.go(-1)
      }
  }
}
</script>
<style scoped>
.top{
  width:375px;
  background-color: #c50206;
  height: 44px;
  font-size:18px;
  font-weight: 500;
  text-align: center;
  line-height: 44px;
  color:#fff;
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  /* right:0; */
}
</style>


