<template>
  <div class="hello">
    <transition name="component-fade" mode="out-in">
          <router-view></router-view>
    </transition>
    <!--底部部分开始-->
    <myfooter class="footer"></myfooter>
    <!--底部部分结束-->
  </div>
</template>

<script>
import myfooter from '@/components/myfooter'
export default {
  name: 'HelloWorld',
  components:{
    myfooter,
  },
}
</script>
<style scoped>
.hello{
  overflow: hidden;
}

/*底部部分开始*/
.footer{
  z-index:0;
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: fixed;
  bottom:0;
  left: 0;
  right: 0;
}
  /*底部部分结束*/
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .2s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>

