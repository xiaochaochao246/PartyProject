<template>
  <div class="notice">
    <top>通知早知道</top>
    <div class="container">
       <div class="content" v-for="item in arr" :key="item._id">
         <router-link :to="'/notice-detail?id='+item._id">
          <img :src="item.img" alt="">
          <div class="local">
            <p v-text="item.title"></p>
            <div style="font-weight: bold; font-size: 12px; color: #999">{{item.createTime | time}}</div>
          </div>
          </router-link>
      </div>
  </div>
  </div>
</template>
<script>
import top from "../components/top.vue"
export default {
  name: 'notice',
  components:{
     top
    },
  data(){
    return{
      arr:[]
    }
  },
  methods:{
    getData(){
          this.$axios.get('getNews',{type:"通知早知道"}).then(res=>{
            this.arr=res.data.data;
          })
       },
  },
  mounted(){
    this.getData();
    }
}
</script>
<style scoped>
.notice{
  overflow: hidden;
}
  .container{
  padding-top:44px;
  }
  a{
  display: flex;
  width: 365px;
  height: 100px;
  justify-content: space-around;
  padding:10px 0 0 10px;
  float: left;
  flex-flow: row;
  border-bottom: 1px solid #ddd;
}
.content img {
  width:80px;
  height: 80px;
}
.content .local{
  margin:0 10px ;
  color: #000;
  line-height: 25px;
  font-size: 16px;
}
</style>


