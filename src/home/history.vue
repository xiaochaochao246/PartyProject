<template>
<div class="history">
    <top>党史上的今天</top>
    <h1 style="margin-top:44px; padding:10px;">党史上的今天</h1>
    <div class="content" v-html="list">
    </div>
</div>
</template>
<script>
import top from "../components/top.vue"
export default {
  name:"history",
  components:{
      top
  },
  data(){
      return{
          list:''
      }
  },
  methods:{
      getHistory(){
          this.$axios.get('getHistory').then(res=>{
              //console.log(res.data);
              this.list=res.data.data
          })
      }
  },
  mounted(){
      this.getHistory()
  }
}
</script>
<style scoped>
.content{
    padding:0 10px;
    line-height: 2em;
}
</style>


