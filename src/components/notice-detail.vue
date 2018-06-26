<template>
  <div class="notice-detail">
      <top>通知早知道</top>
      <div class="container">
        <div class="content">
          <h2 v-text="item.title"></h2>
           <p v-html="item.content"></p>
           <div class="createAT">{{item.createTime | time}}</div>
           <div class="auth" v-text="item.author"></div>
        </div>
      </div>
  </div>
</template>
<script>
import top from "../components/top.vue"
export default {
  name:"notice-detail",
  components:{
      top
  },
  data(){
    return{
      item:{}
    }
  },
  methods:{
    getNews(){
      this.$axios.get('getNews',{id:this.$route.query.id}).then(res=>{
        this.item=res.data.data[0];
        //console.log(this.item.desc);
      })
    }
  },
  mounted(){
        this.getNews();
      }
}
</script>
<style scoped>
.notice-detail{
    overflow: hidden;
}
.content h2{
    margin: 55px 0 5px 0;
    padding: 0 15px;
    font-weight:700;
    line-height: 30px;
    color: #000;
  }
  .content p{
    padding: 0 10px;
    line-height: 25px;
    font-weight:700;
    font-size: 18px;
    color: #000;
    line-height:1.5em;
  }
  .createAT, .auth{
      line-height:2em;
    padding-left:10px;
    font-weight:700;
    font-size: 18px;
  }
</style>

