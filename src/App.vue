<template>
  <div id="app">
    <top></top>
    <transition name="component-fade" mode="out-in">
          <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Vue from "vue"
import top from './components/top.vue'
Vue.filter('time',function(value){
      let d=new Date(value)
      return(d.getFullYear())+'-' //年
      +(d.getMonth()+1 > 9 ? d.getMonth()+ 1 :'0' + (d.getMonth()+1))+'-' //月
      +(d.getDate() > 9 ? d.getDate():'0'+d.getDate())+   //日
      '  '+(d.getHours() > 9 ? d.getHours():'0'+d.getHours())+':' //小时
      +(d.getMinutes() > 9 ? d.getMinutes():'0'+d.getMinutes())+':' //分钟
      +(d.getSeconds() > 9 ? d.getSeconds():'0'+d.getSeconds())  //秒
})
export default {
  name: 'App',
  components:{
    top
  },
  // filters:{
  //   time:function(value){
  //     let d=new Date(value)
  //     return(d.getFullYear())+'-' //年
  //     +(d.getMonth()+1 > 9 ? d.getMonth()+ 1 :'0' + (d.getMonth()+1))+'-' //月
  //     +(d.getDate() > 9 ? d.getDate():'0'+d.getDate())+   //日
  //     '  '+(d.getHours() > 9 ? d.getHours():'0'+d.getHours())+':' //小时
  //     +(d.getMinutes() > 9 ? d.getMinutes():'0'+d.getMinutes())+':' //分钟
  //     +(d.getSeconds() > 9 ? d.getSeconds():'0'+d.getSeconds())  //秒
  //   }
  // },
}
</script>
<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .2s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
