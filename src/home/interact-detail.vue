<template>
    <div class="interact">
      <top>党员云互动</top>
      <div class="container">
        <div class="item" v-for="item in arr" :key="item._id">
          <div class="item-head">
            <img :src="item.userAvatar" alt="">
            <div class="right">
              <p>{{item.userName}}</p>
              <span class="iconfont icon-shijianzhongbiao"></span>
              <span>{{item.updateTime | time}}</span>
            </div>
          </div>
          <div class="content">
            {{item.content}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import top from '../components/top'
    export default {
        name: "interact-detail",
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
            this.$axios.get('getInterDetail',{id:this.$route.query.id}).then(res=>{
              console.log(res.data);
              this.arr=res.data.data[0]
            })
          }
      },
      created(){
          this.getData()
      }
    }
</script>

<style scoped>
  .container{
    overflow: hidden;
  }

</style>
